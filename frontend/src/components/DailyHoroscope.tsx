import { Star, Sparkles, TrendingUp, Heart, Briefcase } from "lucide-react";
import { zodiacSigns } from "@/lib/zodiac";

const dailyMessages = [
  "Bugün enerjiniz yüksek, yeni başlangıçlar için ideal bir gün.",
  "Duygusal derinlik yaşayabilirsiniz, içsel yolculuğa çıkın.",
  "İletişim beceriniz zirve yapıyor, fikirlerinizi paylaşın.",
  "Pratik konulara odaklanmanız gereken bir gün.",
  "Yaratıcılığınız ön planda, sanatsal projeler için harika.",
  "Sosyal bağlarınız güçleniyor, arkadaşlarınızla vakit geçirin.",
  "Kariyer fırsatları kapınızı çalabilir, hazırlıklı olun.",
];

export const DailyHoroscope = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const dailyMessage = dailyMessages[dayOfWeek];
  
  // Get random sign for "burç of the day"
  const signs = Object.keys(zodiacSigns);
  const featuredSignKey = signs[today.getDate() % 12];
  const featuredSign = zodiacSigns[featuredSignKey];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cosmic/30 border border-cosmic-light/30 mb-6">
          <Star className="w-4 h-4 text-stardust" />
          <span className="text-sm text-nebula-dark">Günün Enerjisi</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl text-nebula mb-4">
          Bugünün Kozmik Mesajı
        </h2>
        <p className="text-muted-foreground">
          {today.toLocaleDateString('tr-TR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Daily message card */}
        <div className="bg-gradient-to-br from-cosmic/40 to-card/80 border border-cosmic-light/30 rounded-2xl p-8 backdrop-blur">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-stardust/20 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-stardust" />
            </div>
            <div>
              <h3 className="font-display text-xl text-nebula">Genel Enerji</h3>
              <p className="text-xs text-muted-foreground">Tüm burçlar için</p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            "{dailyMessage}"
          </p>
          
          {/* Energy indicators */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border/30">
            <div className="text-center">
              <Heart className="w-5 h-5 text-pink-400 mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">Aşk</p>
              <div className="flex justify-center gap-1 mt-1">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i <= 4 ? 'bg-pink-400' : 'bg-muted'}`} />
                ))}
              </div>
            </div>
            <div className="text-center">
              <Briefcase className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">Kariyer</p>
              <div className="flex justify-center gap-1 mt-1">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i <= 3 ? 'bg-emerald-400' : 'bg-muted'}`} />
                ))}
              </div>
            </div>
            <div className="text-center">
              <TrendingUp className="w-5 h-5 text-stardust mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">Şans</p>
              <div className="flex justify-center gap-1 mt-1">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i <= 5 ? 'bg-stardust' : 'bg-muted'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured sign */}
        <div className="bg-gradient-to-br from-stardust/20 to-card/80 border border-stardust/30 rounded-2xl p-8 backdrop-blur">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-stardust/20 flex items-center justify-center text-4xl">
              {featuredSign.symbol}
            </div>
            <div>
              <p className="text-xs text-stardust uppercase tracking-wider mb-1">Günün Burcu</p>
              <h3 className="font-display text-2xl text-nebula">{featuredSign.name}</h3>
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            {featuredSign.description.slice(0, 150)}...
          </p>
          
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-full bg-stardust/10 text-stardust text-xs border border-stardust/30">
              {featuredSign.element}
            </span>
            <span className="px-3 py-1.5 rounded-full bg-muted/40 text-muted-foreground text-xs border border-border/30">
              {featuredSign.rulingPlanet}
            </span>
            <span className="px-3 py-1.5 rounded-full bg-muted/40 text-muted-foreground text-xs border border-border/30">
              {featuredSign.dateRange}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
