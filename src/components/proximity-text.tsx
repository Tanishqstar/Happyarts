
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ProximityTextProps {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  maxDistance?: number;
  effectStrength?: number; 
}

export function ProximityText({
  text,
  as: Component = 'span',
  className,
  maxDistance = 150, // Pixels
  effectStrength = 7,  // Max pixels to move up, also influences scale (increased for "thicker" effect)
}: ProximityTextProps) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Ensure this only runs on the client
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      // Initialize refs array
      charRefs.current = charRefs.current.slice(0, text.length);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [text.length]); // Re-run if text length changes to re-initialize refs

  if (text === undefined || text === null) {
    return null; 
  }
  const characters = String(text).split('');


  return (
    <Component className={cn("inline-block", className)}>
      {characters.map((char, index) => {
        let style: React.CSSProperties = {
          display: 'inline-block', // Keep characters inline
          transition: 'transform 0.15s ease-out', // Smooth transition
        };

        if (mousePosition && charRefs.current[index]) {
          const charElement = charRefs.current[index]!;
          const charRect = charElement.getBoundingClientRect();
          // Ensure charRect has dimensions. If not, might be an issue with non-visible elements or setup.
          if (charRect.width > 0 || charRect.height > 0 || char === ' ') {
            const charCenterX = charRect.left + charRect.width / 2;
            const charCenterY = charRect.top + charRect.height / 2;

            const distanceX = mousePosition.x - charCenterX;
            const distanceY = mousePosition.y - charCenterY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            if (distance < maxDistance) {
              const proximityFactor = 1 - distance / maxDistance; // 1 when close, 0 when far
              const translateY = -proximityFactor * effectStrength;
              const scale = 1 + proximityFactor * (effectStrength / 100); // e.g. 7/100 = 0.07 for 7% max scale

              style.transform = `translateY(${translateY}px) scale(${scale})`;
            } else {
              style.transform = 'translateY(0px) scale(1)';
            }
          }
        }

        // Handle spaces: non-breaking space to ensure it takes up space and has a rect
        const displayChar = char === ' ' ? '\u00A0' : char;

        return (
          <span
            key={index}
            ref={(el) => (charRefs.current[index] = el)}
            style={style}
            aria-hidden="true" // Hide from screen readers as it's decorative duplication of text
          >
            {displayChar}
          </span>
        );
      })}
    </Component>
  );
}
