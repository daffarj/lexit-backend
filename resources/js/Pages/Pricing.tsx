import { Check, ArrowRight, Sparkles, Crown } from 'lucide-react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Pricing() {
  return (
      <AppLayout>
          <div className="min-h-screen">
              {/* Hero */}
              <section className="bg-gradient-to-br from-[#6FCF97] to-[#5FBF87] text-white py-20">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                      <h1 className="text-5xl md:text-6xl font-bold mb-6">
                          Pilih Paket yang Tepat
                      </h1>
                      <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                          Mulai dengan gratis atau unlock semua fitur premium
                      </p>
                  </div>
              </section>

              {/* Pricing Cards */}
              <section className="py-24 bg-gradient-to-b from-white to-[#F7F5F2]">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                          {/* Free Tier */}
                          <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-200 hover:border-[#3BBFAD] transition-all">
                              <div className="flex items-center gap-3 mb-6">
                                  <div className="w-14 h-14 bg-[#3BBFAD]/10 rounded-2xl flex items-center justify-center">
                                      <Sparkles
                                          className="text-[#3BBFAD]"
                                          size={28}
                                      />
                                  </div>
                                  <div>
                                      <h3 className="text-3xl font-bold text-[#1A2E4A]">
                                          Gratis
                                      </h3>
                                      <p className="text-sm text-[#2D3748]">
                                          Coba sekarang
                                      </p>
                                  </div>
                              </div>

                              <div className="mb-8">
                                  <div className="flex items-baseline gap-2">
                                      <span className="text-5xl font-bold text-[#1A2E4A] font-mono">
                                          Rp 0
                                      </span>
                                      <span className="text-[#2D3748]">
                                          / bulan
                                      </span>
                                  </div>
                                  <p className="text-sm text-[#2D3748] mt-2">
                                      Tidak perlu kartu kredit
                                  </p>
                              </div>

                              <div className="space-y-4 mb-10">
                                  <div className="flex items-start gap-3">
                                      <Check
                                          className="text-[#6FCF97] flex-shrink-0 mt-1"
                                          size={20}
                                      />
                                      <span className="text-[#2D3748]">
                                          <strong className="text-[#1A2E4A]">
                                              1x Skrining LexScan
                                          </strong>{" "}
                                          gratis
                                      </span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                      <Check
                                          className="text-[#6FCF97] flex-shrink-0 mt-1"
                                          size={20}
                                      />
                                      <span className="text-[#2D3748]">
                                          Laporan hasil skrining dasar
                                      </span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                      <Check
                                          className="text-[#6FCF97] flex-shrink-0 mt-1"
                                          size={20}
                                      />
                                      <span className="text-[#2D3748]">
                                          Akses{" "}
                                          <strong className="text-[#1A2E4A]">
                                              5 mini-game
                                          </strong>{" "}
                                          Let's Play
                                      </span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                      <Check
                                          className="text-[#6FCF97] flex-shrink-0 mt-1"
                                          size={20}
                                      />
                                      <span className="text-[#2D3748]">
                                          Dashboard progres dasar
                                      </span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                      <Check
                                          className="text-[#6FCF97] flex-shrink-0 mt-1"
                                          size={20}
                                      />
                                      <span className="text-[#2D3748]">
                                          Artikel dan panduan disleksia
                                      </span>
                                  </div>
                              </div>

                              <button className="w-full py-4 bg-[#3BBFAD] text-white rounded-2xl font-bold text-lg hover:bg-[#2A9989] transition-all shadow-lg hover:shadow-xl">
                                  Mulai Gratis
                              </button>

                              <p className="text-center text-sm text-[#2D3748] mt-4">
                                  Sempurna untuk mencoba dan mengenal Lexit
                              </p>
                          </div>

                          {/* Premium Tier */}
                          <div className="bg-gradient-to-br from-[#F5A623] to-[#E09420] rounded-3xl p-10 shadow-2xl text-white relative overflow-hidden transform hover:scale-105 transition-all">
                              {/* Popular Badge */}
                              <div className="absolute top-6 right-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                                  <span className="text-sm font-bold">
                                      🔥 Populer
                                  </span>
                              </div>

                              <div className="flex items-center gap-3 mb-6">
                                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                      <Crown className="text-white" size={28} />
                                  </div>
                                  <div>
                                      <h3 className="text-3xl font-bold">
                                          Premium
                                      </h3>
                                      <p className="text-sm text-white/80">
                                          Fitur lengkap
                                      </p>
                                  </div>
                              </div>

                              <div className="mb-8">
                                  <div className="flex items-baseline gap-2">
                                      <span className="text-5xl font-bold font-mono">
                                          Rp 99K
                                      </span>
                                      <span className="text-white/80">
                                          / bulan
                                      </span>
                                  </div>
                                  <p className="text-sm text-white/80 mt-2">
                                      atau Rp 990K/tahun (hemat 17%)
                                  </p>
                              </div>

                              <div className="space-y-4 mb-10">
                                  <div className="flex items-start gap-3">
                                      <Check
                                          className="text-white flex-shrink-0 mt-1"
                                          size={20}
                                      />
                                      <span>
                                          <strong>
                                              Unlimited skrining LexScan
                                          </strong>{" "}
                                          kapan saja
                                      </span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                      <Check
                                          className="text-white flex-shrink-0 mt-1"
                                          size={20}
                                      />
                                      <span>
                                          Laporan detail + analisis mendalam
                                          (PDF)
                                      </span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                      <Check
                                          className="text-white flex-shrink-0 mt-1"
                                          size={20}
                                      />
                                      <span>
                                          <strong>20+ mini-game</strong> Let's
                                          Play dengan adaptive learning
                                      </span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                      <Check
                                          className="text-white flex-shrink-0 mt-1"
                                          size={20}
                                      />
                                      <span>
                                          Dashboard progres lengkap + grafik
                                          perkembangan
                                      </span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                      <Check
                                          className="text-white flex-shrink-0 mt-1"
                                          size={20}
                                      />
                                      <span>
                                          Rekomendasi terapi personalisasi
                                      </span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                      <Check
                                          className="text-white flex-shrink-0 mt-1"
                                          size={20}
                                      />
                                      <span>
                                          <strong>Konsultasi chat</strong>{" "}
                                          dengan psikolog klinis (2x/bulan)
                                      </span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                      <Check
                                          className="text-white flex-shrink-0 mt-1"
                                          size={20}
                                      />
                                      <span>
                                          Fitur multi-anak (hingga 3 profil)
                                      </span>
                                  </div>
                                  <div className="flex items-start gap-3">
                                      <Check
                                          className="text-white flex-shrink-0 mt-1"
                                          size={20}
                                      />
                                      <span>Priority support 24/7</span>
                                  </div>
                              </div>

                              <button className="w-full py-4 bg-white text-[#F5A623] rounded-2xl font-bold text-lg hover:bg-[#1A2E4A] hover:text-white transition-all shadow-2xl">
                                  Upgrade ke Premium
                              </button>

                              <p className="text-center text-sm text-white/80 mt-4">
                                  Investasi terbaik untuk masa depan anak Anda
                              </p>
                          </div>
                      </div>
                  </div>
              </section>

              {/* Comparison Table */}
              <section className="py-24 bg-white">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-16">
                          <h2 className="text-4xl md:text-5xl font-bold text-[#1A2E4A] mb-6">
                              Perbandingan Detail
                          </h2>
                          <p className="text-xl text-[#2D3748]">
                              Lihat semua yang Anda dapatkan
                          </p>
                      </div>

                      <div className="overflow-x-auto">
                          <table className="w-full">
                              <thead>
                                  <tr className="border-b-2 border-gray-200">
                                      <th className="text-left py-4 px-6 text-lg font-bold text-[#1A2E4A]">
                                          Fitur
                                      </th>
                                      <th className="text-center py-4 px-6 text-lg font-bold text-[#1A2E4A]">
                                          Gratis
                                      </th>
                                      <th className="text-center py-4 px-6 text-lg font-bold text-[#F5A623]">
                                          Premium
                                      </th>
                                  </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200">
                                  <tr className="hover:bg-gray-50">
                                      <td className="py-4 px-6 text-[#2D3748]">
                                          Jumlah Skrining LexScan
                                      </td>
                                      <td className="text-center py-4 px-6 font-mono text-[#1A2E4A]">
                                          1x
                                      </td>
                                      <td className="text-center py-4 px-6 font-mono text-[#F5A623]">
                                          Unlimited
                                      </td>
                                  </tr>
                                  <tr className="hover:bg-gray-50">
                                      <td className="py-4 px-6 text-[#2D3748]">
                                          Mini-Game Let's Play
                                      </td>
                                      <td className="text-center py-4 px-6 font-mono text-[#1A2E4A]">
                                          5 game
                                      </td>
                                      <td className="text-center py-4 px-6 font-mono text-[#F5A623]">
                                          20+ game
                                      </td>
                                  </tr>
                                  <tr className="hover:bg-gray-50">
                                      <td className="py-4 px-6 text-[#2D3748]">
                                          Laporan Skrining PDF
                                      </td>
                                      <td className="text-center py-4 px-6">
                                          <Check
                                              className="text-[#6FCF97] mx-auto"
                                              size={20}
                                          />
                                      </td>
                                      <td className="text-center py-4 px-6">
                                          <Check
                                              className="text-[#6FCF97] mx-auto"
                                              size={20}
                                          />
                                      </td>
                                  </tr>
                                  <tr className="hover:bg-gray-50">
                                      <td className="py-4 px-6 text-[#2D3748]">
                                          Dashboard Progres
                                      </td>
                                      <td className="text-center py-4 px-6 text-sm text-[#2D3748]">
                                          Dasar
                                      </td>
                                      <td className="text-center py-4 px-6 text-sm text-[#F5A623] font-semibold">
                                          Lengkap + Grafik
                                      </td>
                                  </tr>
                                  <tr className="hover:bg-gray-50">
                                      <td className="py-4 px-6 text-[#2D3748]">
                                          Rekomendasi Personalisasi
                                      </td>
                                      <td className="text-center py-4 px-6 text-gray-400">
                                          —
                                      </td>
                                      <td className="text-center py-4 px-6">
                                          <Check
                                              className="text-[#6FCF97] mx-auto"
                                              size={20}
                                          />
                                      </td>
                                  </tr>
                                  <tr className="hover:bg-gray-50">
                                      <td className="py-4 px-6 text-[#2D3748]">
                                          Konsultasi Psikolog
                                      </td>
                                      <td className="text-center py-4 px-6 text-gray-400">
                                          —
                                      </td>
                                      <td className="text-center py-4 px-6 text-sm text-[#F5A623] font-semibold">
                                          2x chat/bulan
                                      </td>
                                  </tr>
                                  <tr className="hover:bg-gray-50">
                                      <td className="py-4 px-6 text-[#2D3748]">
                                          Multi Profil Anak
                                      </td>
                                      <td className="text-center py-4 px-6 font-mono text-[#1A2E4A]">
                                          1
                                      </td>
                                      <td className="text-center py-4 px-6 font-mono text-[#F5A623]">
                                          3
                                      </td>
                                  </tr>
                                  <tr className="hover:bg-gray-50">
                                      <td className="py-4 px-6 text-[#2D3748]">
                                          Priority Support
                                      </td>
                                      <td className="text-center py-4 px-6 text-gray-400">
                                          —
                                      </td>
                                      <td className="text-center py-4 px-6">
                                          <Check
                                              className="text-[#6FCF97] mx-auto"
                                              size={20}
                                          />
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </section>

              {/* FAQ Preview */}
              <section className="py-24 bg-gradient-to-b from-[#F7F5F2] to-white">
                  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-16">
                          <h2 className="text-4xl font-bold text-[#1A2E4A] mb-6">
                              Pertanyaan Umum
                          </h2>
                      </div>

                      <div className="space-y-6">
                          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#3BBFAD]">
                              <h4 className="font-bold text-xl text-[#1A2E4A] mb-3">
                                  Apakah skrining gratis benar-benar gratis?
                              </h4>
                              <p className="text-[#2D3748] leading-relaxed">
                                  Ya! Anda bisa mendaftar dan melakukan 1x
                                  skrining LexScan tanpa perlu kartu kredit atau
                                  pembayaran apapun. Ini untuk membantu keluarga
                                  mencoba sebelum memutuskan upgrade.
                              </p>
                          </div>

                          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#F5A623]">
                              <h4 className="font-bold text-xl text-[#1A2E4A] mb-3">
                                  Bagaimana cara upgrade ke Premium?
                              </h4>
                              <p className="text-[#2D3748] leading-relaxed">
                                  Setelah mencoba versi gratis, Anda bisa
                                  upgrade kapan saja melalui aplikasi. Kami
                                  menerima pembayaran via transfer bank,
                                  e-wallet (GoPay, OVO), dan kartu kredit.
                              </p>
                          </div>

                          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#1A2E4A]">
                              <h4 className="font-bold text-xl text-[#1A2E4A] mb-3">
                                  Apakah bisa cancel subscription?
                              </h4>
                              <p className="text-[#2D3748] leading-relaxed">
                                  Tentu! Tidak ada kontrak jangka panjang. Anda
                                  bisa cancel kapan saja dan tetap bisa
                                  menggunakan fitur premium sampai akhir periode
                                  berlangganan Anda.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>

              {/* CTA */}
              <section className="py-24 bg-gradient-to-br from-[#3BBFAD] to-[#2A9989] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
                      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#F5A623] rounded-full blur-3xl" />
                  </div>

                  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                          Mulai Perjalanan Gratis Hari Ini
                      </h2>
                      <p className="text-xl text-white/90 mb-10 leading-relaxed">
                          Tidak ada risiko. Tidak perlu kartu kredit. Cukup
                          daftar dan mulai skrining.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <button className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-[#3BBFAD] rounded-2xl font-bold text-lg hover:bg-[#F5A623] hover:text-white transition-all shadow-2xl hover:scale-105">
                              Mulai Gratis Sekarang
                              <ArrowRight size={20} />
                          </button>
                          <button className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#1A2E4A] text-white rounded-2xl font-bold text-lg hover:bg-[#F5A623] transition-all shadow-2xl">
                              Lihat Demo
                          </button>
                      </div>

                      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
                          <div className="flex items-center gap-2">
                              <Check className="text-[#6FCF97]" size={20} />
                              <span>Tanpa kartu kredit</span>
                          </div>
                          <div className="flex items-center gap-2">
                              <Check className="text-[#6FCF97]" size={20} />
                              <span>Setup dalam 2 menit</span>
                          </div>
                          <div className="flex items-center gap-2">
                              <Check className="text-[#6FCF97]" size={20} />
                              <span>Cancel kapan saja</span>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
      </AppLayout>
  );
}
