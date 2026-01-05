export interface PlanetPosition {
    planetName: string;
    longitude: number;
    latitude: number;
    speed: number;
    sign: string;
}

export interface HousePosition {
    houseNumber: number;
    sign: string;
    degree: number;
}

export interface Axes {
    ascendant: number;
    ascendantSign: string;
    mc: number;
    mcSign: string;
}

export interface ChartCalculationResult {
    planets: PlanetPosition[];
    houses: HousePosition[];
    axes: Axes;
}

export interface ChartRequest {
    date: string; // ISO string
    latitude: number;
    longitude: number;
}

// Auth Types
export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    userId: number;
    username: string;
}

const getBaseUrl = () => {
    let url = import.meta.env.VITE_API_BASE_URL || "https://astrologychart.onrender.com/api";
    if (!url.endsWith("/api")) {
        url += "/api";
    }
    return url;
};

const API_BASE_URL = getBaseUrl();

export const calculateChart = async (date: Date, latitude: number = 41.0082, longitude: number = 28.9784): Promise<ChartCalculationResult> => {
    const response = await fetch(`${API_BASE_URL}/Chart/calculate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...(localStorage.getItem("token") ? { "Authorization": `Bearer ${localStorage.getItem("token")}` } : {})
        },
        body: JSON.stringify({
            date: date.toISOString(),
            latitude,
            longitude,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to calculate chart");
    }

    return response.json();
};

export const login = async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await fetch(`${API_BASE_URL}/Auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Giriş yapılamadı");
    }

    return response.json();
};

export interface SaveChartRequest {
    name: string;
    date: string;
    latitude: number;
    longitude: number;
}

export const register = async (data: RegisterRequest): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/Auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Kayıt olunamadı");
    }
};

export const saveChart = async (data: SaveChartRequest): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/Chart/save`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...(localStorage.getItem("token") ? { "Authorization": `Bearer ${localStorage.getItem("token")}` } : {})
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Harita kaydedilemedi");
    }
};

export interface Chart {
    id: number;
    userId: number;
    name: string;
    birthDate: string;
    latitude: number;
    longitude: number;
    planetPositionsJson: string;
    createdAt: string;
}

export const getMyCharts = async (): Promise<Chart[]> => {
    const response = await fetch(`${API_BASE_URL}/Chart/my-charts`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            ...(localStorage.getItem("token") ? { "Authorization": `Bearer ${localStorage.getItem("token")}` } : {})
        },
    });

    if (!response.ok) {
        throw new Error("Haritalar getirilemedi");
    }

    return response.json();
};
