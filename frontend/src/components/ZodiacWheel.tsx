import { zodiacSigns } from "@/lib/zodiac";
import { useState } from "react";

interface ZodiacWheelProps {
  onSelectSign?: (sign: string) => void;
}

export const ZodiacWheel = ({ onSelectSign }: ZodiacWheelProps) => {
  const [hoveredSign, setHoveredSign] = useState<string | null>(null);
  const signs = Object.entries(zodiacSigns);

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      {/* Outer decorative ring */}
      <div className="absolute inset-0 rounded-full border-2 border-cosmic-light/20" />
      <div className="absolute inset-2 rounded-full border border-stardust/10" />
      
      {/* Center glow */}
      <div className="absolute inset-1/4 rounded-full bg-gradient-radial from-cosmic/40 via-cosmic/20 to-transparent" />
      
      {/* Zodiac signs arranged in a circle */}
      <div className="absolute inset-0">
        {signs.map(([key, sign], index) => {
          const angle = (index * 30 - 90) * (Math.PI / 180);
          const radius = 42;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          
          return (
            <button
              key={key}
              onClick={() => onSelectSign?.(key)}
              onMouseEnter={() => setHoveredSign(key)}
              onMouseLeave={() => setHoveredSign(null)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                hoveredSign === key ? 'scale-150 z-10' : 'scale-100'
              }`}
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
            >
              <div className={`flex flex-col items-center ${hoveredSign === key ? 'text-stardust' : 'text-nebula-dark'}`}>
                <span className={`text-2xl md:text-3xl transition-all ${hoveredSign === key ? 'drop-shadow-[0_0_10px_hsl(45,93%,54%)]' : ''}`}>
                  {sign.symbol}
                </span>
                {hoveredSign === key && (
                  <span className="text-xs mt-1 font-medium animate-fade-in whitespace-nowrap">
                    {sign.name}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
      
      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          {hoveredSign ? (
            <div className="animate-fade-in">
              <p className="font-display text-lg text-nebula">{zodiacSigns[hoveredSign].name}</p>
              <p className="text-xs text-muted-foreground">{zodiacSigns[hoveredSign].element}</p>
            </div>
          ) : (
            <p className="text-xs text-muted-foreground">Bir burca tıklayın</p>
          )}
        </div>
      </div>
    </div>
  );
};
