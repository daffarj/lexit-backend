<?php
// app/Http/Controllers/LexScanController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LexScanController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('LexScan', [
            'scanResults' => null,
        ]);
    }

    public function analyze(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:10240', // max 10MB
        ]);

        // TODO: Nanti integrasikan GeminiService di sini
        // Untuk sekarang, kembalikan mock data
        $mockResult = [
            'scanResults' => [
                ['letter' => 'B', 'confidence' => 85, 'isCorrect' => true, 'feedback' => 'Bagus!'],
                ['letter' => 'D', 'confidence' => 60, 'isCorrect' => false, 'feedback' => 'Perhatikan arah huruf D'],
            ],
            'overallScore' => 72,
            'dyslexiaIndicators' => ['pembalikan b-d'],
            'parentFeedback' => 'Anak menunjukkan pola umum disleksia pada huruf b dan d.',
        ];

        return back()->with($mockResult);
    }
}