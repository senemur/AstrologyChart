import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { AuthResponse } from "@/lib/api";

interface User {
    userId: number;
    username: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    loginState: (authData: AuthResponse) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Check localStorage on mount
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        const username = localStorage.getItem("username");

        if (token && userId && username) {
            setUser({
                userId: parseInt(userId),
                username: username,
            });
        }
    }, []);

    const loginState = (authData: AuthResponse) => {
        localStorage.setItem("token", authData.token);
        localStorage.setItem("userId", authData.userId.toString());
        localStorage.setItem("username", authData.username);

        setUser({
            userId: authData.userId,
            username: authData.username,
        });
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("username");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, loginState, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
