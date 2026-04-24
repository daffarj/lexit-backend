<?php
namespace App\Http\Controllers;

use App\Models\ScanResult;
use App\Services\GeminiService;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LexScanController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('LexScan', [
            'scanResults'        => null,
            'overallScore'       => null,
            'dyslexiaIndicators' => null,
            'parentFeedback'     => null,
            'error'              => null,
        ]);
    }

    public function analyze(Request $request, GeminiService $gemini): Response
    {
        $request->validate([
            'image' => 'required|image|mimes:jpg,jpeg,png,webp|max:10240',
        ]);

        try {
            $file     = $request->file('image');
            $base64   = base64_encode(file_get_contents($file->getRealPath()));
            $mimeType = $file->getMimeType() ?? 'image/jpeg';

            $result = $gemini->analyzeHandwriting($base64, $mimeType);

            // Simpan ke DB jika user sudah login
            if (auth()->check()) {
                $user = auth()->user();
                \Illuminate\Support\Facades\Log::info('LexScan saving', [
                    'user_id'  => $user->id,
                    'child_id' => $user->active_child_id,
                    'score'    => $result['overallScore'] ?? 0,
                ]);
                ScanResult::create([
                    'user_id'             => $user->id,
                    'child_id'            => $user->active_child_id,
                    'overall_score'       => $result['overallScore']       ?? 0,
                    'letters'             => $result['letters']            ?? [],
                    'dyslexia_indicators' => $result['dyslexiaIndicators'] ?? [],
                    'parent_feedback'     => $result['parentFeedback']     ?? null,
                ]);
                \Illuminate\Support\Facades\Log::info('LexScan saved!');
            } else {
                \Illuminate\Support\Facades\Log::warning('LexScan: user NOT authenticated, scan not saved!');
            }

            return Inertia::render('LexScan', [
                'scanResults'        => $result['letters']            ?? [],
                'overallScore'       => $result['overallScore']       ?? 0,
                'dyslexiaIndicators' => $result['dyslexiaIndicators'] ?? [],
                'parentFeedback'     => $result['parentFeedback']     ?? null,
                'error'              => null,
            ]);

        } catch (\Throwable $e) {
            return Inertia::render('LexScan', [
                'scanResults'        => null,
                'overallScore'       => null,
                'dyslexiaIndicators' => null,
                'parentFeedback'     => null,
                'error'              => 'Analisis gagal: ' . $e->getMessage(),
            ]);
        }
    }

    public function downloadPdf(Request $request)
    {
        $request->validate([
            'scanResults'        => 'required|array',
            'overallScore'       => 'required|integer',
            'dyslexiaIndicators' => 'nullable|array',
            'parentFeedback'     => 'nullable|string',
        ]);

        $letters            = $request->input('scanResults');
        $overallScore       = $request->input('overallScore');
        $dyslexiaIndicators = $request->input('dyslexiaIndicators', []);
        $parentFeedback     = $request->input('parentFeedback');
        $correctCount       = collect($letters)->where('isCorrect', true)->count();

        $pdf = Pdf::loadView('pdf.lexscan-report', [
            'letters'            => $letters,
            'overallScore'       => $overallScore,
            'dyslexiaIndicators' => $dyslexiaIndicators,
            'parentFeedback'     => $parentFeedback,
            'correctCount'       => $correctCount,
            'totalCount'         => count($letters),
            'date'               => now()->locale('id')->translatedFormat('d F Y'),
        ])->setPaper('a4', 'portrait');

        return $pdf->download('Laporan-LexScan-' . now()->format('Y-m-d') . '.pdf');
    }
}