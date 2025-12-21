using AstrologyChart.Application.DTOs;

namespace AstrologyChart.Application.Interfaces;

public interface IAstrologyCalculator
{
    List<PlanetPosition> CalculatePlanets(DateTime utcDate, double latitude, double longitude);
}
