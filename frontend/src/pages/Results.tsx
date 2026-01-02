import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ZodiacResults } from "@/components/ZodiacResults";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StarField } from "@/components/StarField";
import { zodiacSigns } from "@/lib/zodiac";
import { ChartCalculationResult } from "@/lib/api";

interface LocationState {
    result: {
        sunSign: string;
        moonSign: string;
        risingSign: string;
        fullChart: ChartCalculationResult;
    };
}

const Results = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as LocationState;

    useEffect(() => {
        if (!state?.result) {
            navigate("/");
        }
    }, [state, navigate]);

    if (!state?.result) return null;

    const { result } = state;

    return (
        <div className="min-h-screen relative overflow-x-hidden bg-[#0a0a0b]">
            <StarField />
            <Navbar />

            <main className="relative z-10 pt-20">
                <ZodiacResults
                    sunSign={zodiacSigns[result.sunSign]}
                    moonSign={zodiacSigns[result.moonSign]}
                    risingSign={zodiacSigns[result.risingSign]}
                    fullChart={result.fullChart}
                    onReset={() => navigate("/")}
                />
            </main>

            <Footer />
        </div>
    );
};

export default Results;
