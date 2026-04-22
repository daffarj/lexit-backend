import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  accentColor?: string;
}

export function FeatureCard({ icon: Icon, title, description, link, accentColor = '#3BBFAD' }: FeatureCardProps) {
  return (
    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-transparent hover:border-[#3BBFAD]">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
        style={{ backgroundColor: `${accentColor}20` }}
      >
        <Icon size={32} style={{ color: accentColor }} />
      </div>
      <h3 className="text-2xl font-bold text-[#1A2E4A] mb-4">{title}</h3>
      <p className="text-[#2D3748] leading-relaxed mb-4">{description}</p>
      {link && (
        <a
          href={link}
          className="inline-flex items-center gap-2 text-[#3BBFAD] font-semibold hover:text-[#F5A623] transition-colors group"
        >
          Pelajari lebih lanjut
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      )}
    </div>
  );
}
