<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Http\Client\Response;

class GeminiService
{
    private string $apiKey;
    private string $baseUrl;
    private string $modelFlash;
    private string $modelPro;

    // Konfigurasi retry
    private int $maxRetries  = 3;
    private int $baseDelayMs = 3000; // 3 detik

    public function __construct()
    {
        $this->apiKey     = config('services.gemini.api_key');
        $this->baseUrl    = rtrim(config('services.gemini.base_url'), '/');
        $this->modelFlash = config('services.gemini.model_flash');
        $this->modelPro   = config('services.gemini.model_pro');
        
        // DEBUG SEMENTARA - hapus setelah fix
        Log::info('Gemini Config', [
            'api_key' => substr($this->apiKey, 0, 20) . '...',
            'base_url' => $this->baseUrl,
            'model_flash' => $this->modelFlash,
        ]);
    }

    /**
     * Kirim request ke Gemini dengan Exponential Backoff.
     * Jika 429, tunggu 1s → 2s → 4s sebelum retry.
     * Jika semua retry habis, return null.
     */
    private function requestWithBackoff(string $url, array $payload): ?\Illuminate\Http\Client\Response
    {
        $attempt = 0;

        while ($attempt <= $this->maxRetries) {
            $response = Http::timeout(60)
                ->withHeaders([
                    'Authorization' => 'Bearer ' . $this->apiKey,  // ← INI yang kurang!
                    'Content-Type'  => 'application/json',
                    'HTTP-Referer'  => config('app.url'),
                    'X-Title'       => config('app.name'),
                ])
                ->post($url, $payload);

            if ($response->successful()) {
                return $response;
            }

            if ($response->status() !== 429) {
                Log::error('OpenRouter error bukan 429', [
                    'status' => $response->status(),
                    'body'   => $response->body(),
                ]);
                return $response;
            }

            $delayMs = $this->baseDelayMs * pow(2, $attempt);
            $attempt++;

            if ($attempt > $this->maxRetries) {
                Log::warning("OpenRouter 429: semua {$this->maxRetries} retry habis.");
                return $response;
            }

            Log::info("OpenRouter 429: retry ke-{$attempt} dalam {$delayMs}ms...");
            usleep($delayMs * 1000);
        }

        return null;
    }

    /**
     * Analisis foto tulisan tangan anak untuk deteksi disleksia.
     */
    public function analyzeHandwriting(string $base64Image, string $mimeType = 'image/jpeg'): array
{
    // $base64Image = $this->compressBase64Image($base64Image, $mimeType);

    $prompt = 'Kamu adalah asisten deteksi disleksia untuk anak Indonesia usia 5-12 tahun. '
        . 'Analisis foto tulisan tangan ini dan berikan respons HANYA dalam format JSON berikut tanpa markdown: '
        . '{"letters":[{"letter":"A","confidence":90,"isCorrect":true,"feedback":"Huruf A ditulis dengan baik."}],'
        . '"overallScore":85,"dyslexiaIndicators":["pembalikan b-d"],"parentFeedback":"Feedback singkat untuk orang tua."} '
        . 'Aturan: deteksi huruf terbalik (b-d, p-q, n-u), gunakan Bahasa Indonesia ramah, '
        . 'overallScore 0-100, balas HANYA JSON murni tanpa penjelasan tambahan.';

    $url     = "{$this->baseUrl}/chat/completions";
    $payload = [
        'model'    => $this->modelFlash,
        'messages' => [[
            'role'    => 'user',
            'content' => [
                [
                    'type'      => 'image_url',
                    'image_url' => [
                        'url' => "data:{$mimeType};base64,{$base64Image}"
                    ],
                ],
                [
                    'type' => 'text',
                    'text' => $prompt,
                ],
            ],
        ]],
        'temperature' => 0.2,
    ];

    $response = $this->requestWithBackoff($url, $payload);

    if (! $response || $response->status() === 429) {
        Log::warning('OpenRouter quota habis, menggunakan mock data.');
        return $this->mockAnalysisResult();
    }

    if ($response->failed()) {
        throw new \RuntimeException(
            'OpenRouter API request gagal: ' . $response->status() . ' - ' . $response->body()
        );
    }

    $text = $response->json('choices.0.message.content');

    $text = preg_replace('/```json\s*/', '', $text);
    $text = preg_replace('/```/', '', $text);
    $text = trim($text);

    $decoded = json_decode($text, true);

    if (json_last_error() !== JSON_ERROR_NONE || ! $decoded) {
        Log::error('OpenRouter response bukan JSON valid', [
            'raw'        => $text,
            'json_error' => json_last_error_msg()
        ]);
        throw new \RuntimeException('Respons OpenRouter tidak dapat diproses.');
    }

    return $decoded;
}

// Jika gambar terlalu besar, kompres agar tetap di bawah 4MB (limit Gemini)
// private function compressBase64Image(string $base64Image, string $mimeType): string
// {
//     $imageData = base64_decode($base64Image);
//     $image     = imagecreatefromstring($imageData);
    
//     if (!$image) return $base64Image; // fallback jika gagal
    
//     // Resize jika lebih dari 1024px
//     $width  = imagesx($image);
//     $height = imagesy($image);
//     $maxSize = 1024;
    
//     if ($width > $maxSize || $height > $maxSize) {
//         $ratio     = min($maxSize / $width, $maxSize / $height);
//         $newWidth  = (int)($width * $ratio);
//         $newHeight = (int)($height * $ratio);
        
//         $resized = imagecreatetruecolor($newWidth, $newHeight);
//         imagecopyresampled($resized, $image, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);
//         $image = $resized;
//     }
    
//     // Output ke buffer dengan quality 75%
//     ob_start();
//     imagejpeg($image, null, 75);
//     $compressed = ob_get_clean();
//     imagedestroy($image);
    
//     return base64_encode($compressed);
// }

    /**
     * Generate jawaban.
     */
public function generateReport(array $childData): string
{
    $dataJson = json_encode($childData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

    $url     = "{$this->baseUrl}/chat/completions";
    $payload = [
        'model'    => $this->modelPro,
        'messages' => [[
            'role'    => 'user',
            'content' => "Buat laporan disleksia untuk orang tua dalam Bahasa Indonesia. "
                       . "Data: {$dataJson}. "
                       . "Panduan: hangat, positif, highlight kemajuan, jelaskan indikator dengan bahasa awam, "
                       . "berikan 3 rekomendasi terapi di rumah, maksimal 400 kata, tanpa judul.",
        ]],
        'temperature' => 0.4,
    ];

    $response = Http::timeout(30)
    ->withHeaders([
        'Authorization' => 'Bearer ' . $this->apiKey,
        'Content-Type'  => 'application/json',
        'HTTP-Referer'  => config('app.url'),
        'X-Title'       => config('app.name'),
    ])
    ->post($url, $payload);

    if (! $response || $response->status() === 429) {
        return '[Mode Demo] Laporan tidak dapat dibuat karena quota habis.';
    }

    if ($response->failed()) {
        Log::error('OpenRouter generateReport gagal', ['status' => $response->status()]);
        return 'Laporan tidak dapat dibuat saat ini. Silakan coba lagi nanti.';
    }

    return $response->json('choices.0.message.content') ?? '';
}

    /**
     * Mock data untuk development saat Gemini API tidak tersedia / quota habis.
     */
    private function mockAnalysisResult(): array
    {
        return [
            'letters' => [
                ['letter' => 'A', 'confidence' => 92, 'isCorrect' => true,  'feedback' => 'Huruf A ditulis dengan baik dan proporsional.'],
                ['letter' => 'B', 'confidence' => 88, 'isCorrect' => true,  'feedback' => 'Huruf B sudah benar, bentuk lengkungannya rapi.'],
                ['letter' => 'C', 'confidence' => 90, 'isCorrect' => true,  'feedback' => 'Huruf C ditulis dengan bukaan yang tepat.'],
                ['letter' => 'D', 'confidence' => 58, 'isCorrect' => false, 'feedback' => 'Huruf D terlihat seperti huruf B terbalik. Ingat: lingkaran D ada di sisi kanan tongkat.'],
                ['letter' => 'E', 'confidence' => 85, 'isCorrect' => true,  'feedback' => 'Huruf E bagus, garis horizontalnya sudah rapi.'],
                ['letter' => 'P', 'confidence' => 62, 'isCorrect' => false, 'feedback' => 'Huruf P dan Q sering tertukar. Ingat: P punya perut di atas, Q punya ekor di bawah kanan.'],
            ],
            'overallScore'       => 76,
            'dyslexiaIndicators' => ['pembalikan b-d', 'kebingungan p-q'],
            'parentFeedback'     => '[Mode Demo — Gemini sedang dibatasi] Skor keseluruhan 76/100. '
                . 'Ditemukan pola pembalikan b↔d dan kebingungan p↔q yang umum pada disleksia. '
                . 'Disarankan latihan huruf D dan P di LexPlay setiap hari 10–15 menit.',
        ];
    }
}