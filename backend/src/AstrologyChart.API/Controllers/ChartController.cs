using AstrologyChart.Application.DTOs;
using AstrologyChart.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace AstrologyChart.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ChartController : ControllerBase
{
    private readonly IAstrologyCalculator _calculator;

    public ChartController(IAstrologyCalculator calculator)
    {
        _calculator = calculator;
    }

    [HttpPost("calculate")]
    public ActionResult<List<PlanetPosition>> CalculateChart([FromBody] ChartRequest request)
    {
        var positions = _calculator.CalculatePlanets(request.Date.ToUniversalTime(), request.Latitude, request.Longitude);
        return Ok(positions);
    }
}

public class ChartRequest
{
    public DateTime Date { get; set; }
    public double Latitude { get; set; }
    public double Longitude { get; set; }
}
