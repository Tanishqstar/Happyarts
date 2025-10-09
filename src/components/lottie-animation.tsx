
"use client";

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { cn } from '@/lib/utils';

interface LottieAnimationProps {
  src: string;
  className?: string;
}

export function LottieAnimation({ src, className }: LottieAnimationProps) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <DotLottieReact
        src={src}
        loop
        autoplay
      />
    </div>
  );
};
