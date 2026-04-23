<?php

namespace App\Jobs;

use App\Services\GeminiService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class AnalyzeHandwritingJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $tries   = 3;
    public int $timeout = 60;

    public function __construct(
        private string $cacheKey,
        private string $base64Image,
        private string $mimeType = 'image/jpeg',
    ) {}

    public function handle(GeminiService $gemini): void
    {
        try {
            $result = $gemini->analyzeHandwriting($this->base64Image, $this->mimeType);

            Cache::put($this->cacheKey, [
                'status' => 'done',
                'result' => $result,
            ], now()->addMinutes(10));

        } catch (\Throwable $e) {
            Log::error('AnalyzeHandwritingJob gagal', ['error' => $e->getMessage()]);

            Cache::put($this->cacheKey, [
                'status'  => 'error',
                'message' => 'Analisis gagal. Silakan coba lagi.',
            ], now()->addMinutes(5));
        }
    }
}