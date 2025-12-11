import { ZodiacCard } from "./ZodiacCard";
import { ZodiacSign } from "@/lib/zodiac";
import { Sparkles, RotateCcw, Star, Moon, Sun, ArrowUp, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ZodiacResultsProps {
  sunSign: ZodiacSign;
  moonSign: ZodiacSign;
  risingSign: ZodiacSign;
  onReset: () => void;
}

export const ZodiacResults = ({ sunSign, moonSign, risingSign, onReset }: ZodiacResultsProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-12 px-4">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stardust/15 border border-stardust/30 mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-stardust animate-pulse" />
          <span className="text-sm text-stardust font-medium tracking-wide">Kozmik Haritanız Hazır</span>
          <Sparkles className="w-4 h-4 text-stardust animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-nebula mb-6">
          Astrolojik Profiliniz
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Güneş, Ay ve Yükselen burçlarınız birlikte <span className="text-stardust">benzersiz kozmik kimliğinizi</span> oluşturur
        </p>
      </div>

      {/* Big Three Summary with enhanced design */}
      <div className="relative">
        {/* Connection lines */}
        <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-stardust/30 to-transparent" />
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-16 mb-16">
          {/* Sun */}
          <div className="text-center animate-scale-in group" style={{ animationDelay: '0.1s' }}>
            <div className="relative mb-4">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-stardust/40 to-amber-500/20 flex items-center justify-center mx-auto border-2 border-stardust/40 group-hover:border-stardust/60 transition-all group-hover:scale-110 duration-300">
                <span className="text-5xl">{sunSign.symbol}</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-cosmic flex items-center justify-center border border-stardust/50">
                <Sun className="w-4 h-4 text-stardust" />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-stardust/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Güneş Burcu</p>
            <p className="font-display text-xl text-nebula">{sunSign.name}</p>
          </div>
          
          {/* Moon */}
          <div className="text-center animate-scale-in group" style={{ animationDelay: '0.2s' }}>
            <div className="relative mb-4">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-nebula/30 to-cosmic-light/20 flex items-center justify-center mx-auto border-2 border-nebula/40 group-hover:border-nebula/60 transition-all group-hover:scale-110 duration-300">
                <span className="text-5xl">{moonSign.symbol}</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-cosmic flex items-center justify-center border border-nebula/50">
                <Moon className="w-4 h-4 text-nebula" />
              </div>
              <div className="absolute inset-0 rounded-full bg-nebula/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Ay Burcu</p>
            <p className="font-display text-xl text-nebula">{moonSign.name}</p>
          </div>
          
          {/* Rising */}
          <div className="text-center animate-scale-in group" style={{ animationDelay: '0.3s' }}>
            <div className="relative mb-4">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cosmic-light/40 to-purple-400/20 flex items-center justify-center mx-auto border-2 border-cosmic-light/40 group-hover:border-cosmic-light/60 transition-all group-hover:scale-110 duration-300">
                <span className="text-5xl">{risingSign.symbol}</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-cosmic flex items-center justify-center border border-cosmic-light/50">
                <ArrowUp className="w-4 h-4 text-cosmic-light" />
              </div>
              <div className="absolute inset-0 rounded-full bg-cosmic-light/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Yükselen</p>
            <p className="font-display text-xl text-nebula">{risingSign.name}</p>
          </div>
        </div>
      </div>

      {/* Detailed Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <ZodiacCard sign={sunSign} type="sun" />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <ZodiacCard sign={moonSign} type="moon" />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <ZodiacCard sign={risingSign} type="rising" />
        </div>
      </div>

      {/* Cosmic Interpretation */}
      <div className="mt-16 relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-light/20 via-stardust/20 to-cosmic-light/20 rounded-3xl blur-lg opacity-50" />
        <div className="relative bg-gradient-to-br from-cosmic/40 to-card/80 border border-cosmic-light/30 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-stardust/20 flex items-center justify-center flex-shrink-0">
              <Quote className="w-6 h-6 text-stardust" />
            </div>
            <div>
              <h3 className="font-display text-2xl text-nebula mb-2">Kozmik Yorumunuz</h3>
              <p className="text-muted-foreground text-sm">Yıldızların size özel mesajı</p>
            </div>
          </div>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <span className="text-stardust font-semibold">{sunSign.name}</span> güneş burcu olarak, yaşam amacınız ve çekirdek kişiliğiniz {sunSign.element} elementinin enerjisini taşır. 
              {sunSign.rulingPlanet} gezegeninin yönetiminde, {sunSign.traits[0].toLowerCase()} ve {sunSign.traits[1].toLowerCase()} özellikleriniz ön plana çıkar.
            </p>
            
            <p>
              <span className="text-nebula font-semibold">{moonSign.name}</span> Ay burcu, duygusal iç dünyanızı ve bilinçaltı tepkilerinizi şekillendirir. 
              Duygusal güvenlik için {moonSign.element === "Su" ? "derin bağlar" : moonSign.element === "Toprak" ? "istikrar" : moonSign.element === "Ateş" ? "özgürlük" : "entelektüel uyum"} ararsınız.
            </p>
            
            <p>
              <span className="text-cosmic-light font-semibold">{risingSign.name}</span> yükselenle, dünyaya kendinizi {risingSign.traits[0].toLowerCase()} ve {risingSign.traits[2].toLowerCase()} bir şekilde sunarsınız. 
              İlk izleniminiz {risingSign.element} elementinin karakteristik özelliklerini yansıtır.
            </p>
          </div>

          {/* Element breakdown */}
          <div className="mt-8 pt-6 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-4">Element Dağılımınız:</p>
            <div className="flex flex-wrap gap-3">
              {[sunSign, moonSign, risingSign].map((sign, i) => (
                <span 
                  key={i}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    sign.element === "Ateş" ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" :
                    sign.element === "Toprak" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" :
                    sign.element === "Hava" ? "bg-sky-500/20 text-sky-400 border border-sky-500/30" :
                    "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  }`}
                >
                  {sign.element} ({i === 0 ? "Güneş" : i === 1 ? "Ay" : "Yükselen"})
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fun Facts Section */}
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <div className="bg-card/60 border border-border/50 rounded-2xl p-6 backdrop-blur animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-5 h-5 text-stardust" />
            <h4 className="font-display text-lg text-nebula">Uyumlu Burçlarınız</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            {sunSign.element === "Ateş" ? "Aslan, Yay ve Koç burçlarıyla yüksek enerji uyumu" :
             sunSign.element === "Toprak" ? "Başak, Oğlak ve Boğa burçlarıyla pratik uyum" :
             sunSign.element === "Hava" ? "Terazi, Kova ve İkizler burçlarıyla entelektüel uyum" :
             "Akrep, Balık ve Yengeç burçlarıyla duygusal uyum"} yaşarsınız.
          </p>
        </div>
        
        <div className="bg-card/60 border border-border/50 rounded-2xl p-6 backdrop-blur animate-fade-in" style={{ animationDelay: '1.1s' }}>
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-cosmic-light" />
            <h4 className="font-display text-lg text-nebula">Şanslı Gününüz</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            {sunSign.rulingPlanet === "Mars" ? "Salı" :
             sunSign.rulingPlanet === "Venüs" ? "Cuma" :
             sunSign.rulingPlanet === "Merkür" ? "Çarşamba" :
             sunSign.rulingPlanet === "Ay" ? "Pazartesi" :
             sunSign.rulingPlanet === "Güneş" ? "Pazar" :
             sunSign.rulingPlanet === "Jüpiter" ? "Perşembe" :
             "Cumartesi"} günü {sunSign.rulingPlanet} enerjisiyle en güçlü olduğunuz gündür.
          </p>
        </div>
      </div>

      {/* Reset Button */}
      <div className="text-center pt-12">
        <Button variant="mystical" size="lg" onClick={onReset} className="group">
          <RotateCcw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
          Yeni Hesaplama Yap
        </Button>
      </div>
    </div>
  );
};
