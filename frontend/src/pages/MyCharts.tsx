import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StarField } from "@/components/StarField";
import { getMyCharts, Chart, ChartCalculationResult } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

const MyCharts = () => {
    const [charts, setCharts] = useState<Chart[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/giris");
            return;
        }

        const fetchCharts = async () => {
            try {
                const data = await getMyCharts();
                setCharts(data);
            } catch (error) {
                console.error("Failed to fetch charts", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCharts();
    }, [isAuthenticated, navigate]);

    const handleViewChart = (chart: Chart) => {
        try {
            const parsedResult: any = JSON.parse(chart.planetPositionsJson);

            // Robustly handle both camelCase (new) and PascalCase (old) data formats
            const planets = parsedResult.planets || parsedResult.Planets || [];
            const axes = parsedResult.axes || parsedResult.Axes || {};

            // Helper to get planet name regardless of case
            const getPlanetName = (p: any) => p.planetName || p.PlanetName;
            const getSign = (p: any) => p.sign || p.Sign;

            const sun = planets.find((p: any) => getPlanetName(p) === "Sun");
            const moon = planets.find((p: any) => getPlanetName(p) === "Moon");
            const rising = axes.ascendantSign || axes.AscendantSign;

            // Normalize the full chart object for the Results page
            // We ensure strict camelCase structure for the component
            const normalizedChart: ChartCalculationResult = {
                planets: planets.map((p: any) => ({
                    planetName: getPlanetName(p),
                    longitude: p.longitude || p.Longitude,
                    latitude: p.latitude || p.Latitude,
                    speed: p.speed || p.Speed,
                    sign: getSign(p)
                })),
                houses: (parsedResult.houses || parsedResult.Houses || []).map((h: any) => ({
                    houseNumber: h.houseNumber || h.HouseNumber,
                    sign: h.sign || h.Sign,
                    degree: h.degree || h.Degree
                })),
                axes: {
                    ascendant: axes.ascendant || axes.Ascendant,
                    ascendantSign: rising,
                    mc: axes.mc || axes.Mc,
                    mcSign: axes.mcSign || axes.McSign
                }
            };

            navigate("/sonuclar", {
                state: {
                    result: {
                        sunSign: (getSign(sun) || "aries").toLowerCase(),
                        moonSign: (getSign(moon) || "aries").toLowerCase(),
                        risingSign: (rising || "aries").toLowerCase(),
                        fullChart: normalizedChart
                    },
                    requestData: {
                        date: chart.birthDate,
                        latitude: chart.latitude,
                        longitude: chart.longitude
                    }
                }
            });
        } catch (e) {
            console.error("Error parsing chart data", e);
        }
    };

    return (
        <div className="min-h-screen relative overflow-x-hidden bg-[#0a0a0b] flex flex-col">
            <StarField />
            <Navbar />

            <main className="flex-grow relative z-10 pt-24 px-4 max-w-7xl mx-auto w-full">
                <h1 className="text-3xl md:text-4xl font-display text-white mb-8">Kayıtlı Haritalarım</h1>

                {isLoading ? (
                    <div className="text-white/50 text-center py-20">Yükleniyor...</div>
                ) : charts.length === 0 ? (
                    <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-white/60 text-lg mb-4">Henüz kaydedilmiş bir haritanız yok.</p>
                        <Button onClick={() => navigate("/")} className="bg-stardust text-[#0a0a0b] hover:bg-stardust/90">
                            Yeni Harita Hesapla
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {charts.map((chart) => (
                            <Card key={chart.id} className="bg-card/40 backdrop-blur-sm border-white/10 hover:border-stardust/50 transition-all duration-300 group">
                                <CardHeader>
                                    <CardTitle className="text-xl text-white group-hover:text-stardust transition-colors">
                                        {chart.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2 text-sm text-white/60">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-stardust" />
                                            <span>
                                                {format(new Date(chart.birthDate), "d MMMM yyyy, HH:mm", { locale: tr })}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-stardust" />
                                            <span>
                                                {chart.latitude.toFixed(2)}, {chart.longitude.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="pt-2 flex justify-between items-center">
                                        <Button
                                            variant="ghost"
                                            className="text-white/40 hover:text-red-400 hover:bg-red-400/10 p-2 h-auto"
                                            // TODO: Implement Delete
                                            onClick={(e) => { e.stopPropagation(); /* Add delete logic later */ }}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>

                                        <Button
                                            onClick={() => handleViewChart(chart)}
                                            className="bg-white/10 text-white hover:bg-stardust hover:text-[#0a0a0b] group-hover:bg-stardust group-hover:text-[#0a0a0b]"
                                        >
                                            Görüntüle <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default MyCharts;
