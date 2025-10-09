
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface DecryptedTextProps {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  scrambleChars?: string;
  revealDelay?: number; // Initial delay before the entire animation starts
  charScrambleDuration?: number; // Duration each character actively scrambles
  revealInterval?: number; // Staggered delay for each character to start scrambling
  animationMode?: 'character' | 'word'; // New prop
}

const defaultScrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*&%$#@!?.';

export function DecryptedText({
  text,
  as: Component = 'span',
  className,
  scrambleChars = defaultScrambleChars,
  revealDelay = 100, 
  charScrambleDuration = 100, 
  revealInterval = 50, 
  animationMode = 'character', // Default to character-by-character
}: DecryptedTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  
  const animationFrameIds = useRef<Record<number, number>>({});
  const charRevealTimeouts = useRef<NodeJS.Timeout[]>([]);
  const initialDelayTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (initialDelayTimeout.current) clearTimeout(initialDelayTimeout.current);
      charRevealTimeouts.current.forEach(clearTimeout);
      Object.values(animationFrameIds.current).forEach(cancelAnimationFrame);
    };
  }, []);
  
  useEffect(() => {
    if (!text) {
      setDisplayedText('');
      return;
    }

    setDisplayedText(isMounted ? '\u00A0'.repeat(text.length) : text);

    if (!isMounted) {
      return;
    }

    if (initialDelayTimeout.current) clearTimeout(initialDelayTimeout.current);
    charRevealTimeouts.current.forEach(clearTimeout);
    charRevealTimeouts.current = [];
    Object.values(animationFrameIds.current).forEach(cancelAnimationFrame);
    animationFrameIds.current = {};

    initialDelayTimeout.current = setTimeout(() => {
      if (animationMode === 'word') {
        let charPosInWord = 0;
        let isFirstCharOfCurrentWordSegment = true;

        for (let i = 0; i < text.length; i++) {
          const originalChar = text[i];
          const globalIdx = i;

          if (originalChar === ' ') {
            charPosInWord = 0; // Spaces will use delay=0 relative to word start
            isFirstCharOfCurrentWordSegment = true;
          } else {
            if (isFirstCharOfCurrentWordSegment) {
              charPosInWord = 0;
              isFirstCharOfCurrentWordSegment = false;
            }
          }

          const charTimeoutDelay = charPosInWord * revealInterval;

          const charTimeoutId = setTimeout(() => {
            let startTime = performance.now();
            const scrambleAnimation = () => {
              const elapsedTime = performance.now() - startTime;
              if (elapsedTime >= charScrambleDuration) {
                setDisplayedText(prev => {
                  const chars = prev.split('');
                  if (chars.length > globalIdx) chars[globalIdx] = originalChar;
                  return chars.join('');
                });
                delete animationFrameIds.current[globalIdx];
                return;
              }
              
              const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
              setDisplayedText(prev => {
                const chars = prev.split('');
                if (chars.length > globalIdx) chars[globalIdx] = randomChar;
                return chars.join('');
              });
              animationFrameIds.current[globalIdx] = requestAnimationFrame(scrambleAnimation);
            };
            animationFrameIds.current[globalIdx] = requestAnimationFrame(scrambleAnimation);
          }, charTimeoutDelay);
          charRevealTimeouts.current.push(charTimeoutId);

          if (originalChar !== ' ') {
            charPosInWord++;
          }
        }
      } else { // 'character' mode (original logic)
        for (let i = 0; i < text.length; i++) {
          const originalChar = text[i];
          const charTimeoutDelay = i * revealInterval;
          const charTimeoutId = setTimeout(() => {
            let startTime = performance.now();
            
            const scrambleAnimation = () => {
              const elapsedTime = performance.now() - startTime;
              if (elapsedTime >= charScrambleDuration) {
                setDisplayedText(prev => {
                  const chars = prev.split('');
                  if (chars.length > i) chars[i] = originalChar;
                  return chars.join('');
                });
                delete animationFrameIds.current[i];
                return;
              }
              
              const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
              setDisplayedText(prev => {
                const chars = prev.split('');
                if (chars.length > i) chars[i] = randomChar;
                return chars.join('');
              });
              animationFrameIds.current[i] = requestAnimationFrame(scrambleAnimation);
            };
            animationFrameIds.current[i] = requestAnimationFrame(scrambleAnimation);
          }, charTimeoutDelay);
          charRevealTimeouts.current.push(charTimeoutId);
        }
      }
    }, revealDelay);

    return () => {
      if (initialDelayTimeout.current) clearTimeout(initialDelayTimeout.current);
      charRevealTimeouts.current.forEach(clearTimeout);
      Object.values(animationFrameIds.current).forEach(cancelAnimationFrame);
    };

  }, [text, isMounted, scrambleChars, charScrambleDuration, revealInterval, revealDelay, animationMode]);

  return (
    <Component className={cn(className)}>
      {displayedText.split('').map((char, index) => (
        <span key={index}>{char === ' ' && displayedText[index-1] === '\u00A0' && displayedText[index+1] === '\u00A0' ? '\u00A0' : char}</span>
      ))}
    </Component>
  );
}
