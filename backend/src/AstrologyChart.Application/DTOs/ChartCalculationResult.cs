namespace AstrologyChart.Application.DTOs;

public class ChartCalculationResult
{
    public List<PlanetPosition> Planets { get; set; } = new();
    public List<HousePosition> Houses { get; set; } = new();
    public Axes Axes { get; set; } = new();
}

public class HousePosition
{
    public int HouseNumber { get; set; }
    public string Sign { get; set; } = string.Empty;
    public double Degree { get; set; } // 0-360 absolute longitude
}

public class Axes
{
    public double Ascendant { get; set; }
    public string AscendantSign { get; set; } = string.Empty;
    public double Mc { get; set; } // Midheaven
    public string McSign { get; set; } = string.Empty;
}
