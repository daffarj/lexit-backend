<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Child extends Model
{
    protected $fillable = ['user_id', 'name', 'age', 'avatar'];

    public function parent(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function scanResults(): HasMany
    {
        return $this->hasMany(ScanResult::class);
    }

    public function gameSessions(): HasMany
    {
        return $this->hasMany(GameSession::class);
    }

    // Skor rata-rata dari semua scan
    public function getAvgScoreAttribute(): int
    {
        return (int) $this->scanResults()->avg('overall_score') ?? 0;
    }

    // Total sesi bermain
    public function getTotalPlaysAttribute(): int
    {
        return $this->gameSessions()->count();
    }
}
