<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::table('scan_results', function (Blueprint $table) {
            // Tambah child_id jika belum ada
            if (!Schema::hasColumn('scan_results', 'child_id')) {
                $table->foreignId('child_id')
                      ->nullable()
                      ->after('user_id')
                      ->constrained('children')
                      ->nullOnDelete();
            }
        });
    }

    public function down(): void {
        Schema::table('scan_results', function (Blueprint $table) {
            $table->dropConstrainedForeignId('child_id');
        });
    }
};