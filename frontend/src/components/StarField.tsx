import { useEffect, useState, useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  duration: number;
  delay: number;
}

export const StarField = () => {
  const stars = useMemo(() => {
    const newStars: Star[] = [];
    for (let i = 0; i < 150; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 0.5,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }
    return newStars;
  }, []);

  const shootingStars = useMemo(() => {
    const newShootingStars: ShootingStar[] = [];
    for (let i = 0; i < 5; i++) {
      newShootingStars.push({
        id: i,
        startX: Math.random() * 80 + 10,
        startY: Math.random() * 30,
        duration: Math.random() * 1 + 0.5,
        delay: Math.random() * 10 + i * 5,
      });
    }
    return newShootingStars;
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Nebula background layers */}
      <div className="absolute inset-0 bg-gradient-radial from-cosmic/40 via-transparent to-transparent opacity-60" 
           style={{ top: '20%', left: '60%', width: '80%', height: '80%', transform: 'translate(-50%, -50%)' }} />
      <div className="absolute inset-0 bg-gradient-radial from-stardust/10 via-transparent to-transparent opacity-40" 
           style={{ top: '70%', left: '20%', width: '60%', height: '60%', transform: 'translate(-50%, -50%)' }} />
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.size > 2 ? 'hsl(45, 93%, 70%)' : 'hsl(215, 28%, 91%)',
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: star.opacity,
            boxShadow: star.size > 2 
              ? `0 0 ${star.size * 4}px hsl(45 93% 54% / 0.5)` 
              : `0 0 ${star.size * 2}px hsl(215 28% 91% / 0.3)`,
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={`shooting-${star.id}`}
          className="absolute h-0.5 bg-gradient-to-r from-stardust via-nebula to-transparent animate-shooting-star"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            width: '100px',
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            transform: 'rotate(45deg)',
          }}
        />
      ))}
      
      {/* Floating cosmic particles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cosmic/20 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-stardust/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-cosmic-light/15 blur-2xl animate-float" />
    </div>
  );
};
