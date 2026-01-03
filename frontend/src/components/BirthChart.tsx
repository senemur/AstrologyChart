import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Sparkles, Star, Lock } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

interface BirthChartProps {
  onCalculate: (data: { day: number; month: number; year: number; hour: number }) => void;
  isLoading: boolean;
}

export const BirthChart = ({ onCalculate, isLoading }: BirthChartProps) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [hour, setHour] = useState("");
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAuthenticated) {
      toast({
        title: "Giriş Yapmalısınız",
        description: "Harita hesaplamak için lütfen önce giriş yapın.",
        variant: "destructive",
      });
      navigate("/giris");
      return;
    }

    const dayNum = parseInt(day);
    const monthNum = parseInt(month);
    const yearNum = parseInt(year);
    const hourNum = parseInt(hour) || 12;

    if (dayNum && monthNum && yearNum) {
      onCalculate({
        day: dayNum,
        month: monthNum,
        year: yearNum,
        hour: hourNum,
      });
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4">
      <div className="relative">
        {/* Outer glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-stardust/30 via-cosmic-light/30 to-stardust/30 rounded-3xl blur-lg opacity-60 animate-pulse-slow" />

        {/* Decorative corner elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-stardust/50 rounded-tl-lg" />
        <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-stardust/50 rounded-tr-lg" />
        <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-stardust/50 rounded-bl-lg" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-stardust/50 rounded-br-lg" />

        <form
          onSubmit={handleSubmit}
          className="relative bg-card/90 backdrop-blur-xl border border-cosmic-light/30 rounded-2xl p-8 md:p-10 space-y-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cosmic/60 to-cosmic-light/40 mb-6 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-stardust/20 to-transparent animate-spin-slow opacity-50" />
              <Star className="w-10 h-10 text-stardust fill-stardust/30 group-hover:scale-110 transition-transform" />
              {/* Orbiting dot */}
              <div className="absolute w-3 h-3 rounded-full bg-stardust animate-orbit" style={{ animationDuration: '4s' }} />
            </div>
            <h2 className="font-display text-3xl text-nebula mb-3">Doğum Bilgileriniz</h2>
            <p className="text-muted-foreground">Kozmik yolculuğunuz başlamak üzere</p>
          </div>

          {/* Date inputs */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-stardust mb-3">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wide uppercase">Doğum Tarihi</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="group">
                <label className="block text-xs text-muted-foreground mb-2 group-focus-within:text-stardust transition-colors">Gün</label>
                <input
                  type="number"
                  placeholder="15"
                  min="1"
                  max="31"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  required
                  className="w-full bg-muted/50 border border-border/50 rounded-xl px-4 py-4 text-foreground text-center text-lg font-medium placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-stardust/50 focus:border-stardust transition-all hover:border-cosmic-light/50"
                  disabled={!isAuthenticated}
                />
              </div>
              <div className="group">
                <label className="block text-xs text-muted-foreground mb-2 group-focus-within:text-stardust transition-colors">Ay</label>
                <input
                  type="number"
                  placeholder="06"
                  min="1"
                  max="12"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  required
                  className="w-full bg-muted/50 border border-border/50 rounded-xl px-4 py-4 text-foreground text-center text-lg font-medium placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-stardust/50 focus:border-stardust transition-all hover:border-cosmic-light/50"
                  disabled={!isAuthenticated}
                />
              </div>
              <div className="group">
                <label className="block text-xs text-muted-foreground mb-2 group-focus-within:text-stardust transition-colors">Yıl</label>
                <input
                  type="number"
                  placeholder="1990"
                  min="1900"
                  max="2025"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                  className="w-full bg-muted/50 border border-border/50 rounded-xl px-4 py-4 text-foreground text-center text-lg font-medium placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-stardust/50 focus:border-stardust transition-all hover:border-cosmic-light/50"
                  disabled={!isAuthenticated}
                />
              </div>
            </div>
          </div>

          {/* Time input */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-stardust mb-3">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wide uppercase">Doğum Saati</span>
              <span className="text-xs text-muted-foreground font-normal normal-case">(Opsiyonel)</span>
            </div>
            <div className="group">
              <input
                type="number"
                placeholder="14 (0-23 arası)"
                min="0"
                max="23"
                value={hour}
                onChange={(e) => setHour(e.target.value)}
                className="w-full bg-muted/50 border border-border/50 rounded-xl px-4 py-4 text-foreground text-center text-lg font-medium placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-stardust/50 focus:border-stardust transition-all hover:border-cosmic-light/50"
                disabled={!isAuthenticated}
              />
            </div>
            <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-2">
              <Star className="w-3 h-3 text-stardust" />
              Yükselen burç hesaplaması için doğum saati gereklidir
            </p>
          </div>

          <Button
            type="submit"
            variant={isAuthenticated ? "cosmic" : "secondary"}
            size="xl"
            className={`w-full mt-8 group transition-all duration-300 ${!isAuthenticated ? 'opacity-90 hover:opacity-100 bg-gray-800 hover:bg-gray-700 text-gray-300' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-midnight/30 border-t-midnight rounded-full animate-spin" />
                Hesaplanıyor...
              </span>
            ) : !isAuthenticated ? (
              <span className="flex items-center gap-2 text-lg">
                <Lock className="w-5 h-5" /> Giriş Yapın
              </span>
            ) : (
              <span className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 group-hover:animate-pulse" />
                Burçlarımı Hesapla
                <Sparkles className="w-6 h-6 group-hover:animate-pulse" style={{ animationDelay: '0.2s' }} />
              </span>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};
