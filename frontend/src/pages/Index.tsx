import { useState } from "react";
import { StarField } from "@/components/StarField";
import { HeroSection } from "@/components/HeroSection";
import { BirthChart } from "@/components/BirthChart";
import { ZodiacResults } from "@/components/ZodiacResults";
import { CosmicLoader } from "@/components/CosmicLoader";
import { DailyHoroscope } from "@/components/DailyHoroscope";
import {
  zodiacSigns,
} from "@/lib/zodiac";
import { calculateChart } from "@/lib/api";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface CalculationResult {
  sunSign: string;
  moonSign: string;
  risingSign: string;
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleCalculate = async (data: { day: number; month: number; year: number; hour: number }) => {
    setIsLoading(true);

    try {
      // Create date object (assuming local time input, converting to UTC for backend)
      const birthDate = new Date(data.year, data.month - 1, data.day, data.hour, 0);

      // Call Backend API
      // Defaulting to Istanbul (41.0082, 28.9784) as per previous logic
      const apiResult = await calculateChart(birthDate);

      // Map Backend Result to Frontend UI
      const sun = apiResult.planets.find(p => p.planetName === "Sun");
      const moon = apiResult.planets.find(p => p.planetName === "Moon");
      const rising = apiResult.axes.ascendantSign;

      setResult({
        sunSign: sun?.sign.toLowerCase() || "aries",
        moonSign: moon?.sign.toLowerCase() || "aries",
        risingSign: rising.toLowerCase()
      });
    } catch (error) {
      console.error("Calculation failed:", error);
      // Fallback or error handling could go here
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#0a0a0b]">
      <StarField />
      <Navbar />

      <main className="relative z-10">
        {!result && !isLoading && (
          <>
            {/* Hero section now covers full screen/top part, so no padding needed wrapper for it specifically if getting full width */}
            <div className="w-full">
              <HeroSection />
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20 space-y-32">
              <div id="birth-chart" className="scroll-mt-24">
                <BirthChart onCalculate={handleCalculate} isLoading={isLoading} />
              </div>
              <DailyHoroscope />
            </div>
          </>
        )}

        {isLoading && (
          <div className="min-h-screen flex items-center justify-center">
            <CosmicLoader />
          </div>
        )}

        {result && !isLoading && (
          <div className="max-w-7xl mx-auto px-4 py-20">
            <ZodiacResults
              sunSign={zodiacSigns[result.sunSign]}
              moonSign={zodiacSigns[result.moonSign]}
              risingSign={zodiacSigns[result.risingSign]}
              onReset={handleReset}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
