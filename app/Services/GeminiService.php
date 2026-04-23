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

    public function __construct()
    {
        $this->apiKey     = config('services.gemini.api_key');
        $this->baseUrl    = config('services.gemini.base_url');
        $this->modelFlash = config('services.gemini.model_flash');
        $this->modelPro   = config('services.gemini.model_pro');
    }

    /**
     * Analisis foto tulisan tangan anak untuk deteksi disleksia.
     * Menggunakan Gemini Flash — cepat dan hemat biaya.
     */
    public function analyzeHandwriting(string $base64Image, string $mimeType = 'image/jpeg'): array
    {
        $prompt = <<<PROMPT
        Kamu adalah asisten deteksi disleksia untuk anak Indonesia usia 5–12 tahun.

        Analisis foto tulisan tangan ini dan berikan respons HANYA dalam format JSON berikut,
        tanpa markdown, tanpa teks tambahan apapun:

        {
          "letters": [
            {
              "letter": "A",
              "confidence": 90,
              "isCorrect": true,
              "feedback": "Huruf A ditulis dengan sangat baik dan proporsional."
            }
          ],
          "overallScore": 85,
          "dyslexiaIndicators": ["pembalikan b-d", "kebingungan p-q"],
          "parentFeedback": "Kalimat ringkas untuk orang tua dalam Bahasa Indonesia yang hangat dan tidak menghakimi."
        }

        Aturan penting:
        - Deteksi huruf yang terbalik seperti b↔d, p↔q, n↔u sebagai indikasi disleksia
        - Gunakan Bahasa Indonesia yang ramah dan positif untuk feedback
        - overallScore antara 0 hingga 100
        - Jika gambar tidak jelas atau bukan tulisan tangan, kembalikan overallScore 0 dan jelaskan di parentFeedback
        - Balas HANYA dengan JSON murni, tidak ada penjelasan tambahan
        PROMPT;

        $response = Http::timeout(30)
            ->post("{$this->baseUrl}/models/{$this->modelFlash}:generateContent?key={$this->apiKey}", [
                'contents' => [
                    [
                        'parts' => [
                            [
                                'inline_data' => [
                                    'mime_type' => $mimeType,
                                    'data'      => $base64Image,
                                ],
                            ],
                            ['text' => $prompt],
                        ],
                    ],
                ],
                'generationConfig' => [
                    'temperature'      => 0.2,
                    'responseMimeType' => 'application/json',
                ],
            ]);

        if ($response->failed()) {
            Log::error('Gemini analyzeHandwriting gagal', [
                'status' => $response->status(),
                'body'   => $response->body(), // ← ini akan tunjukkan pesan error detail dari Gemini
            ]);
        throw new \RuntimeException('Gemini API request gagal: ' . $response->status() . ' - ' . $response->body());
    }

        $text = $response->json('candidates.0.content.parts.0.text');

        $decoded = json_decode($text, true);

        if (json_last_error() !== JSON_ERROR_NONE || ! $decoded) {
            Log::error('Gemini response bukan JSON valid', ['raw' => $text]);
            throw new \RuntimeException('Respons Gemini tidak dapat diproses.');
        }

        return $decoded;
    }

    /**
     * Generate narasi laporan perkembangan anak untuk orang tua.
     * Menggunakan Gemini Pro — lebih pintar untuk teks panjang.
     */
    public function generateReport(array $childData): string
    {
        $dataJson = json_encode($childData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

        $response = Http::timeout(60)
            ->post("{$this->baseUrl}/models/{$this->modelPro}:generateContent?key={$this->apiKey}", [
                'contents' => [
                    [
                        'parts' => [
                            [
                                'text' => <<<PROMPT
                                Buat laporan perkembangan disleksia untuk orang tua dalam Bahasa Indonesia.

                                Data anak:
                                {$dataJson}

                                Panduan penulisan laporan:
                                - Gunakan bahasa yang hangat, positif, dan tidak menghakimi
                                - Highlight kemajuan yang sudah dicapai anak terlebih dahulu
                                - Jelaskan indikator disleksia yang ditemukan dengan bahasa yang mudah dipahami orang awam
                                - Berikan tepat 3 rekomendasi terapi konkret yang bisa dilakukan di rumah
                                - Maksimal 400 kata
                                - Tulis langsung isi laporan, tanpa judul atau header apapun
                                PROMPT,
                            ],
                        ],
                    ],
                ],
                'generationConfig' => [
                    'temperature' => 0.4,
                ],
            ]);

        if ($response->failed()) {
            Log::error('Gemini generateReport gagal', [
                'status' => $response->status(),
                'body'   => $response->body(),
            ]);
            return 'Laporan tidak dapat dibuat saat ini. Silakan coba lagi nanti.';
        }

        return $response->json('candidates.0.content.parts.0.text') ?? '';

        
    }
}
