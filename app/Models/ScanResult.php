<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ScanResult extends Model
{
    protected $fillable = ['user_id','child_id','overall_score','letters','dyslexia_indicators','parent_feedback'];

    protected $casts = [
        'letters'             => 'array',
        'dyslexia_indicators' => 'array',
    ];

    public function child(): BelongsTo { return $this->belongsTo(Child::class); }
    public function user(): BelongsTo  { return $this->belongsTo(User::class); }
}
