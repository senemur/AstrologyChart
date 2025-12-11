import { ZodiacSign } from "@/lib/zodiac";
import { Sun, Moon, ArrowUp, Sparkles, ChevronDown, ChevronUp, Heart, Zap, Star } from "lucide-react";
import { useState } from "react";

interface ZodiacCardProps {
  sign: ZodiacSign;
  type: "sun" | "moon" | "rising";
}

export const ZodiacCard = ({ sign, type }: ZodiacCardProps) => {
  const [showNegative, setShowNegative] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const typeConfig = {
    sun: {
      icon: Sun,
      title: "Güneş Burcu",
      subtitle: "Çekirdek Kişiliğiniz",
      gradient: "from-stardust/30 via-amber-500/20 to-stardust/10",
      iconColor: "text-stardust",
      iconBg: "from-stardust/30 to-amber-500/20",
      description: sign.description,
      borderColor: "border-stardust/30",
    },
    moon: {
      icon: Moon,
      title: "Ay Burcu",
      subtitle: "Duygusal Dünyanız",
      gradient: "from-nebula/20 via-cosmic-light/20 to-nebula/10",
      iconColor: "text-nebula",
      iconBg: "from-nebula/30 to-cosmic-light/20",
      description: sign.moonDescription,
      borderColor: "border-nebula/30",
    },
    rising: {
      icon: ArrowUp,
      title: "Yükselen Burç",
      subtitle: "Dış Görünümünüz",
      gradient: "from-cosmic-light/30 via-purple-400/20 to-cosmic-light/10",
      iconColor: "text-cosmic-light",
      iconBg: "from-cosmic-light/30 to-purple-400/20",
      description: sign.risingDescription,
      borderColor: "border-cosmic-light/30",
    },
  };

  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <div className="zodiac-card relative group h-full">
      {/* Animated glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${config.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700`} />
      
      <div className={`relative bg-gradient-to-br ${config.gradient} bg-card/80 backdrop-blur-xl border ${config.borderColor} rounded-2xl p-6 overflow-hidden h-full flex flex-col`}>
        {/* Decorative sparkles */}
        <div className="absolute top-4 right-4 opacity-20">
          <Sparkles className="w-6 h-6 text-stardust animate-pulse" />
        </div>
        <div className="absolute bottom-4 left-4 opacity-10">
          <Star className="w-8 h-8 text-nebula animate-float" />
        </div>
        
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${config.iconBg} flex items-center justify-center ${config.iconColor} shadow-lg`}>
              <Icon className="w-8 h-8" />
              {/* Pulse ring */}
              <div className={`absolute inset-0 rounded-2xl border ${config.borderColor} animate-ping opacity-20`} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{config.title}</p>
              <h3 className="font-display text-2xl text-nebula flex items-center gap-2">
                {sign.name}
                <span className="text-4xl animate-pulse">{sign.symbol}</span>
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{config.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Quick info badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cosmic/40 text-xs text-nebula border border-cosmic-light/20">
            <Zap className="w-3 h-3" />
            {sign.element}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/40 text-xs text-muted-foreground border border-border/30">
            {sign.rulingPlanet}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/40 text-xs text-muted-foreground border border-border/30">
            {sign.modality}
          </span>
        </div>

        {/* Description */}
        <p className={`text-sm text-muted-foreground leading-relaxed mb-6 ${!isExpanded ? 'line-clamp-3' : ''}`}>
          {config.description}
        </p>

        {/* Expand button */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-stardust hover:text-stardust/80 flex items-center gap-1 mb-6 transition-colors"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Daha az göster
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Devamını oku
            </>
          )}
        </button>

        {/* Traits toggle */}
        <div className="mt-auto space-y-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowNegative(false)}
              className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                !showNegative 
                  ? 'bg-stardust/20 text-stardust border border-stardust/40 shadow-[0_0_15px_hsl(45,93%,54%,0.2)]' 
                  : 'bg-muted/30 text-muted-foreground hover:bg-muted/50 border border-transparent'
              }`}
            >
              <Heart className="w-4 h-4" />
              Pozitif
            </button>
            <button
              onClick={() => setShowNegative(true)}
              className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                showNegative 
                  ? 'bg-destructive/20 text-destructive border border-destructive/40 shadow-[0_0_15px_hsl(0,84%,60%,0.2)]' 
                  : 'bg-muted/30 text-muted-foreground hover:bg-muted/50 border border-transparent'
              }`}
            >
              <Zap className="w-4 h-4" />
              Negatif
            </button>
          </div>

          <div className="flex flex-wrap gap-2 min-h-[80px]">
            {(showNegative ? sign.negativeTraits : sign.traits).map((trait, index) => (
              <span
                key={trait}
                className={`px-3 py-1.5 rounded-full text-xs font-medium animate-scale-in ${
                  showNegative
                    ? 'bg-destructive/15 text-destructive/90 border border-destructive/30'
                    : 'bg-stardust/15 text-stardust border border-stardust/30'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        {type === "sun" && (
          <div className="mt-6 pt-4 border-t border-border/30 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-stardust" />
            <p className="text-sm text-muted-foreground">
              {sign.dateRange}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const Calendar = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
