<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::table('game_sessions', function (Blueprint $table) {
            if (!Schema::hasColumn('game_sessions', 'child_id')) {
                $table->foreignId('child_id')
                      ->nullable()
                      ->after('user_id')
                      ->constrained('children')
                      ->nullOnDelete();
            }
        });
    }

    public function down(): void {
        Schema::table('game_sessions', function (Blueprint $table) {
            $table->dropConstrainedForeignId('child_id');
        });
    }
};