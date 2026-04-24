<?php
namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'App';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    // Data yang tersedia di SEMUA halaman via usePage().props
    public function share(Request $request): array
    {
        $user = $request->user();

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $user ? [
                    'id'            => $user->id,
                    'name'          => $user->name,
                    'email'         => $user->email,
                    'activeChildId' => $user->active_child_id,
                    'isChildMode'   => $user->isChildMode(),
                    'activeChild'   => $user->activeChild ? [
                        'id'     => $user->activeChild->id,
                        'name'   => $user->activeChild->name,
                        'avatar' => $user->activeChild->avatar,
                    ] : null,
                ] : null,
            ],
            'flash' => [
                'success' => $request->session()->get('success'),
                'error'   => $request->session()->get('error'),
            ],
        ];
    }
}