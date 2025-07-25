
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface InfiniteScrollerProps {
  children: ReactNode;
  direction: 'left' | 'right';
  className?: string;
}

export function InfiniteScroller({
  children,
  direction,
  className,
}: InfiniteScrollerProps) {
  return (
    <div className={cn('w-full overflow-hidden group', className)}>
      <div
        className={cn(
          'flex w-max group-hover:[animation-play-state:paused]', 
          direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
        )}
      >
        {children}
        {children} {/* Duplicate children for seamless loop */}
      </div>
    </div>
  );
}
