
"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React, { useState, useEffect, useRef } from 'react';
import { PolaroidModal } from './polaroid-modal';
import type { GalleryMedia } from '@/constants';
import { useIsMobile } from '@/hooks/use-mobile'; // Import the hook

interface GalleryItemProps extends GalleryMedia {
  className?: string;
  allowModal?: boolean;
}

export function GalleryItem({
  id,
  src,
  alt,
  aiHint,
  className,
  type,
  allowModal = false,
}: GalleryItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile(); // Use the hook to check for mobile

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const currentItemRef = itemRef.current;
    if (currentItemRef) {
      observer.observe(currentItemRef);
    }

    return () => {
      if (currentItemRef) {
        observer.unobserve(currentItemRef);
      }
    };
  }, []);

  const handleItemClick = () => {
    // Only open the modal if allowed and if on a mobile device
    if (allowModal && isMobile) {
      setIsModalOpen(true);
    }
  };
  
  const canOpenModal = allowModal && isMobile;

  const itemContent = (
    <div
      ref={itemRef}
      className={cn(
        "glow-wrapper",
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
        "transition-all duration-700 ease-out",
        canOpenModal ? "cursor-pointer" : "",
        className
      )}
      onClick={handleItemClick}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && canOpenModal) {
          handleItemClick();
        }
      }}
      role={canOpenModal ? "button" : undefined}
      tabIndex={canOpenModal ? 0 : -1}
      aria-label={canOpenModal ? `View image '${alt}' in a pop-up` : alt}
    >
      <Card
        className={cn(
          "overflow-hidden shadow-lg hover:shadow-xl group rounded-xl border-border/60"
        )}
      >
        <CardContent className="p-0">
          <div className="aspect-square relative bg-muted">
            {type === 'video' ? (
              <video
                src={src}
                controls
                className="w-full h-full object-cover"
                aria-label={alt}
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <>
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={aiHint}
                />
                 {/* On non-mobile, show text overlay on hover */}
                {!isMobile && (
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <p className="text-white text-lg font-semibold p-4 text-center">{alt}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <>
      {itemContent}
      {/* The modal is rendered via a portal, so it doesn't matter where it is in the DOM tree */}
      <PolaroidModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        src={src}
        alt={alt}
        type={type}
      />
    </>
  );
}
