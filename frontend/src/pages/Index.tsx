import { useState } from "react";
import { StarField } from "@/components/StarField";
import { HeroSection } from "@/components/HeroSection";
import { BirthChart } from "@/components/BirthChart";
import { ZodiacResults } from "@/components/ZodiacResults";
import { CosmicLoader } from "@/components/CosmicLoader";
import { DailyHoroscope } from "@/components/DailyHoroscope";
import {
  zodiacSigns,
  calculateSunSign,
  calculateMoonSign
} from "@/lib/zodiac";
import { calculateAscendantDegree, getZodiacSign } from "@/lib/astronomy";
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

    // Simulate calculation time
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Calculate Signs
    const sunSign = calculateSunSign(data.day, data.month);
    const moonSign = calculateMoonSign(data.day, data.month, data.year);

    // Improved Rising Sign Calculation
    // Note: This relies on default Lat/Lon (Istanbul) since we don't capture location yet.
    // In a production app, we would ask for location.
    const birthDate = new Date(data.year, data.month - 1, data.day, data.hour, 0);
    const ascDegree = calculateAscendantDegree(birthDate);
    const risingSign = getZodiacSign(ascDegree);

    setResult({ sunSign, moonSign, risingSign });
    setIsLoading(false);
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
