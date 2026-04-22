interface StepIndicatorProps {
  steps: {
    number: number;
    title: string;
    description: string;
  }[];
}

export function StepIndicator({ steps }: StepIndicatorProps) {
  return (
    <div className="relative">
      {/* Connection Line */}
      <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#3BBFAD] via-[#F5A623] to-[#6FCF97]" style={{ zIndex: 0 }} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative" style={{ zIndex: 1 }}>
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center text-center">
            {/* Number Circle */}
            <div className="relative mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#3BBFAD] to-[#2A9989] flex items-center justify-center shadow-xl">
                <span className="text-4xl font-bold text-white font-mono">{step.number}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-32 h-0.5 bg-gradient-to-r from-[#3BBFAD] to-[#F5A623]" />
              )}
            </div>
            
            {/* Content */}
            <h3 className="text-2xl font-bold text-[#1A2E4A] mb-3">{step.title}</h3>
            <p className="text-[#2D3748] leading-relaxed max-w-xs">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
