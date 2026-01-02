import { Star, ArrowRight } from "lucide-react";
import cosmicHero from "@/assets/cosmic-hero.jpg";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const zodiacSymbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
  const zodiacKeys = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Deep dark blue/purple background similar to reference */}
        <div className="absolute inset-0 bg-[#08081a] z-0" />
        <img
          src={cosmicHero}
          alt="Cosmic Background"
          className="w-full h-full object-cover opacity-20 mix-blend-screen scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08081a] via-[#08081a]/80 to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-8 animate-fade-in text-left">
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight drop-shadow-lg">
            Yıldızların <br />
            <span className="text-stardust inline-block">Gizemli Dünyası</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 font-light max-w-lg leading-relaxed">
            Burçların kadim bilgeliğini keşfedin. Doğum haritanızı çözümleyin, yükselen ve ay burcunuzu hesaplayın.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/burclar"
              className="px-8 py-4 rounded-xl bg-stardust text-[#08081a] font-bold text-lg hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,190,0,0.3)] flex items-center gap-2"
            >
              Burçları Keşfet <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={() => document.getElementById('birth-chart')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl bg-transparent border border-white/20 text-white font-medium text-lg hover:bg-white/5 hover:border-white/40 transition-all"
            >
              Burcumu Hesapla
            </button>
          </div>
        </div>

        {/* Right Graphic - Zodiac Wheel */}
        <div className="relative flex justify-center items-center lg:justify-end perspective-1000">
          <div className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] flex items-center justify-center">

            {/* Orbit Tracks */}
            <div className="absolute inset-0 rounded-full border border-stardust/10 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-[15%] rounded-full border border-stardust/5 animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-[30%] rounded-full border border-stardust/5 animate-[spin_30s_linear_infinite]" />

            {/* Central Sun */}
            <div className="absolute z-10 flex flex-col items-center justify-center">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-amber-300 via-orange-400 to-red-500 shadow-[0_0_60px_rgba(255,165,0,0.6)] flex items-center justify-center">

                </div>
                {/* Sun Rays/Glow */}
                <div className="absolute inset-0 rounded-full bg-orange-400/30 blur-xl animate-pulse" />
              </div>
            </div>

            {/* Orbiting Zodiac Container */}
            <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
              {zodiacSymbols.map((symbol, i) => {
                const angle = (i * 360) / 12;
                // Position items on the circle edge
                // 50% is center, we want to push them out to the edge (approx 45% radius)
                const radius = 42;
                const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <div
                    key={i}
                    className="absolute w-14 h-14 -ml-7 -mt-7 flex items-center justify-center rounded-full bg-[#1a1a2e]/90 border border-white/10 text-white/80 text-2xl hover:text-stardust hover:border-stardust/50 hover:bg-[#1a1a2e] hover:scale-125 transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-sm group"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                  >
                    {/* Counter-rotate to keep icon upright */}
                    <div className="animate-[spin_60s_linear_infinite_reverse] w-full h-full flex items-center justify-center">
                      <Link to={`/burc/${zodiacKeys[i]}`} className="w-full h-full flex items-center justify-center">
                        {symbol}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
