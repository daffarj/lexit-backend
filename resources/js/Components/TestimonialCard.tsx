import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatarUrl?: string;
}

export function TestimonialCard({ name, role, quote, rating, avatarUrl }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#3BBFAD]/10 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#3BBFAD]/5 rounded-full" />
      
      <div className="relative">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={20}
              className={i < rating ? 'fill-[#F5A623] text-[#F5A623]' : 'text-gray-300'}
            />
          ))}
        </div>

        {/* Quote */}
        <p className="text-lg text-[#2D3748] leading-relaxed mb-6 italic">
          "{quote}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#3BBFAD] to-[#2A9989] flex items-center justify-center text-white text-xl font-bold shadow-lg">
            {avatarUrl ? (
              <img src={avatarUrl} alt={name} className="w-full h-full rounded-full object-cover" />
            ) : (
              name.charAt(0)
            )}
          </div>
          <div>
            <p className="font-bold text-[#1A2E4A]">{name}</p>
            <p className="text-sm text-[#3BBFAD]">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
