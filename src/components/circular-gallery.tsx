
"use client";

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { GalleryMedia } from '@/constants';

interface CircularGalleryProps {
  items: GalleryMedia[];
  itemSize?: number; // width and height of each item
  radius?: number; // radius of the circle
  rotationSpeed?: number; // degrees per second for auto-rotation
}

export function CircularGallery({ 
  items, 
  itemSize = 150, 
  radius = 280, // Reduced radius to bring items closer
  rotationSpeed = 5 // Degrees per second
}: CircularGalleryProps) {
  const [isClient, setIsClient] = useState(false);
  const [autoRotationAngle, setAutoRotationAngle] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const numItems = items.length;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const anglePerItem = numItems > 0 ? 360 / numItems : 0;

  useEffect(() => {
    if (!isClient || numItems === 0) return;

    let lastTime = performance.now();
    const speedFactor = rotationSpeed / 1000; // Convert degrees per second to degrees per millisecond

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      
      setAutoRotationAngle(prevAngle => (prevAngle + deltaTime * speedFactor) % 360);
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isClient, numItems, rotationSpeed]);

  const derivedCurrentIndex = useMemo(() => {
    if (numItems === 0 || anglePerItem === 0) return 0;
    return Math.round((-autoRotationAngle / anglePerItem + numItems * 1000)) % numItems; 
  }, [autoRotationAngle, numItems, anglePerItem]);


  if (numItems === 0) return null;

  if (!isClient) {
    return (
      <div className="flex items-center justify-center w-full h-[400px]" aria-label="Loading gallery...">
        <p>Loading gallery...</p>
      </div>
    );
  }

  return (
    <div 
      ref={galleryRef}
      className="relative w-full flex flex-col items-center justify-center py-8" 
      role="region" 
      aria-label="Continuously rotating circular image gallery"
    >
      <div 
        className="relative w-full h-[400px] flex items-center justify-center"
        style={{ perspective: '1000px' }}
        aria-roledescription="carousel"
      >
        <div
          className={cn("relative")}
          style={{
            width: `${itemSize}px`,
            height: `${itemSize}px`,
            transformStyle: 'preserve-3d',
            transform: `rotateY(${autoRotationAngle}deg)`, 
          }}
          aria-live="polite"
        >
          {items.map((item, index) => {
            const itemBaseAngle = index * anglePerItem;
            
            let delta = index - derivedCurrentIndex;
            if (numItems > 0) {
                if (delta > numItems / 2) {
                    delta -= numItems;
                } else if (delta < -numItems / 2) {
                    delta += numItems;
                }
            }
            const absDelta = Math.abs(delta);

            let itemOpacity = 0;
            const itemScale = 1.0; // All items have scale 1.0 - no zooming
            let itemZIndex = 0;
            let isVisuallyCurrent = false;

            if (absDelta === 0) { // Front item
              itemOpacity = 1;
              itemZIndex = numItems;
              isVisuallyCurrent = true;
            } else if (absDelta === 1) { // Immediate neighbors (left/right of front)
              itemOpacity = 0.8;  
              itemZIndex = numItems - 1;
            } else if (absDelta === 2) { // Next neighbors (further to sides)
              itemOpacity = 0.6; 
              itemZIndex = numItems - 2;
            } else { // Items further back - these are now hidden to create the "strip"
              itemOpacity = 0;
              itemZIndex = numItems - absDelta; 
            }
            
            const dynamicStyle: React.CSSProperties = {
              width: `${itemSize}px`,
              height: `${itemSize}px`,
              transformOrigin: 'center center',
              transform: `rotateY(${itemBaseAngle}deg) translateZ(${radius}px) scale(${itemScale})`,
              opacity: itemOpacity,
              zIndex: itemZIndex,
              transition: 'transform 0.45s ease-out, opacity 0.45s ease-out',
            };

            return (
              <div
                key={item.id}
                className={cn(
                  "absolute rounded-lg overflow-hidden",
                  isVisuallyCurrent ? "border-2 border-primary shadow-2xl" : "border border-primary/20 shadow-lg"
                )}
                style={dynamicStyle}
                aria-hidden={absDelta > 2} // Items beyond the 2nd neighbors are hidden
                role="group"
                aria-roledescription="slide"
                aria-label={`${item.alt} - Image ${index + 1} of ${numItems}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={itemSize}
                  height={itemSize}
                  className="object-cover w-full h-full"
                  data-ai-hint={item.aiHint}
                  priority={isVisuallyCurrent}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

