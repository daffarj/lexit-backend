<?php
namespace App\Http\Controllers;

use App\Models\GameSession;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LexPlayController extends Controller
{
    public function index(): Response
    {
        $highScore = 0;
        if (auth()->check()) {
            $user = auth()->user();
            $highScore = GameSession::where('user_id', $user->id)
                ->when($user->active_child_id, fn($q) => $q->where('child_id', $user->active_child_id))
                ->max('score') ?? 0;
        }

        return Inertia::render('LexPlay', [
            'challenges' => $this->getChallenges(),
            'highScore'  => $highScore,
        ]);
    }

    public function saveScore(Request $request)
    {
        $request->validate([
            'score'        => 'required|integer|min:0',
            'levelReached' => 'nullable|integer|min:1', // ← nullable, tidak wajib
            'attempts'     => 'nullable|integer|min:0',
        ]);

        if (auth()->check()) {
            $user = auth()->user();
            GameSession::create([
                'user_id'        => $user->id,
                'child_id'       => $user->active_child_id,
                'score'          => $request->score,
                'level_reached'  => $request->levelReached ?? 1,
                'total_attempts' => $request->attempts ?? 0,
            ]);
        }

        return back()->with('saved', true);
    }

    private function getChallenges(): array
    {
        return [
            ['word' => 'BUKU',   'image' => '📚', 'hint' => 'Kamu membaca ini setiap hari di sekolah'],
            ['word' => 'PENSIL', 'image' => '✏️', 'hint' => 'Alat yang kamu gunakan untuk menulis di buku'],
            ['word' => 'BOLA',   'image' => '⚽', 'hint' => 'Kamu menendang ini saat bermain sepak bola'],
            ['word' => 'SEPATU', 'image' => '👟', 'hint' => 'Kamu memakainya di kaki saat pergi ke sekolah'],
            ['word' => 'MATAHARI','image' => '☀️', 'hint' => 'Benda langit yang bersinar terang di siang hari'],
            ['word' => 'BURUNG', 'image' => '🐦', 'hint' => 'Hewan bersayap yang bernyanyi dan bisa terbang'],
            ['word' => 'MOBIL',  'image' => '🚗', 'hint' => 'Kendaraan beroda empat yang melaju di jalan raya'],
            ['word' => 'KUCING', 'image' => '🐱', 'hint' => 'Hewan berkaki empat yang suka minum susu'],
            ['word' => 'APEL',   'image' => '🍎', 'hint' => 'Buah berwarna merah yang manis'],
            ['word' => 'RUMAH',  'image' => '🏠', 'hint' => 'Tempat kamu tinggal bersama keluarga'],
            
        ];
    }

}