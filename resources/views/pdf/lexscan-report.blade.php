<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'DejaVu Sans', sans-serif;
    font-size: 13px;
    color: #2D3748;
    background: #fff;
    padding: 40px;
  }

  /* Header */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px solid #3BBFAD;
    padding-bottom: 20px;
    margin-bottom: 28px;
  }
  .logo { font-size: 28px; font-weight: bold; color: #1A2E4A; }
  .logo span { color: #3BBFAD; }
  .report-title { text-align: right; }
  .report-title h2 { font-size: 16px; color: #1A2E4A; }
  .report-title p { font-size: 11px; color: #888; margin-top: 4px; }

  /* Score box */
  .score-row {
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
  }
  .score-box {
    flex: 1;
    background: #3BBFAD;
    color: white;
    border-radius: 12px;
    padding: 18px 20px;
    text-align: center;
  }
  .score-box.amber { background: #F5A623; }
  .score-box.navy  { background: #1A2E4A; }
  .score-box .number { font-size: 32px; font-weight: bold; }
  .score-box .label  { font-size: 11px; margin-top: 4px; opacity: .85; }

  /* Section title */
  .section-title {
    font-size: 15px;
    font-weight: bold;
    color: #1A2E4A;
    border-left: 4px solid #3BBFAD;
    padding-left: 10px;
    margin-bottom: 14px;
    margin-top: 24px;
  }

  /* Letter cards */
  .letter-grid {
    display: table;
    width: 100%;
    border-collapse: collapse;
  }
  .letter-row {
    display: table-row;
  }
  .letter-card {
    display: table-cell;
    width: 48%;
    padding: 12px 14px;
    border-radius: 10px;
    margin-bottom: 10px;
    vertical-align: top;
  }
  /* DomPDF tidak support display:grid, pakai table layout */
  table.letter-table { width: 100%; border-collapse: separate; border-spacing: 8px; }
  table.letter-table td {
    width: 50%;
    padding: 12px 14px;
    border-radius: 10px;
    vertical-align: top;
  }
  td.correct { background: #E8F5E9; border: 1px solid #A5D6A7; }
  td.wrong   { background: #FFEBEE; border: 1px solid #FFCDD2; }

  .letter-head {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 6px;
  }
  .letter-badge {
    width: 36px; height: 36px;
    border-radius: 8px;
    background: white;
    border: 1px solid #ddd;
    text-align: center;
    line-height: 36px;
    font-size: 18px;
    font-weight: bold;
    color: #1A2E4A;
    display: inline-block;
  }
  .letter-status { font-size: 11px; font-weight: bold; }
  .status-ok   { color: #2E7D32; }
  .status-warn { color: #C62828; }
  .conf-bar-wrap { background: #eee; border-radius: 4px; height: 6px; margin: 6px 0 4px; }
  .conf-bar { height: 6px; border-radius: 4px; background: #3BBFAD; }
  .conf-bar.low { background: #EF5350; }
  .feedback-text { font-size: 11px; color: #555; line-height: 1.5; }

  /* Indicators */
  .indicator-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
  .indicator-pill {
    background: #FFF3E0;
    border: 1px solid #FFCC80;
    color: #E65100;
    border-radius: 20px;
    padding: 4px 12px;
    font-size: 11px;
    font-weight: bold;
  }

  /* Parent feedback */
  .feedback-box {
    background: #FFF8E1;
    border-left: 4px solid #F5A623;
    border-radius: 0 10px 10px 0;
    padding: 16px 18px;
    font-size: 12px;
    line-height: 1.8;
    color: #4A3700;
    margin-top: 8px;
  }

  /* Footer */
  .footer {
    margin-top: 36px;
    border-top: 1px solid #eee;
    padding-top: 14px;
    font-size: 10px;
    color: #aaa;
    display: flex;
    justify-content: space-between;
  }
</style>
</head>
<body>

{{-- Header --}}
<div class="header">
  <div class="logo">le<span>x</span>it <span style="font-size:13px;color:#888;font-weight:normal;">Dyslexia Care</span></div>
  <div class="report-title">
    <h2>Laporan Analisis LexScan</h2>
    <p>Tanggal: {{ $date }}</p>
  </div>
</div>

{{-- Score Summary --}}
<table style="width:100%;border-collapse:separate;border-spacing:12px;">
  <tr>
    <td style="background:#3BBFAD;color:white;border-radius:12px;padding:16px;text-align:center;width:33%;">
      <div style="font-size:30px;font-weight:bold;">{{ $overallScore }}%</div>
      <div style="font-size:11px;opacity:.85;margin-top:4px;">Akurasi Keseluruhan</div>
    </td>
    <td style="background:#1A2E4A;color:white;border-radius:12px;padding:16px;text-align:center;width:33%;">
      <div style="font-size:30px;font-weight:bold;">{{ $correctCount }}/{{ $totalCount }}</div>
      <div style="font-size:11px;opacity:.85;margin-top:4px;">Huruf Benar</div>
    </td>
    <td style="background:#F5A623;color:white;border-radius:12px;padding:16px;text-align:center;width:33%;">
      <div style="font-size:30px;font-weight:bold;">{{ count($dyslexiaIndicators) }}</div>
      <div style="font-size:11px;opacity:.85;margin-top:4px;">Indikator Disleksia</div>
    </td>
  </tr>
</table>

{{-- Dyslexia Indicators --}}
@if(count($dyslexiaIndicators) > 0)
<div class="section-title">Indikator Disleksia Terdeteksi</div>
<div class="indicator-row">
  @foreach($dyslexiaIndicators as $indicator)
    <span class="indicator-pill">{{ $indicator }}</span>
  @endforeach
</div>
@endif

{{-- Letter Detail --}}
<div class="section-title">Analisis Detail Per Huruf</div>
<table class="letter-table">
  @foreach(array_chunk($letters, 2) as $row)
  <tr>
    @foreach($row as $letter)
    <td class="{{ $letter['isCorrect'] ? 'correct' : 'wrong' }}">
      <div class="letter-head">
        <span class="letter-badge">{{ $letter['letter'] }}</span>
        <div>
          <div class="letter-status {{ $letter['isCorrect'] ? 'status-ok' : 'status-warn' }}">
            {{ $letter['isCorrect'] ? '✓ Benar' : '✗ Perlu Perbaikan' }}
          </div>
          <div style="font-size:10px;color:#888;">Confidence: {{ $letter['confidence'] }}%</div>
        </div>
      </div>
      <div class="conf-bar-wrap">
        <div class="conf-bar {{ $letter['confidence'] < 70 ? 'low' : '' }}" style="width:{{ $letter['confidence'] }}%;"></div>
      </div>
      <div class="feedback-text">{{ $letter['feedback'] }}</div>
    </td>
    @endforeach
    {{-- Isi sel kosong kalau row ganjil --}}
    @if(count($row) === 1)
    <td style="background:transparent;border:none;"></td>
    @endif
  </tr>
  @endforeach
</table>

{{-- Parent Feedback --}}
@if($parentFeedback)
<div class="section-title">Catatan untuk Orang Tua</div>
<div class="feedback-box">{{ $parentFeedback }}</div>
@endif

{{-- Footer --}}
<div class="footer">
  <span>Lexit — Platform Deteksi Disleksia Berbasis AI untuk Anak Indonesia</span>
  <span>Sesuai UU No. 8/2016 • SDG 3, 4, 10</span>
</div>

</body>
</html>