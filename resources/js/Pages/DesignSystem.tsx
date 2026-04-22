import { 
  Brain, 
  Gamepad2, 
  BarChart3, 
  Heart, 
  Star, 
  CheckCircle, 
  AlertCircle, 
  Users, 
  Clock, 
  FileText, 
  MessageCircle, 
  Sparkles 
} from 'lucide-react';
import { useState } from 'react';

export function DesignSystem() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="min-h-screen bg-[#F7F5F2] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A2E4A] mb-6">
            Lexit Design System
          </h1>
          <p className="text-xl text-[#2D3748] max-w-3xl mx-auto">
            Komponen visual dan panduan desain untuk platform Lexit
          </p>
        </div>

        {/* Color System */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#1A2E4A] mb-8">🎨 Color Palette</h2>
          
          {/* Primary Colors */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#1A2E4A] mb-6">Primary Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="w-full h-32 bg-[#3BBFAD] rounded-2xl mb-4 shadow-md"></div>
                <h4 className="font-bold text-lg text-[#1A2E4A] mb-2">Soft Teal</h4>
                <p className="font-mono text-sm text-[#2D3748] mb-2">#3BBFAD</p>
                <p className="text-sm text-[#2D3748]">
                  <strong>Usage:</strong> Primary buttons, links, brand accents, trust elements
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="w-full h-32 bg-[#F5A623] rounded-2xl mb-4 shadow-md"></div>
                <h4 className="font-bold text-lg text-[#1A2E4A] mb-2">Warm Amber</h4>
                <p className="font-mono text-sm text-[#2D3748] mb-2">#F5A623</p>
                <p className="text-sm text-[#2D3748]">
                  <strong>Usage:</strong> Secondary buttons, highlights, energy, optimism
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="w-full h-32 bg-[#1A2E4A] rounded-2xl mb-4 shadow-md"></div>
                <h4 className="font-bold text-lg text-[#1A2E4A] mb-2">Deep Navy</h4>
                <p className="font-mono text-sm text-[#2D3748] mb-2">#1A2E4A</p>
                <p className="text-sm text-[#2D3748]">
                  <strong>Usage:</strong> Headings, authority, clinical trust, dark backgrounds
                </p>
              </div>
            </div>
          </div>

          {/* Supporting Colors */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#1A2E4A] mb-6">Supporting Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="w-full h-24 bg-[#F7F5F2] rounded-2xl mb-4 shadow-md border border-gray-200"></div>
                <h4 className="font-bold text-lg text-[#1A2E4A] mb-2">Off-White</h4>
                <p className="font-mono text-sm text-[#2D3748] mb-2">#F7F5F2</p>
                <p className="text-sm text-[#2D3748]">Background</p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="w-full h-24 bg-[#6FCF97] rounded-2xl mb-4 shadow-md"></div>
                <h4 className="font-bold text-lg text-[#1A2E4A] mb-2">Mint Success</h4>
                <p className="font-mono text-sm text-[#2D3748] mb-2">#6FCF97</p>
                <p className="text-sm text-[#2D3748]">Success states</p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="w-full h-24 bg-[#2D3748] rounded-2xl mb-4 shadow-md"></div>
                <h4 className="font-bold text-lg text-[#1A2E4A] mb-2">Charcoal</h4>
                <p className="font-mono text-sm text-[#2D3748] mb-2">#2D3748</p>
                <p className="text-sm text-[#2D3748]">Body text</p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="w-full h-24 bg-[#EF4444] rounded-2xl mb-4 shadow-md"></div>
                <h4 className="font-bold text-lg text-[#1A2E4A] mb-2">Error Red</h4>
                <p className="font-mono text-sm text-[#2D3748] mb-2">#EF4444</p>
                <p className="text-sm text-[#2D3748]">Error states</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#1A2E4A] mb-8">✍️ Typography</h2>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg mb-6">
            <div className="mb-8">
              <p className="text-sm text-[#2D3748] mb-2 font-mono">font-family: 'Nunito'</p>
              <h1 className="text-5xl font-bold text-[#1A2E4A] mb-2" style={{ fontSize: '48px' }}>
                Heading 1 — 48px Bold
              </h1>
              <p className="text-sm text-[#2D3748]">Used for: Page titles, hero headlines</p>
            </div>

            <div className="mb-8">
              <p className="text-sm text-[#2D3748] mb-2 font-mono">font-family: 'Nunito'</p>
              <h2 className="text-4xl font-bold text-[#1A2E4A] mb-2" style={{ fontSize: '36px' }}>
                Heading 2 — 36px Bold
              </h2>
              <p className="text-sm text-[#2D3748]">Used for: Section titles, major headings</p>
            </div>

            <div className="mb-8">
              <p className="text-sm text-[#2D3748] mb-2 font-mono">font-family: 'Nunito'</p>
              <h3 className="text-2xl font-bold text-[#1A2E4A] mb-2" style={{ fontSize: '24px' }}>
                Heading 3 — 24px Bold
              </h3>
              <p className="text-sm text-[#2D3748]">Used for: Card titles, subsection headings</p>
            </div>

            <div className="mb-8">
              <p className="text-sm text-[#2D3748] mb-2 font-mono">font-family: 'Lexend'</p>
              <p className="text-base text-[#2D3748] mb-2" style={{ fontSize: '16px' }}>
                Body Text — 16px Regular (letter-spacing: 0.05em)
              </p>
              <p className="text-sm text-[#2D3748]">
                Used for: Paragraphs, descriptions, general content. Lexend is specifically designed for reading accessibility.
              </p>
            </div>

            <div>
              <p className="text-sm text-[#2D3748] mb-2 font-mono">font-family: 'Lexend'</p>
              <p className="text-xs text-[#2D3748] mb-2" style={{ fontSize: '12px' }}>
                Caption — 12px Regular
              </p>
              <p className="text-sm text-[#2D3748]">Used for: Labels, small notes, metadata</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#1A2E4A] mb-4">Monospace Numbers</h3>
            <p className="text-sm text-[#2D3748] mb-4 font-mono">font-family: 'DM Mono'</p>
            <div className="flex gap-8 items-center">
              <span className="font-mono text-5xl font-bold text-[#3BBFAD]">89</span>
              <span className="font-mono text-5xl font-bold text-[#F5A623]">5M</span>
              <span className="font-mono text-5xl font-bold text-[#1A2E4A]">99K</span>
            </div>
            <p className="text-sm text-[#2D3748] mt-4">Used for: Statistics, metrics, pricing</p>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#1A2E4A] mb-8">🔘 Buttons</h2>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Primary Button */}
              <div>
                <h4 className="font-bold text-lg text-[#1A2E4A] mb-4">Primary Button</h4>
                <button className="px-8 py-4 bg-[#3BBFAD] text-white rounded-2xl font-bold text-lg hover:bg-[#2A9989] transition-all shadow-lg hover:shadow-xl mb-3">
                  Mulai Gratis
                </button>
                <pre className="bg-gray-100 rounded-xl p-4 text-xs overflow-x-auto">
{`bg-[#3BBFAD] text-white
rounded-2xl font-bold
hover:bg-[#2A9989]
shadow-lg hover:shadow-xl`}
                </pre>
              </div>

              {/* Secondary Button */}
              <div>
                <h4 className="font-bold text-lg text-[#1A2E4A] mb-4">Secondary Button</h4>
                <button className="px-8 py-4 bg-[#F5A623] text-white rounded-2xl font-bold text-lg hover:bg-[#E09420] transition-all shadow-lg hover:shadow-xl mb-3">
                  Pelajari Lebih Lanjut
                </button>
                <pre className="bg-gray-100 rounded-xl p-4 text-xs overflow-x-auto">
{`bg-[#F5A623] text-white
rounded-2xl font-bold
hover:bg-[#E09420]
shadow-lg hover:shadow-xl`}
                </pre>
              </div>

              {/* Ghost Button */}
              <div>
                <h4 className="font-bold text-lg text-[#1A2E4A] mb-4">Ghost Button</h4>
                <button className="px-8 py-4 bg-transparent text-[#1A2E4A] rounded-2xl font-bold text-lg border-2 border-[#3BBFAD] hover:bg-[#3BBFAD]/5 transition-all mb-3">
                  Lihat Detail
                </button>
                <pre className="bg-gray-100 rounded-xl p-4 text-xs overflow-x-auto">
{`bg-transparent text-[#1A2E4A]
border-2 border-[#3BBFAD]
rounded-2xl font-bold
hover:bg-[#3BBFAD]/5`}
                </pre>
              </div>

              {/* Disabled Button */}
              <div>
                <h4 className="font-bold text-lg text-[#1A2E4A] mb-4">Disabled Button</h4>
                <button disabled className="px-8 py-4 bg-gray-300 text-gray-500 rounded-2xl font-bold text-lg cursor-not-allowed opacity-60 mb-3">
                  Tidak Tersedia
                </button>
                <pre className="bg-gray-100 rounded-xl p-4 text-xs overflow-x-auto">
{`disabled
bg-gray-300 text-gray-500
cursor-not-allowed opacity-60`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Input Fields */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#1A2E4A] mb-8">📝 Input Fields</h2>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Default State */}
              <div>
                <label className="block text-sm font-bold text-[#1A2E4A] mb-2">
                  Default State
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama anak"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-[#3BBFAD] transition-colors"
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <p className="text-xs text-[#2D3748] mt-2">border-2 border-gray-300</p>
              </div>

              {/* Focus State */}
              <div>
                <label className="block text-sm font-bold text-[#1A2E4A] mb-2">
                  Focus State
                </label>
                <input
                  type="text"
                  placeholder="Klik untuk focus"
                  className="w-full px-4 py-3 border-2 border-[#3BBFAD] rounded-2xl focus:outline-none focus:border-[#3BBFAD] transition-colors shadow-lg shadow-[#3BBFAD]/20"
                />
                <p className="text-xs text-[#2D3748] mt-2">focus:border-[#3BBFAD] shadow-lg</p>
              </div>

              {/* Error State */}
              <div>
                <label className="block text-sm font-bold text-[#1A2E4A] mb-2">
                  Error State
                </label>
                <input
                  type="text"
                  placeholder="Email tidak valid"
                  className="w-full px-4 py-3 border-2 border-[#EF4444] rounded-2xl focus:outline-none focus:border-[#EF4444] transition-colors"
                />
                <div className="flex items-center gap-2 mt-2">
                  <AlertCircle size={14} className="text-[#EF4444]" />
                  <p className="text-xs text-[#EF4444]">Format email tidak valid</p>
                </div>
              </div>

              {/* Success State */}
              <div>
                <label className="block text-sm font-bold text-[#1A2E4A] mb-2">
                  Success State
                </label>
                <input
                  type="text"
                  placeholder="Data berhasil disimpan"
                  className="w-full px-4 py-3 border-2 border-[#6FCF97] rounded-2xl focus:outline-none focus:border-[#6FCF97] transition-colors"
                />
                <div className="flex items-center gap-2 mt-2">
                  <CheckCircle size={14} className="text-[#6FCF97]" />
                  <p className="text-xs text-[#6FCF97]">Email tersedia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#1A2E4A] mb-8">🃏 Card Variants</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-[#3BBFAD]">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[#3BBFAD]/10">
                <Brain size={32} className="text-[#3BBFAD]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A2E4A] mb-4">Feature Card</h3>
              <p className="text-[#2D3748] leading-relaxed mb-4">
                Used for showcasing main features with icon, title, and description.
              </p>
              <pre className="bg-gray-100 rounded-xl p-3 text-xs overflow-x-auto">
{`rounded-3xl shadow-lg
border-l-4 border-[#3BBFAD]
hover:shadow-2xl
hover:-translate-y-2`}
              </pre>
            </div>

            {/* Stat Card */}
            <div className="flex flex-col items-center gap-2 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="font-mono text-5xl font-bold text-[#F5A623]">
                5M
              </div>
              <div className="text-sm text-[#2D3748] text-center leading-snug">
                Stat Card
              </div>
              <p className="text-xs text-[#2D3748] text-center mt-4">
                Displays key metrics with large monospace numbers
              </p>
              <pre className="bg-gray-100 rounded-xl p-3 text-xs overflow-x-auto w-full mt-2">
{`rounded-2xl shadow-lg
text-center
font-mono numbers`}
              </pre>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#3BBFAD]/10 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#3BBFAD]/5 rounded-full" />
              <div className="relative">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-[#F5A623] text-[#F5A623]"
                    />
                  ))}
                </div>
                <p className="text-[#2D3748] mb-4 italic text-sm">
                  "Testimonial Card with stars, quote, and avatar"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3BBFAD] to-[#2A9989] flex items-center justify-center text-white font-bold">
                    IY
                  </div>
                  <div>
                    <p className="font-bold text-[#1A2E4A] text-sm">Ibu Yuni</p>
                    <p className="text-xs text-[#3BBFAD]">Parent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#1A2E4A] mb-8">🏷️ Badges & Tags</h2>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-[#3BBFAD]/10 text-[#3BBFAD] rounded-full font-bold text-sm">
                <Sparkles size={16} />
                AI-Powered
              </span>

              <span className="inline-flex items-center gap-2 px-5 py-2 bg-[#F5A623]/10 text-[#F5A623] rounded-full font-bold text-sm">
                <CheckCircle size={16} />
                Klinis Tervalidasi
              </span>

              <span className="inline-flex items-center gap-2 px-5 py-2 bg-[#6FCF97]/10 text-[#6FCF97] rounded-full font-bold text-sm">
                <Heart size={16} />
                Gratis
              </span>

              <span className="inline-flex items-center gap-2 px-5 py-2 bg-[#1A2E4A]/10 text-[#1A2E4A] rounded-full font-bold text-sm">
                <Star size={16} />
                Premium
              </span>

              <span className="inline-flex items-center gap-2 px-5 py-2 bg-red-100 text-red-600 rounded-full font-bold text-sm">
                🔥 Populer
              </span>

              <span className="inline-flex items-center gap-2 px-5 py-2 bg-purple-100 text-purple-600 rounded-full font-bold text-sm">
                ✨ Baru
              </span>
            </div>

            <pre className="bg-gray-100 rounded-xl p-4 text-xs overflow-x-auto">
{`<span className="px-5 py-2 bg-[#3BBFAD]/10 
  text-[#3BBFAD] rounded-full font-bold">
  AI-Powered
</span>`}
            </pre>
          </div>
        </section>

        {/* Icons */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#1A2E4A] mb-8">🎯 Icon Library</h2>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <p className="text-sm text-[#2D3748] mb-6">
              Using <strong>Lucide React</strong> icon set — rounded, filled style
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#3BBFAD]/10 rounded-2xl flex items-center justify-center">
                  <Brain size={32} className="text-[#3BBFAD]" />
                </div>
                <span className="text-xs text-[#2D3748] text-center">Brain<br/>(LexScan)</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#F5A623]/10 rounded-2xl flex items-center justify-center">
                  <Gamepad2 size={32} className="text-[#F5A623]" />
                </div>
                <span className="text-xs text-[#2D3748] text-center">Gamepad<br/>(Let's Play)</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#1A2E4A]/10 rounded-2xl flex items-center justify-center">
                  <BarChart3 size={32} className="text-[#1A2E4A]" />
                </div>
                <span className="text-xs text-[#2D3748] text-center">BarChart<br/>(Parent Mode)</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#6FCF97]/10 rounded-2xl flex items-center justify-center">
                  <CheckCircle size={32} className="text-[#6FCF97]" />
                </div>
                <span className="text-xs text-[#2D3748] text-center">CheckCircle<br/>(Success)</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                  <AlertCircle size={32} className="text-red-500" />
                </div>
                <span className="text-xs text-[#2D3748] text-center">AlertCircle<br/>(Error)</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#F5A623]/10 rounded-2xl flex items-center justify-center">
                  <Star size={32} className="text-[#F5A623]" />
                </div>
                <span className="text-xs text-[#2D3748] text-center">Star<br/>(Rating)</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#3BBFAD]/10 rounded-2xl flex items-center justify-center">
                  <Users size={32} className="text-[#3BBFAD]" />
                </div>
                <span className="text-xs text-[#2D3748] text-center">Users<br/>(Community)</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#1A2E4A]/10 rounded-2xl flex items-center justify-center">
                  <Clock size={32} className="text-[#1A2E4A]" />
                </div>
                <span className="text-xs text-[#2D3748] text-center">Clock<br/>(Time)</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#3BBFAD]/10 rounded-2xl flex items-center justify-center">
                  <FileText size={32} className="text-[#3BBFAD]" />
                </div>
                <span className="text-xs text-[#2D3748] text-center">FileText<br/>(Report)</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#F5A623]/10 rounded-2xl flex items-center justify-center">
                  <MessageCircle size={32} className="text-[#F5A623]" />
                </div>
                <span className="text-xs text-[#2D3748] text-center">Message<br/>(Support)</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#6FCF97]/10 rounded-2xl flex items-center justify-center">
                  <Heart size={32} className="text-[#6FCF97]" />
                </div>
                <span className="text-xs text-[#2D3748] text-center">Heart<br/>(Care)</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#F5A623]/10 rounded-2xl flex items-center justify-center">
                  <Sparkles size={32} className="text-[#F5A623]" />
                </div>
                <span className="text-xs text-[#2D3748] text-center">Sparkles<br/>(AI/New)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#1A2E4A] mb-8">📏 Spacing System</h2>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <p className="text-sm text-[#2D3748] mb-8">
              <strong>4px base grid</strong> — All spacing follows multiples of 4px for consistency
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-1 bg-[#3BBFAD]" style={{ height: '4px' }}></div>
                <span className="font-mono text-sm text-[#2D3748] w-16">4px</span>
                <span className="text-sm text-[#2D3748]">Minimal spacing, tight gaps</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-2 bg-[#3BBFAD]" style={{ height: '8px' }}></div>
                <span className="font-mono text-sm text-[#2D3748] w-16">8px</span>
                <span className="text-sm text-[#2D3748]">Small gaps, icon padding</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 bg-[#3BBFAD]" style={{ height: '12px' }}></div>
                <span className="font-mono text-sm text-[#2D3748] w-16">12px</span>
                <span className="text-sm text-[#2D3748]">Compact spacing</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-4 bg-[#3BBFAD]" style={{ height: '16px' }}></div>
                <span className="font-mono text-sm text-[#2D3748] w-16">16px</span>
                <span className="text-sm text-[#2D3748]">Base unit, element padding</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-6 bg-[#F5A623]" style={{ height: '24px' }}></div>
                <span className="font-mono text-sm text-[#2D3748] w-16">24px</span>
                <span className="text-sm text-[#2D3748]">Medium spacing, card padding</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-8 bg-[#F5A623]" style={{ height: '32px' }}></div>
                <span className="font-mono text-sm text-[#2D3748] w-16">32px</span>
                <span className="text-sm text-[#2D3748]">Large spacing, section gaps</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 bg-[#1A2E4A]" style={{ height: '48px' }}></div>
                <span className="font-mono text-sm text-[#2D3748] w-16">48px</span>
                <span className="text-sm text-[#2D3748]">Extra large, component spacing</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 bg-[#1A2E4A]" style={{ height: '64px' }}></div>
                <span className="font-mono text-sm text-[#2D3748] w-16">64px</span>
                <span className="text-sm text-[#2D3748]">Section spacing, layout gaps</span>
              </div>
            </div>
          </div>
        </section>

        {/* Shadows */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#1A2E4A] mb-8">☁️ Shadow Styles</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h4 className="font-bold text-lg text-[#1A2E4A] mb-4">Shadow SM</h4>
              <div className="w-full h-32 bg-gradient-to-br from-[#3BBFAD]/20 to-[#F5A623]/20 rounded-2xl shadow-sm mb-4"></div>
              <pre className="bg-gray-100 rounded-xl p-3 text-xs overflow-x-auto">
{`shadow-sm
/* Subtle elevation */`}
              </pre>
              <p className="text-sm text-[#2D3748] mt-3">
                Used for: Cards at rest, subtle depth
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h4 className="font-bold text-lg text-[#1A2E4A] mb-4">Shadow LG</h4>
              <div className="w-full h-32 bg-gradient-to-br from-[#3BBFAD]/20 to-[#F5A623]/20 rounded-2xl shadow-lg mb-4"></div>
              <pre className="bg-gray-100 rounded-xl p-3 text-xs overflow-x-auto">
{`shadow-lg
/* Standard elevation */`}
              </pre>
              <p className="text-sm text-[#2D3748] mt-3">
                Used for: Default cards, buttons, inputs
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h4 className="font-bold text-lg text-[#1A2E4A] mb-4">Shadow 2XL</h4>
              <div className="w-full h-32 bg-gradient-to-br from-[#3BBFAD]/20 to-[#F5A623]/20 rounded-2xl shadow-2xl mb-4"></div>
              <pre className="bg-gray-100 rounded-xl p-3 text-xs overflow-x-auto">
{`shadow-2xl
/* Strong elevation */`}
              </pre>
              <p className="text-sm text-[#2D3748] mt-3">
                Used for: Modals, popovers, hover states
              </p>
            </div>
          </div>
        </section>

        {/* Border Radius */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#1A2E4A] mb-8">🔲 Border Radius</h2>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#3BBFAD] to-[#2A9989] rounded-xl mb-4"></div>
                <p className="font-mono text-sm text-[#2D3748]">rounded-xl</p>
                <p className="text-xs text-[#2D3748]">12px</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#F5A623] to-[#E09420] rounded-2xl mb-4"></div>
                <p className="font-mono text-sm text-[#2D3748]">rounded-2xl</p>
                <p className="text-xs text-[#2D3748]">16px (Base)</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#1A2E4A] to-[#2A4A6A] rounded-3xl mb-4"></div>
                <p className="font-mono text-sm text-[#2D3748]">rounded-3xl</p>
                <p className="text-xs text-[#2D3748]">24px (Cards)</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#6FCF97] to-[#5FBF87] rounded-full mb-4"></div>
                <p className="font-mono text-sm text-[#2D3748]">rounded-full</p>
                <p className="text-xs text-[#2D3748]">Badges, Avatars</p>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#1A2E4A] mb-8">📋 Usage Guidelines</h2>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg space-y-6">
            <div className="border-l-4 border-[#3BBFAD] pl-6">
              <h4 className="font-bold text-lg text-[#1A2E4A] mb-2">Accessibility</h4>
              <ul className="list-disc list-inside text-[#2D3748] space-y-2">
                <li>Minimum body font size: 16px (Lexend designed for readability)</li>
                <li>Letter-spacing: 0.05em for better dyslexia-friendly reading</li>
                <li>Color contrast ratio: Minimum 4.5:1 for text</li>
                <li>Touch targets: Minimum 44px × 44px for interactive elements</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#F5A623] pl-6">
              <h4 className="font-bold text-lg text-[#1A2E4A] mb-2">Color Application</h4>
              <ul className="list-disc list-inside text-[#2D3748] space-y-2">
                <li>Teal (#3BBFAD): Trust, primary actions, health-related content</li>
                <li>Amber (#F5A623): Energy, secondary actions, child-friendly elements</li>
                <li>Navy (#1A2E4A): Authority, professional content, headings</li>
                <li>Never use color alone to convey information (add icons/text)</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#1A2E4A] pl-6">
              <h4 className="font-bold text-lg text-[#1A2E4A] mb-2">Component Hierarchy</h4>
              <ul className="list-disc list-inside text-[#2D3748] space-y-2">
                <li>H1 for page titles (1 per page)</li>
                <li>H2 for section headings</li>
                <li>H3 for subsections and card titles</li>
                <li>Body text with generous line-height (1.6-1.8)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center py-12 bg-gradient-to-br from-[#3BBFAD]/10 to-[#F5A623]/10 rounded-3xl">
          <h3 className="text-2xl font-bold text-[#1A2E4A] mb-4">
            Lexit Design System v1.0
          </h3>
          <p className="text-[#2D3748] mb-2">
            Designed for accessibility, consistency, and trust
          </p>
          <p className="text-sm text-[#2D3748]">
            © 2026 Tim Lavan — "Baca Lebih Mudah, Tumbuh Lebih Berani"
          </p>
        </div>
      </div>
    </div>
  );
}
