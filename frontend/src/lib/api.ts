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

const API_BASE_URL = "http://localhost:5243/api";

export const calculateChart = async (date: Date, latitude: number = 41.0082, longitude: number = 28.9784): Promise<ChartCalculationResult> => {
    const response = await fetch(`${API_BASE_URL}/Chart/calculate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
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
