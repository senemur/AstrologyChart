import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { register } from "@/lib/api";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StarField } from "@/components/StarField";
import { Sparkles, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            await register({ username, email, password });
            toast({
                title: "Kayıt Başarılı!",
                description: "Şimdi giriş yapabilirsiniz.",
            });
            navigate("/giris");
        } catch (err: any) {
            setError(err.message || "Kayıt işlemi başarısız oldu.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen relative overflow-x-hidden bg-[#0a0a0b] flex flex-col">
            <StarField />
            <Navbar />

            <main className="flex-grow flex items-center justify-center relative z-10 px-4 pt-20">
                <div className="w-full max-w-md bg-card/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl animate-fade-in">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-stardust/20 mb-4">
                            <Sparkles className="w-6 h-6 text-stardust" />
                        </div>
                        <h1 className="text-3xl font-display text-nebula mb-2">Kayıt Ol</h1>
                        <p className="text-muted-foreground">Kozmik yolculuğunuza başlayın</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
                                {error}
                            </div>
                        )}

                        <div className="space-y-2">
                            <Label htmlFor="username">Kullanıcı Adı</Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="KozmikGezgin"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="bg-black/20 border-white/10 focus:border-stardust/50 text-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">E-posta</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="ornek@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-black/20 border-white/10 focus:border-stardust/50 text-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Şifre</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="bg-black/20 border-white/10 focus:border-stardust/50 text-white"
                            />
                        </div>

                        <Button type="submit" className="w-full bg-cosmic hover:bg-cosmic/80 text-white" disabled={isLoading}>
                            {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : "Kayıt Ol"}
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-muted-foreground">
                        Zaten hesabınız var mı?{" "}
                        <Link to="/giris" className="text-stardust hover:underline">
                            Giriş Yap
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Register;
