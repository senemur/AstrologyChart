namespace AstrologyChart.Application.DTOs;

public class PlanetPosition
{
    public string PlanetName { get; set; } = string.Empty;
    public double Longitude { get; set; }
    public double Latitude { get; set; }
    public double Speed { get; set; }
    public string House { get; set; } = string.Empty;
    public string Sign { get; set; } = string.Empty;
}
