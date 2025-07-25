
"use client";

import React, { useState, useCallback, useEffect, useRef } from 'react';

// Data for a single spark particle
interface SparkParticle {
  id: string;
  clickX: number; // Viewport X
  clickY: number; // Viewport Y
  angle: number;
  color: string;
  initialSize: number;
  radius: number;
  duration: number;
  extraScale: number;
}

interface IndividualSparkParticleProps {
  spark: SparkParticle;
  onComplete: (id: string) => void;
}

const IndividualSparkParticle: React.FC<IndividualSparkParticleProps> = ({ spark, onComplete }) => {
  const { id, clickX, clickY, angle, color, initialSize, radius, duration, extraScale } = spark;
  const sparkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sparkElement = sparkRef.current;
    if (!sparkElement) return;

    const finalRadius = radius * extraScale;

    // Use fixed positioning for viewport relativity
    sparkElement.style.position = 'fixed'; 
    sparkElement.style.pointerEvents = 'none';
    sparkElement.style.left = `${clickX}px`;
    sparkElement.style.top = `${clickY}px`;
    sparkElement.style.width = `${initialSize}px`;
    sparkElement.style.height = `2px`; // Sparks as lines
    sparkElement.style.backgroundColor = color;
    sparkElement.style.borderRadius = '1px';
    sparkElement.style.transformOrigin = '0% 50%'; // Rotate from the "start" of the spark line
    sparkElement.style.transform = `translate(0, -1px) rotate(${angle}deg) scaleX(0.1)`; // Start small, -1px to center 2px height
    sparkElement.style.opacity = '1';
    sparkElement.style.zIndex = '9999'; // Ensure sparks are on top

    // Animate out
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { // Double RAF for robustness
        if (sparkElement) {
          sparkElement.style.transition = `transform ${duration}ms cubic-bezier(0.1, 0.7, 0.3, 1), opacity ${duration * 0.8}ms ${duration * 0.2}ms ease-out`;
          // Fly out and stretch to full length, then fade
          sparkElement.style.transform = `translate(0, -1px) rotate(${angle}deg) scaleX(1) translateX(${finalRadius}px)`;
          sparkElement.style.opacity = '0';
        }
      });
    });

    const timeoutId = setTimeout(() => {
      onComplete(id);
    }, duration + 50); // Add a small buffer

    return () => clearTimeout(timeoutId);
  }, [id, clickX, clickY, angle, color, initialSize, radius, duration, extraScale, onComplete]);

  return <div ref={sparkRef} aria-hidden="true" />;
};


interface GlobalClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  extraScale?: number;
}

export function GlobalClickSpark({
  sparkColor = 'hsl(330, 100%, 71%)', // Primary Pink
  sparkSize = 13,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  extraScale = 1.0,
}: GlobalClickSparkProps) {
  const [activeSparkParticles, setActiveSparkParticles] = useState<SparkParticle[]>([]);

  const handleSparkParticleRemoval = useCallback((id: string) => {
    setActiveSparkParticles(prevSparks => prevSparks.filter(s => s.id !== id));
  }, []);

  const triggerGlobalSparks = useCallback((e: MouseEvent) => {
    const clickX = e.clientX;
    const clickY = e.clientY;

    const newParticles: SparkParticle[] = [];
    for (let i = 0; i < sparkCount; i++) {
      newParticles.push({
        id: `global-spark-${Date.now()}-${Math.random().toString(36).substring(7)}`,
        clickX: clickX,
        clickY: clickY,
        angle: (i / sparkCount) * 360 + (Math.random() * 20 - 10),
        color: sparkColor,
        initialSize: sparkSize * (Math.random() * 0.5 + 0.75),
        radius: sparkRadius,
        duration: duration + (Math.random() * (duration * 0.2) - (duration*0.1)),
        extraScale,
      });
    }
    setActiveSparkParticles(prevSparks => [...prevSparks, ...newParticles]);
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, extraScale]);
  
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      // Basic check to avoid triggering on complex UI elements if needed,
      // but for "everywhere" this is fine.
      // Example: if (event.target instanceof HTMLElement && event.target.closest('button, a, input')) return;
      triggerGlobalSparks(event);
    };

    // Listen on document.documentElement for broader coverage
    document.documentElement.addEventListener('click', handleGlobalClick);
    return () => {
      document.documentElement.removeEventListener('click', handleGlobalClick);
    };
  }, [triggerGlobalSparks]);
  
  return (
    <>
      {activeSparkParticles.map(spark => (
        <IndividualSparkParticle
          key={spark.id}
          spark={spark}
          onComplete={handleSparkParticleRemoval}
        />
      ))}
    </>
  );
}
