<?php
// app/Http/Controllers/LexPlayController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LexPlayController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('LexPlay', [
            'challenges' => $this->getChallenges(),
            'highScore' => 0, // nanti dari DB: auth()->user()->high_score ?? 0
        ]);
    }

    public function saveScore(Request $request)
    {
        $request->validate(['score' => 'required|integer|min:0']);
        // TODO: simpan ke DB
        return back();
    }

    private function getChallenges(): array
    {
        return [
            ['word' => 'BUKU',   'image' => '📚', 'hint' => 'Kamu membaca ini setiap hari di sekolah'],
            ['word' => 'KUCING', 'image' => '🐱', 'hint' => 'Hewan berkaki empat yang suka minum susu'],
            ['word' => 'APEL',   'image' => '🍎', 'hint' => 'Buah berwarna merah yang manis'],
            ['word' => 'RUMAH',  'image' => '🏠', 'hint' => 'Tempat kamu tinggal bersama keluarga'],
            ['word' => 'BOLA',   'image' => '⚽', 'hint' => 'Kamu menendang ini saat bermain sepak bola'],
        ];
    }
}