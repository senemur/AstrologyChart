using AstrologyChart.Application.DTOs;
using AstrologyChart.Application.Interfaces;
using AstrologyChart.Domain.Entities;
using AstrologyChart.Infrastructure.Persistence.Contexts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using System.Text.Json;

namespace AstrologyChart.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ChartController : ControllerBase
{
    private readonly IAstrologyCalculator _calculator;
    private readonly ApplicationDbContext _context;

    public ChartController(IAstrologyCalculator calculator, ApplicationDbContext context)
    {
        _calculator = calculator;
        _context = context;
    }

    [HttpPost("calculate")]
    public ActionResult<ChartCalculationResult> CalculateChart([FromBody] ChartRequest request)
    {
        // On-the-fly calculation (no JWT required)
        var result = _calculator.Calculate(request.Date.ToUniversalTime(), request.Latitude, request.Longitude);
        return Ok(result);
    }

    [Authorize]
    [HttpPost("save")]
    public async Task<IActionResult> SaveChart([FromBody] SaveChartRequest request)
    {
        var userIdString = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out var userId))
            return Unauthorized();

        // 1. Calculate result (Planets + Houses + Axes)
        var result = _calculator.Calculate(request.Date.ToUniversalTime(), request.Latitude, request.Longitude);

        // 2. Create Entity
        var chart = new Chart
        {
            UserId = userId,
            Name = request.Name,
            BirthDate = request.Date.ToUniversalTime(),
            Latitude = request.Latitude,
            Longitude = request.Longitude,
            PlanetPositionsJson = JsonSerializer.Serialize(result), // Storing full result
            CreatedAt = DateTime.UtcNow
        };

        // 3. Save to DB
        _context.Charts.Add(chart);
        await _context.SaveChangesAsync();

        return Ok(new { Message = "Chart saved successfully.", ChartId = chart.Id });
    }

    [Authorize]
    [HttpGet("my-charts")]
    public async Task<ActionResult<List<Chart>>> GetMyCharts()
    {
        var userIdString = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
                if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out var userId))
            return Unauthorized();

        var charts = await _context.Charts
            .Where(c => c.UserId == userId)
            .OrderByDescending(c => c.CreatedAt)
            .ToListAsync();

        return Ok(charts);
    }
}

public class ChartRequest
{
    public DateTime Date { get; set; }
    public double Latitude { get; set; }
    public double Longitude { get; set; }
}

public class SaveChartRequest : ChartRequest
{
    public string Name { get; set; } = string.Empty;
}
