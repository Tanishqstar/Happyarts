
"use client";

import React, { useState, useCallback, ReactNode, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

// Data for a single spark particle
interface SparkParticle {
  id: string;
  clickX: number;
  clickY: number;
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

    // Initial styles
    sparkElement.style.position = 'absolute'; // Relative to its ClickSpark wrapper
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

    // Animate out
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { // Double RAF for robustness in applying initial styles before transition
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
    }, duration + 50); // Add a small buffer for animation to fully finish

    return () => clearTimeout(timeoutId);
  }, [id, clickX, clickY, angle, color, initialSize, radius, duration, extraScale, onComplete]);

  return <div ref={sparkRef} aria-hidden="true" />;
};


interface ClickSparkProps {
  children: ReactNode;
  className?: string;
  sparkColor?: string;
  sparkSize?: number; // Initial length of spark line
  sparkRadius?: number; // How far sparks travel from the click center
  sparkCount?: number; // Number of spark lines that appear on each click
  duration?: number; // Animation duration in milliseconds
  extraScale?: number; // Additional multiplier for spark distance
}

export function ClickSpark({
  children,
  className,
  sparkColor = 'hsl(330, 100%, 71%)', // Primary Pink from theme
  sparkSize = 13,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  extraScale = 1.0,
}: ClickSparkProps) {
  const [activeSparkParticles, setActiveSparkParticles] = useState<SparkParticle[]>([]);

  const handleSparkParticleRemoval = useCallback((id: string) => {
    setActiveSparkParticles(prevSparks => prevSparks.filter(s => s.id !== id));
  }, []);

  const triggerSparks = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const newParticles: SparkParticle[] = [];
    for (let i = 0; i < sparkCount; i++) {
      newParticles.push({
        id: `spark-${Date.now()}-${Math.random().toString(36).substring(7)}`,
        clickX: clickX,
        clickY: clickY,
        angle: (i / sparkCount) * 360 + (Math.random() * 20 - 10), // Add some randomness to angle
        color: sparkColor,
        initialSize: sparkSize * (Math.random() * 0.5 + 0.75), // Add some randomness to size
        radius: sparkRadius,
        duration: duration + (Math.random() * (duration * 0.2) - (duration*0.1)), // Randomness to duration
        extraScale,
      });
    }
    setActiveSparkParticles(prevSparks => [...prevSparks, ...newParticles]);
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, extraScale]);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const mockMouseEvent = {
        currentTarget: e.currentTarget,
        clientX: e.currentTarget.getBoundingClientRect().left + e.currentTarget.offsetWidth / 2,
        clientY: e.currentTarget.getBoundingClientRect().top + e.currentTarget.offsetHeight / 2,
      } as unknown as React.MouseEvent<HTMLElement>;
      triggerSparks(mockMouseEvent);
        const childButton = e.currentTarget.querySelector('button, a');
        if (childButton && typeof (childButton as HTMLElement).click === 'function') {
            (childButton as HTMLElement).click();
        }
    }
  };


  return (
    <div 
      className={cn("relative inline-block cursor-pointer", className)} 
      onClick={(e) => {
        // Prevent spark from triggering on child and bubbling up
        if (e.currentTarget === e.target) {
          triggerSparks(e);
        }
      }}
      onKeyDown={handleKeyDown}
      role="button" 
      tabIndex={-1} // Not focusable, just a wrapper
      aria-pressed="false"
    >
      {children}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {activeSparkParticles.map(spark => (
          <IndividualSparkParticle
            key={spark.id}
            spark={spark}
            onComplete={handleSparkParticleRemoval}
          />
        ))}
      </div>
    </div>
  );
}
