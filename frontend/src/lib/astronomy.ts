// Utility functions for degree/radian conversion
const D2R = Math.PI / 180;
const R2D = 180 / Math.PI;

// Normalize angle to 0-360
function normalizeAngle(angle: number): number {
    let newAngle = angle % 360;
    if (newAngle < 0) newAngle += 360;
    return newAngle;
}

// Calculate Julian Day
function getJulianDay(date: Date): number {
    return (date.getTime() / 86400000) + 2440587.5;
}

// Global default: Istanbul, Turkey
const DEFAULT_LAT = 41.0082;
const DEFAULT_LON = 28.9784;

/**
 * Calculates the Ascendant (Rising Sign) degree
 * @param date Date object representing birth date and time (UTC/Local handled via getTime)
 * @param lat Latitude (decimal)
 * @param lon Longitude (decimal)
 * @returns Degree (0-360) where 0=Aries, 30=Taurus, etc.
 */
export const calculateAscendantDegree = (
    date: Date,
    lat: number = DEFAULT_LAT,
    lon: number = DEFAULT_LON
): number => {
    const jd = getJulianDay(date);
    const t = (jd - 2451545.0) / 36525.0; // Century (J2000)

    // Greenwich Sidereal Time (GMST) in degrees
    let gmst = 280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * t * t - t * t * t / 38710000;
    gmst = normalizeAngle(gmst);

    // Local Sidereal Time (LST)
    const lst = normalizeAngle(gmst + lon);

    // Obliquity of the Ecliptic (approx)
    const eps = 23.4392911 - (46.815 * t + 0.00059 * t * t + 0.001813 * t * t * t) / 3600;

    // Convert to radians
    const lstRad = lst * D2R;
    const epsRad = eps * D2R;
    const latRad = lat * D2R;

    // Formula for Ascendant
    // tan(ASC) = (-cos(A) * sin(LST) - sin(A) * cos(eps) * cos(LST)) / (sin(LST) * sin(eps)) ?? 
    // Simpler formula: tan(ASC) = cos(LST) / -(sin(LST) * cos(eps) + tan(lat) * sin(eps))

    const num = Math.cos(lstRad);
    const den = -(Math.sin(lstRad) * Math.cos(epsRad) + Math.tan(latRad) * Math.sin(epsRad));

    let asc = Math.atan2(num, den) * R2D;
    asc = normalizeAngle(asc);

    return asc;
};

export const getZodiacSign = (degree: number): string => {
    const signs = [
        "aries", "taurus", "gemini", "cancer", "leo", "virgo",
        "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"
    ];
    const index = Math.floor(degree / 30);
    return signs[index % 12];
};
