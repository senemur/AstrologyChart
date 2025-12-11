import { Star, Instagram, Twitter, Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="relative z-10 bg-[#060609] border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4 group">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-stardust to-orange-500 flex items-center justify-center">
                                <Star className="w-4 h-4 text-white fill-white" />
                            </div>
                            <span className="font-display text-xl text-white">Astroloji Dünyası</span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed mb-6">
                            Yıldızların rehberliğinde kendinizi keşfedin. Doğum haritası, günlük yorumlar ve yükselen burç hesaplama aracı.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-stardust hover:bg-white/10 transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-stardust hover:bg-white/10 transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-stardust hover:bg-white/10 transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Hızlı Erişim</h3>
                        <ul className="space-y-2 text-sm text-white/50">
                            <li><Link to="/" className="hover:text-stardust transition-colors">Ana Sayfa</Link></li>
                            <li><Link to="/burclar" className="hover:text-stardust transition-colors">Burçlar</Link></li>
                            <li><a href="#birth-chart" className="hover:text-stardust transition-colors">Harita Hesapla</a></li>
                            <li><Link to="/gezegenler" className="hover:text-stardust transition-colors">Gezegenler</Link></li>
                        </ul>
                    </div>

                    {/* Burçlar */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Burçlar</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm text-white/50">
                            <Link to="/burc/aries" className="hover:text-stardust transition-colors">Koç</Link>
                            <Link to="/burc/taurus" className="hover:text-stardust transition-colors">Boğa</Link>
                            <Link to="/burc/gemini" className="hover:text-stardust transition-colors">İkizler</Link>
                            <Link to="/burc/cancer" className="hover:text-stardust transition-colors">Yengeç</Link>
                            <Link to="/burc/leo" className="hover:text-stardust transition-colors">Aslan</Link>
                            <Link to="/burc/virgo" className="hover:text-stardust transition-colors">Başak</Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-medium mb-4">İletişim</h3>
                        <ul className="space-y-3 text-sm text-white/50">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                info@astrolojidunyasi.com
                            </li>
                        </ul>
                        <div className="mt-6 pt-6 border-t border-white/5">
                            <p className="text-xs">
                                Abone Olun <br />
                                <span className="text-[10px] text-white/30">En yeni astroloji haberleri cebinize gelsin.</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
                    <p>© 2024 Astroloji Dünyası. Tüm hakları saklıdır.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
                        <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
