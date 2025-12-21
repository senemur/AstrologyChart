using AstrologyChart.Application.DTOs;

namespace AstrologyChart.Application.Interfaces;

public interface IAstrologyCalculator
{
    ChartCalculationResult Calculate(DateTime utcDate, double latitude, double longitude);
}
