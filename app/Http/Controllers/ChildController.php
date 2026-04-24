<?php
namespace App\Http\Controllers;

use App\Models\Child;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChildController extends Controller
{
    // Switch ke mode anak
    public function switchToChild(Request $request, Child $child)
    {
        abort_unless($child->user_id === auth()->id(), 403);
        auth()->user()->update(['active_child_id' => $child->id]);
        return redirect()->route('lexplay');
    }

    // Kembali ke mode parent
    public function switchToParent()
    {
        auth()->user()->update(['active_child_id' => null]);
        return redirect()->route('dashboard');
    }

    // Simpan anak baru
    public function store(Request $request)
    {
        $request->validate([
            'name'   => 'required|string|max:50',
            'age'    => 'nullable|integer|min:3|max:18',
            'avatar' => 'nullable|string|max:10',
        ]);

        auth()->user()->children()->create([
            'name'   => $request->name,
            'age'    => $request->age,
            'avatar' => $request->avatar ?? '🧒',
        ]);

        return back()->with('success', 'Profil anak berhasil ditambahkan!');
    }

    // Hapus profil anak
    public function destroy(Child $child)
    {
        abort_unless($child->user_id === auth()->id(), 403);

        // Reset active_child jika yang dihapus sedang aktif
        if (auth()->user()->active_child_id === $child->id) {
            auth()->user()->update(['active_child_id' => null]);
        }

        $child->delete();
        return back()->with('success', 'Profil anak dihapus.');
    }
}