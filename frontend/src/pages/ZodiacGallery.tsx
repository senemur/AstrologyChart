import { Navbar } from "@/components/Navbar";
import { StarField } from "@/components/StarField";
import { zodiacSigns } from "@/lib/zodiac";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ZodiacGallery() {
    const getElementColor = (element: string) => {
        switch (element.toLowerCase()) {
            case 'ateş': return 'from-red-500/20 to-orange-500/20 border-red-500/30 hover:shadow-red-900/20';
            case 'su': return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 hover:shadow-blue-900/20';
            case 'hava': return 'from-yellow-200/20 to-sky-200/20 border-sky-300/30 hover:shadow-sky-900/20';
            case 'toprak': return 'from-emerald-500/20 to-green-500/20 border-emerald-500/30 hover:shadow-emerald-900/20';
            default: return 'from-purple-500/20 to-pink-500/20 border-purple-500/30';
        }
    };

    const getElementIcon = (element: string) => {
        switch (element.toLowerCase()) {
            case 'ateş': return '🔥';
            case 'su': return '💧';
            case 'hava': return '💨';
            case 'toprak': return '🌿';
            default: return '✨';
        }
    };

    return (
        <div className="min-h-screen bg-background relative overflow-x-hidden selection:bg-stardust/30">
            <StarField />
            <Navbar />

            <main className="relative z-10 px-4 pt-32 pb-20">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-20 text-center animate-fade-in">
                        <h1 className="font-display text-4xl md:text-6xl text-white mb-6">Zodyak Çemberi</h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                            Kozmik enerjilerin 12 farklı yansıması. Her bir burç, evrenin benzersiz bir parçasını ve ruhun farklı bir yolculuğunu temsil eder.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {Object.entries(zodiacSigns).map(([key, sign], index) => {
                            const elementColorClasses = getElementColor(sign.element);

                            return (
                                <Link
                                    to={`/burc/${key}`}
                                    key={key}
                                    className={`group relative h-[380px] rounded-3xl border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${elementColorClasses.split(' hover')[0]} bg-card/10 backdrop-blur-md`}
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    {/* Hover Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${elementColorClasses.split(' border')[0]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    {/* Content */}
                                    <div className="relative z-10 h-full p-8 flex flex-col">
                                        <div className="flex justify-between items-start mb-auto">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                                                {sign.symbol}
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                                                <ArrowUpRight className="w-6 h-6 text-white/70" />
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xl">{getElementIcon(sign.element)}</span>
                                                <span className="text-xs font-semibold tracking-wider uppercase text-white/40">{sign.dateRange}</span>
                                            </div>

                                            <h2 className="font-display text-4xl text-white group-hover:translate-x-1 transition-transform duration-300">
                                                {sign.name}
                                            </h2>

                                            <p className="text-sm text-white/60 line-clamp-3 leading-relaxed group-hover:text-white/80 transition-colors">
                                                {sign.description}
                                            </p>
                                        </div>

                                        {/* Tags at bottom */}
                                        <div className="mt-6 flex gap-2 overflow-hidden">
                                            {[sign.element, sign.rulingPlanet, sign.modality].map((tag, i) => (
                                                <span key={i} className="px-3 py-1 text-[10px] font-medium uppercase tracking-wider bg-white/5 border border-white/5 rounded-full text-white/40 group-hover:text-white/70 group-hover:border-white/20 transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
}
