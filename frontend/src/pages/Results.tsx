import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ZodiacResults } from "@/components/ZodiacResults";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StarField } from "@/components/StarField";
import { zodiacSigns } from "@/lib/zodiac";
import { ChartCalculationResult, saveChart } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Save } from "lucide-react";

interface LocationState {
    result: {
        sunSign: string;
        moonSign: string;
        risingSign: string;
        fullChart: ChartCalculationResult;
    };
    requestData: {
        date: string;
        latitude: number;
        longitude: number;
    }
}

const Results = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as LocationState;
    const [isSaveOpen, setIsSaveOpen] = useState(false);
    const [chartName, setChartName] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        if (!state?.result) {
            navigate("/");
        }
    }, [state, navigate]);

    if (!state?.result) return null;

    const { result, requestData } = state;

    const handleSave = async () => {
        if (!chartName.trim()) return;
        setIsSaving(true);
        try {
            await saveChart({
                name: chartName,
                date: requestData.date,
                latitude: requestData.latitude,
                longitude: requestData.longitude
            });
            toast({
                title: "Başarılı!",
                description: "Doğum haritanız kaydedildi.",
            });
            setIsSaveOpen(false);
        } catch (error) {
            toast({
                title: "Hata",
                description: "Harita kaydedilemedi.",
                variant: "destructive"
            });
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="min-h-screen relative overflow-x-hidden bg-[#0a0a0b]">
            <StarField />
            <Navbar />

            <main className="relative z-10 pt-20">
                <div className="max-w-7xl mx-auto px-4 flex justify-end mb-4 pt-8">
                    <Dialog open={isSaveOpen} onOpenChange={setIsSaveOpen}>
                        <DialogTrigger asChild>
                            <Button className="bg-stardust text-[#0a0a0b] hover:bg-stardust/90 gap-2">
                                <Save className="w-4 h-4" /> Haritayı Kaydet
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-[#1a1a2e] border-white/10 text-white">
                            <DialogHeader>
                                <DialogTitle>Haritayı Kaydet</DialogTitle>
                                <DialogDescription className="text-white/60">
                                    Bu haritayı daha sonra tekrar görüntülemek için bir isim verin.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-white">Harita Adı</Label>
                                    <Input
                                        id="name"
                                        value={chartName}
                                        onChange={(e) => setChartName(e.target.value)}
                                        placeholder="Örn: Senem'in Haritası"
                                        className="bg-black/20 border-white/10 text-white"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button variant="ghost" onClick={() => setIsSaveOpen(false)} className="text-white hover:bg-white/10">İptal</Button>
                                <Button onClick={handleSave} disabled={isSaving} className="bg-stardust text-[#0a0a0b] hover:bg-stardust/90">
                                    {isSaving ? "Kaydediliyor..." : "Kaydet"}
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

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
