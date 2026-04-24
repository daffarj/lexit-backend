<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class GameSession extends Model
{
    protected $fillable = ['user_id','child_id','score','level_reached','total_attempts'];

    public function child(): BelongsTo { return $this->belongsTo(Child::class); }
    public function user(): BelongsTo  { return $this->belongsTo(User::class); }
}
