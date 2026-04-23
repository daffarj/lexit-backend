<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class GeminiService
{
    private string $apiKey;
    private string $baseUrl;
    private string $modelFlash;
    private string $modelPro;

    // Konfigurasi retry
    private int $maxRetries  = 3;
    private int $baseDelayMs = 1000; // 1 detik

    public function __construct()
    {
        $this->apiKey     = config('services.gemini.api_key');
        $this->baseUrl    = config('services.gemini.base_url');
        $this->modelFlash = config('services.gemini.model_flash');
        $this->modelPro   = config('services.gemini.model_pro');
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
            $response = Http::timeout(30)->post($url, $payload);

            // Berhasil
            if ($response->successful()) {
                return $response;
            }

            // Bukan 429 — error lain, langsung lempar
            if ($response->status() !== 429) {
                Log::error('Gemini error bukan 429', [
                    'status' => $response->status(),
                    'body'   => $response->body(),
                ]);
                return $response;
            }

            // 429 — hitung delay exponential backoff
            $delayMs = $this->baseDelayMs * pow(2, $attempt); // 1s, 2s, 4s
            $attempt++;

            if ($attempt > $this->maxRetries) {
                Log::warning("Gemini 429: semua {$this->maxRetries} retry habis, menggunakan fallback.");
                return $response; // kembalikan response 429 terakhir
            }

            Log::info("Gemini 429: rate limited, retry ke-{$attempt} dalam {$delayMs}ms...");
            usleep($delayMs * 1000); // convert ms ke microseconds
        }

        return null;
    }

    /**
     * Analisis foto tulisan tangan anak untuk deteksi disleksia.
     */
    public function analyzeHandwriting(string $base64Image, string $mimeType = 'image/jpeg'): array
    {
        $prompt = 'Kamu adalah asisten deteksi disleksia untuk anak Indonesia usia 5-12 tahun. '
            . 'Analisis foto tulisan tangan ini dan berikan respons HANYA dalam format JSON berikut tanpa markdown: '
            . '{"letters":[{"letter":"A","confidence":90,"isCorrect":true,"feedback":"Huruf A ditulis dengan baik."}],'
            . '"overallScore":85,"dyslexiaIndicators":["pembalikan b-d"],"parentFeedback":"Feedback singkat untuk orang tua."} '
            . 'Aturan: deteksi huruf terbalik (b-d, p-q, n-u), gunakan Bahasa Indonesia ramah, '
            . 'overallScore 0-100, balas HANYA JSON murni tanpa penjelasan tambahan.';

        $url     = "{$this->baseUrl}/models/{$this->modelFlash}:generateContent?key={$this->apiKey}";
        $payload = [
            'contents' => [['parts' => [
                ['inline_data' => ['mime_type' => $mimeType, 'data' => $base64Image]],
                ['text' => $prompt],
            ]]],
            'generationConfig' => [
                'temperature'      => 0.2,
                'responseMimeType' => 'application/json',
            ],
        ];

        $response = $this->requestWithBackoff($url, $payload);

        // Semua retry habis atau null → fallback mock
        if (! $response || $response->status() === 429) {
            Log::warning('Gemini quota habis setelah semua retry, menggunakan mock data.');
            return $this->mockAnalysisResult();
        }

        if ($response->failed()) {
            throw new \RuntimeException(
                'Gemini API request gagal: ' . $response->status() . ' - ' . $response->body()
            );
        }

        $text    = $response->json('candidates.0.content.parts.0.text');
        $decoded = json_decode($text, true);

        if (json_last_error() !== JSON_ERROR_NONE || ! $decoded) {
            Log::error('Gemini response bukan JSON valid', ['raw' => $text]);
            throw new \RuntimeException('Respons Gemini tidak dapat diproses.');
        }

        return $decoded;
    }

    /**
     * Generate narasi laporan perkembangan anak untuk orang tua.
     */
    public function generateReport(array $childData): string
    {
        $dataJson = json_encode($childData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

        $url     = "{$this->baseUrl}/models/{$this->modelPro}:generateContent?key={$this->apiKey}";
        $payload = [
            'contents' => [['parts' => [['text'
                => "Buat laporan disleksia untuk orang tua dalam Bahasa Indonesia. "
                .  "Data: {$dataJson}. "
                .  "Panduan: hangat, positif, highlight kemajuan, jelaskan indikator dengan bahasa awam, "
                .  "berikan 3 rekomendasi terapi di rumah, maksimal 400 kata, tanpa judul.",
            ]]]],
            'generationConfig' => ['temperature' => 0.4],
        ];

        $response = $this->requestWithBackoff($url, $payload);

        if (! $response || $response->status() === 429) {
            return '[Mode Demo] Laporan tidak dapat dibuat karena quota Gemini API habis. '
                 . 'Coba lagi dalam beberapa menit.';
        }

        if ($response->failed()) {
            Log::error('Gemini generateReport gagal', ['status' => $response->status()]);
            return 'Laporan tidak dapat dibuat saat ini. Silakan coba lagi nanti.';
        }

        return $response->json('candidates.0.content.parts.0.text') ?? '';
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