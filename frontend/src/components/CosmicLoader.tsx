import { Moon, Sun, Star, Sparkles } from "lucide-react";

export const CosmicLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-10">
      {/* Main orbital system */}
      <div className="relative w-40 h-40">
        {/* Outer orbit ring */}
        <div className="absolute inset-0 border-2 border-cosmic-light/20 rounded-full animate-spin-slow" style={{ animationDuration: '8s' }} />
        
        {/* Middle orbit ring */}
        <div className="absolute inset-4 border border-stardust/30 rounded-full animate-spin-slow" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
        
        {/* Inner glow */}
        <div className="absolute inset-8 rounded-full bg-gradient-radial from-stardust/30 to-transparent animate-pulse" />
        
        {/* Central sun */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <Sun className="w-14 h-14 text-stardust animate-pulse" />
            <div className="absolute inset-0 blur-lg bg-stardust/40 rounded-full" />
          </div>
        </div>
        
        {/* Orbiting moon */}
        <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '4s' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <Moon className="w-7 h-7 text-nebula" />
              <div className="absolute inset-0 blur-md bg-nebula/30 rounded-full" />
            </div>
          </div>
        </div>
        
        {/* Orbiting stars */}
        <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <Star className="w-5 h-5 text-cosmic-light fill-cosmic-light/50" />
          </div>
        </div>
        
        <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '5s' }}>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <Sparkles className="w-4 h-4 text-stardust" />
          </div>
        </div>
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-nebula animate-twinkle"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Loading text */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-stardust animate-pulse" />
          <p className="text-nebula font-display text-2xl animate-pulse">
            Yıldızlar Hizalanıyor
          </p>
          <Sparkles className="w-5 h-5 text-stardust animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        <p className="text-muted-foreground text-sm">
          Kozmik hesaplamalar yapılıyor...
        </p>
        
        {/* Loading dots */}
        <div className="flex items-center justify-center gap-2 pt-4">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className="w-2 h-2 rounded-full bg-stardust animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
