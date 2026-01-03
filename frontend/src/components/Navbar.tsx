import { Star, LogOut, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const { isAuthenticated, user, logout } = useAuth();

    const navItems = [
        { label: "Ana Sayfa", path: "/" },
        { label: "Burçlar", path: "/burclar" },
        { label: "Burç Hesapla", path: "/#birth-chart" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-white/5">
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

                <div className="flex items-center gap-4">
                    {isAuthenticated ? (
                        <div className="flex items-center gap-4">
                            <Link to="/haritalarim" className="hidden lg:flex items-center gap-2 text-sm text-white/80 hover:text-stardust transition-colors">
                                <User className="w-4 h-4" />
                                <span>Haritalarım ({user?.username})</span>
                            </Link>
                            <Button variant="ghost" size="icon" onClick={logout} className="text-white hover:text-red-400 hover:bg-white/5" title="Çıkış Yap">
                                <LogOut className="w-5 h-5" />
                            </Button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Link to="/giris">
                                <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/5">Giriş Yap</Button>
                            </Link>
                            <Link to="/kayit">
                                <Button className="bg-stardust text-[#0a0a0b] hover:bg-stardust/90 font-medium">Kayıt Ol</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};
