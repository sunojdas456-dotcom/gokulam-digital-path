import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'circle' | 'petal' | 'sparkle';
}

interface AmbientParticlesProps {
  count?: number;
  className?: string;
  variant?: 'light' | 'golden' | 'spiritual';
}

export function AmbientParticles({ 
  count = 20, 
  className,
  variant = 'spiritual' 
}: AmbientParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const types: Particle['type'][] = ['circle', 'petal', 'sparkle'];
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 4,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
        type: types[Math.floor(Math.random() * types.length)],
      });
    }
    
    setParticles(newParticles);
  }, [count]);

  const getParticleColor = () => {
    switch (variant) {
      case 'light':
        return 'bg-white/30';
      case 'golden':
        return 'bg-saffron/40';
      case 'spiritual':
      default:
        return 'bg-primary-foreground/20';
    }
  };

  const renderParticle = (particle: Particle) => {
    const baseStyle = {
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: particle.size,
      height: particle.size,
      animationDuration: `${particle.duration}s`,
      animationDelay: `${particle.delay}s`,
    };

    switch (particle.type) {
      case 'petal':
        return (
          <div
            key={particle.id}
            className={cn(
              "absolute rounded-full opacity-60 animate-float-particle",
              getParticleColor(),
              "blur-[0.5px]"
            )}
            style={{
              ...baseStyle,
              borderRadius: '60% 40% 50% 50%',
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        );
      case 'sparkle':
        return (
          <div
            key={particle.id}
            className="absolute opacity-70 animate-sparkle"
            style={baseStyle}
          >
            <svg viewBox="0 0 24 24" className="w-full h-full text-saffron/50" fill="currentColor">
              <path d="M12 0L13.5 9L22.5 10.5L13.5 12L12 21L10.5 12L1.5 10.5L10.5 9L12 0Z" />
            </svg>
          </div>
        );
      case 'circle':
      default:
        return (
          <div
            key={particle.id}
            className={cn(
              "absolute rounded-full opacity-40 animate-float-particle blur-[1px]",
              getParticleColor()
            )}
            style={baseStyle}
          />
        );
    }
  };

  return (
    <div 
      ref={containerRef}
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      {particles.map(renderParticle)}
    </div>
  );
}
