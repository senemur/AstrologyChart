import { Navbar } from "@/components/Navbar";
import { StarField } from "@/components/StarField";
import { zodiacSigns } from "@/lib/zodiac";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Moon, Sun, Heart, Briefcase, Zap } from "lucide-react";
import { useEffect } from "react";
import { Footer } from "@/components/Footer";

const ZodiacDetail = () => {
    const { sign } = useParams<{ sign: string }>();
    const zodiac = sign ? zodiacSigns[sign.toLowerCase()] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [sign]);

    if (!zodiac) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
                <StarField />
                <h1 className="text-4xl font-display text-nebula mb-4">Burç Bulunamadı</h1>
                <Link to="/burclar" className="text-stardust hover:underline">
                    Burçlara Geri Dön
                </Link>
            </div>
        );
    }

    // Helper to determine gradient based on element (similar to gallery)
    const getGradient = (element: string) => {
        switch (element.toLowerCase()) {
            case 'ateş': return 'from-red-500/10 via-orange-500/5 to-transparent';
            case 'su': return 'from-blue-500/10 via-cyan-500/5 to-transparent';
            case 'hava': return 'from-yellow-200/10 via-sky-200/5 to-transparent';
            case 'toprak': return 'from-emerald-500/10 via-green-500/5 to-transparent';
            default: return 'from-purple-500/10 via-pink-500/5 to-transparent';
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0b] text-foreground relative selection:bg-stardust/30 font-sans">
            <StarField />
            <Navbar />

            {/* Background Ambience */}
            <div className={`absolute top-0 left-0 w-full h-[80vh] bg-gradient-to-b ${getGradient(zodiac.element)} opacity-50 z-0 pointer-events-none`} />

            <main className="relative z-10 px-4 pt-32 pb-20">
                <div className="max-w-5xl mx-auto">
                    {/* Breadcrumb */}
                    <Link to="/burclar" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-white mb-12 transition-colors group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Tüm Burçlar
                    </Link>

                    {/* Hero Section */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-20 animate-fade-in">
                        {/* Big Symbol */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center text-[8rem] md:text-[10rem] leading-none text-white drop-shadow-2xl">
                                {zodiac.symbol}
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left space-y-6">
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                                <span className="text-xs font-semibold text-stardust uppercase tracking-wider">{zodiac.dateRange}</span>
                            </div>

                            <h1 className="font-display text-6xl md:text-8xl text-white tracking-tight">{zodiac.name}</h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                                {zodiac.description}
                            </p>

                            {/* Quick Stats Grid */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                                {[
                                    { label: 'Element', value: zodiac.element, icon: '🌊' },
                                    { label: 'Gezegen', value: zodiac.rulingPlanet, icon: '🪐' },
                                    { label: 'Nitelik', value: zodiac.modality, icon: '✨' },
                                    { label: 'Kutup', value: 'Eril/Dişil', icon: '☯' } // Placeholder for polarity if not in data
                                ].map((stat, i) => (
                                    <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm flex items-center gap-3">
                                        <span className="text-2xl">{stat.icon}</span>
                                        <div>
                                            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                                            <div className="font-semibold text-white">{stat.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-12 gap-8">
                        {/* Left Column - Traits */}
                        <div className="md:col-span-4 space-y-8">
                            <div className="p-8 rounded-3xl bg-card/10 border border-white/5 backdrop-blur-md">
                                <h3 className="font-display text-2xl text-white mb-6 flex items-center gap-2">
                                    <Star className="w-5 h-5 text-stardust" />
                                    Güçlü Yanlar
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {zodiac.traits.map((t, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl bg-card/10 border border-white/5 backdrop-blur-md">
                                <h3 className="font-display text-2xl text-white mb-6 flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-red-400" />
                                    Zayıf Yanlar
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {zodiac.negativeTraits.map((t, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Deep Dives */}
                        <div className="md:col-span-8 space-y-6">
                            {/* Rising Sign Card */}
                            <div className="group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-white/10 transition-all backdrop-blur-md">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400">
                                        <Sun className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl text-white mb-2">Yükselen {zodiac.name}</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {zodiac.risingDescription}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Moon Sign Card */}
                            <div className="group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-white/10 transition-all backdrop-blur-md">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                                        <Moon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl text-white mb-2">Ay Burcu {zodiac.name}</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {zodiac.moonDescription}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Love & Career Placeholders (Static for now to add fullness) */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                                    <div className="flex items-center gap-2 mb-4 text-pink-400">
                                        <Heart className="w-5 h-5" />
                                        <h4 className="font-medium text-white">Aşk & İlişkiler</h4>
                                    </div>
                                    <p className="text-sm text-white/50">
                                        {zodiac.name} burcu ilişkilerinde tutkulu ve sadıktır. Derin bağlar kurmayı sever ve partnerine karşı dürüsttür.
                                    </p>
                                </div>
                                <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                                    <div className="flex items-center gap-2 mb-4 text-blue-400">
                                        <Briefcase className="w-5 h-5" />
                                        <h4 className="font-medium text-white">Kariyer & Para</h4>
                                    </div>
                                    <p className="text-sm text-white/50">
                                        Azimli ve çalışkan yapısıyla {zodiac.name}, iş hayatında başarıyı hedefler. Liderlik vasıfları yüksektir.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </main>
             <Footer />
        </div>
    );
};

export default ZodiacDetail;
