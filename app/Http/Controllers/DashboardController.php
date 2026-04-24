<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $user = auth()->user()->load(['children', 'activeChild']);

        // Data per anak untuk tampil di dashboard
        $childrenData = $user->children->map(function ($child) {
            $scans    = $child->scanResults()->latest()->take(5)->get();
            $sessions = $child->gameSessions()->latest()->take(5)->get();

            return [
                'id'           => $child->id,
                'name'         => $child->name,
                'age'          => $child->age,
                'avatar'       => $child->avatar,
                'avgScore'     => (int) $child->scanResults()->avg('overall_score') ?? 0,
                'totalScans'   => $child->scanResults()->count(),
                'totalPlays'   => $child->gameSessions()->count(),
                'highScore'    => $child->gameSessions()->max('score') ?? 0,
                'recentScans'  => $scans->map(fn($s) => [
                    'id'           => $s->id,
                    'overallScore' => $s->overall_score,
                    'indicators'   => $s->dyslexia_indicators ?? [],
                    'date'         => $s->created_at->locale('id')->diffForHumans(),
                ]),
                'recentPlays'  => $sessions->map(fn($s) => [
                    'score'        => $s->score,
                    'levelReached' => $s->level_reached,
                    'date'         => $s->created_at->locale('id')->diffForHumans(),
                ]),
            ];
        });

        return Inertia::render('Dashboard', [
            'user'        => $user,
            'children'    => $childrenData,
            'activeChild' => $user->activeChild,
            'isChildMode' => $user->isChildMode(),
        ]);
    }
}