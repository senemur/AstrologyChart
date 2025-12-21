using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AstrologyChart.Domain.Entities;

public class Chart
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid UserId { get; set; }
    
    [ForeignKey("UserId")]
    public User User { get; set; } = null!;

    [Required]
    [MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    public DateTime BirthDate { get; set; } // UTC
    
    public double Latitude { get; set; }
    public double Longitude { get; set; }

    // Storing calculated planet positions as JSON for simplicity
    public string PlanetPositionsJson { get; set; } = "[]"; 
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
