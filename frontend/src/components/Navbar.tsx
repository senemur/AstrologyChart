import { Star } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    const navItems = [
        { label: "Ana Sayfa", path: "/" },
        { label: "Burçlar", path: "/burclar" },
        { label: "Burç Hesapla", path: "/#birth-chart" }, // Hash link handling needed
        { label: "Yükselen Burç", path: "/yukselen-burc" },
        { label: "Ay Burcu", path: "/ay-burcu" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300 bg-background/0 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <Star className="w-6 h-6 text-stardust fill-stardust animate-pulse-slow" />
                    <span className="font-display text-xl md:text-2xl text-white tracking-wide">
                        Astroloji <span className="font-light text-white/70">Dünyası</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path || (item.path.includes("#") && location.hash === "#birth-chart" && isHome);

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={cn(
                                    "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                    isActive
                                        ? "bg-white/10 text-white shadow-lg shadow-white/5"
                                        : "text-white/60 hover:text-white hover:bg-white/5"
                                )}
                                onClick={() => {
                                    if (item.path.includes("#")) {
                                        const element = document.getElementById(item.path.split("#")[1]);
                                        element?.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>

                {/* Mobile Menu Button (Placeholder) */}
                <button className="md:hidden p-2 text-white/70">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </button>
            </div>
        </header>
    );
};
