
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Simple spring physics parameters
const DAMPING = 0.6;
const STIFFNESS = 0.1;

export function RakhiCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });

      // Check if the element under the cursor is a link or button
      const target = event.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      if (cursorRef.current) {
        const currentPos = {
          x: parseFloat(cursorRef.current.style.left || '-100'),
          y: parseFloat(cursorRef.current.style.top || '-100'),
        };

        const dx = position.x - currentPos.x;
        const dy = position.y - currentPos.y;

        const forceX = dx * STIFFNESS;
        const forceY = dy * STIFFNESS;

        const newVelocityX = (velocity.x + forceX) * DAMPING;
        const newVelocityY = (velocity.y + forceY) * DAMPING;

        const newX = currentPos.x + newVelocityX;
        const newY = currentPos.y + newVelocityY;

        cursorRef.current.style.left = `${newX}px`;
        cursorRef.current.style.top = `${newY}px`;
        
        // Tilt based on horizontal velocity for a 'dangling' effect
        const tilt = newVelocityX * 1.5; // Multiplier for tilt amount
        cursorRef.current.style.transform = `translate(-50%, -50%) rotate(${tilt}deg) scale(${isPointer ? 0.8 : 1})`;

        setVelocity({ x: newVelocityX, y: newVelocityY });
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current as number);
  }, [position, velocity, isPointer]);

  return (
    <div
      ref={cursorRef}
      className={cn(
        "fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-200 ease-out",
      )}
      style={{ left: '-100px', top: '-100px' }} // Start off-screen
    >
      <Image
        src="https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753202890/Happy_Raksha_Bandhan_Animation_jbo2mf.gif"
        alt="Rakhi cursor"
        width={40}
        height={40}
        className="transition-transform duration-200"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
        }}
        unoptimized
      />
    </div>
  );
}
