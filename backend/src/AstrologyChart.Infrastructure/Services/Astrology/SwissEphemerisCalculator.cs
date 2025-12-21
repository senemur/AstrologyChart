using AstrologyChart.Application.DTOs;
using AstrologyChart.Application.Interfaces;
using SwissEphNet;

namespace AstrologyChart.Infrastructure.Services.Astrology;

public class SwissEphemerisCalculator : IAstrologyCalculator, IDisposable
{
    private readonly SwissEph _swissEph;

    public SwissEphemerisCalculator()
    {
        _swissEph = new SwissEph();
        // Set ephemeris path if you have local ephe files, otherwise it might use default or limited precision
        // _swissEph.swe_set_ephe_path("path/to/ephe"); 
    }

    public List<PlanetPosition> CalculatePlanets(DateTime utcDate, double latitude, double longitude)
    {
        var planets = new List<PlanetPosition>();
        
        // Convert Date to Julian Day
        double[] tjd = new double[2];
        string jd_err_msg = "";
        _swissEph.swe_utc_to_jd(utcDate.Year, utcDate.Month, utcDate.Day, utcDate.Hour, utcDate.Minute, utcDate.Second, SwissEph.SE_GREG_CAL, tjd, ref jd_err_msg);
        double julianDay = tjd[0]; // UT

        int[] planetIds = 
        { 
            SwissEph.SE_SUN, SwissEph.SE_MOON, SwissEph.SE_MERCURY, SwissEph.SE_VENUS, 
            SwissEph.SE_MARS, SwissEph.SE_JUPITER, SwissEph.SE_SATURN, 
            SwissEph.SE_URANUS, SwissEph.SE_NEPTUNE, SwissEph.SE_PLUTO,
            SwissEph.SE_TRUE_NODE // North Node
        };

        foreach (var planetId in planetIds)
        {
            double[] xx = new double[6];
            string err_msg = "";
            
            // Calculate Planet Position
            // SEFLG_SWIEPH: use Swiss Ephemeris
            // SEFLG_SPEED: calculate speed
            long iflag = SwissEph.SEFLG_SWIEPH | SwissEph.SEFLG_SPEED; 
            
            _swissEph.swe_calc_ut(julianDay, planetId, (int)iflag, xx, ref err_msg);

            string planetName = _swissEph.swe_get_planet_name(planetId);
            
            planets.Add(new PlanetPosition
            {
                PlanetName = planetName,
                Longitude = xx[0],
                Latitude = xx[1],
                Speed = xx[3],
                Sign = GetSignFromLongitude(xx[0])
            });
        }

        return planets;
    }

    private string GetSignFromLongitude(double longitude)
    {
        string[] signs = { "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces" };
        int signIndex = (int)(longitude / 30);
        return signs[signIndex % 12];
    }

    public void Dispose()
    {
        _swissEph.swe_close();
    }
}
