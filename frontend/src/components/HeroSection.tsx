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
          <div className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] group">

            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full border border-stardust/20 shadow-[0_0_50px_rgba(255,165,0,0.1)] animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-[15%] rounded-full border border-white/5 animate-[spin_40s_linear_infinite_reverse]" />

            {/* Central Sun/Star */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center animate-pulse-slow">
              <div className="w-4 h-4 rounded-full bg-stardust shadow-[0_0_20px_rgba(255,215,0,0.8)] mb-2" />
              <span className="text-white/50 text-sm tracking-widest uppercase">Bir burç seçin</span>
            </div>

            {/* Orbiting Zodiac Icons */}
            {zodiacSymbols.map((symbol, i) => {
              const angle = (i * 360) / 12;
              const radius = 45; // percentage
              return (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 flex items-center justify-center rounded-xl bg-[#1a1a2e]/80 border border-white/10 text-white/70 text-xl hover:text-stardust hover:border-stardust/50 hover:bg-[#1a1a2e] hover:scale-125 transition-all duration-300 cursor-pointer shadow-lg"
                  style={{
                    transform: `rotate(${angle}deg) translate(250px) rotate(-${angle}deg)`, // Fixed radius in pixels somewhat dynamic
                  }}
                >
                  <Link to={`/burc/${zodiacKeys[i]}`} className="w-full h-full flex items-center justify-center">
                    {symbol}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
