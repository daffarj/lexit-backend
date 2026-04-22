interface StatCardProps {
  number: string;
  label: string;
  color?: string;
}

export function StatCard({ number, label, color = '#3BBFAD' }: StatCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
      <div className="font-mono text-4xl md:text-5xl font-bold" style={{ color }}>
        {number}
      </div>
      <div className="text-sm md:text-base text-[#2D3748] text-center leading-snug">
        {label}
      </div>
    </div>
  );
}
