import { useState } from "react";
import { StarField } from "@/components/StarField";
import { HeroSection } from "@/components/HeroSection";
import { BirthChart } from "@/components/BirthChart";
import { CosmicLoader } from "@/components/CosmicLoader";
import { DailyHoroscope } from "@/components/DailyHoroscope";
import { calculateChart } from "@/lib/api";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleCalculate = async (data: { day: number; month: number; year: number; hour: number }) => {
    setIsLoading(true);

    try {
      const birthDate = new Date(data.year, data.month - 1, data.day, data.hour, 0);
      const apiResult = await calculateChart(birthDate);
      console.log("Backend Response:", apiResult);

      const sun = apiResult.planets.find(p => p.planetName === "Sun");
      const moon = apiResult.planets.find(p => p.planetName === "Moon");
      const rising = apiResult.axes.ascendantSign;

      navigate("/sonuclar", {
        state: {
          result: {
            sunSign: sun?.sign.toLowerCase() || "aries",
            moonSign: moon?.sign.toLowerCase() || "aries",
            risingSign: rising.toLowerCase(),
            fullChart: apiResult
          },
          requestData: {
            date: birthDate.toISOString(),
            latitude: 41.0082, // Hardcoded for now, should match calculation default
            longitude: 28.9784
          }
        }
      });
    } catch (error) {
      console.error("Calculation failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#0a0a0b]">
      <StarField />
      <Navbar />

      <main className="relative z-10">
        {!isLoading && (
          <>
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
      </main>

      <Footer />
    </div>
  );
};

export default Index;
