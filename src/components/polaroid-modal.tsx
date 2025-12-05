
"use client";

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PolaroidModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  type: 'image' | 'video';
}

export function PolaroidModal({ isOpen, onClose, src, alt, type }: PolaroidModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true); // Set to true only on the client

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const modalContent = isOpen ? (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in-0"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="polaroid-caption"
    >
      <div
        className="relative bg-white p-4 pb-16 rounded-md shadow-2xl w-auto max-w-[90vw] max-h-[80vh] transform transition-all duration-300 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image/frame
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 bg-background text-foreground rounded-full p-1.5 shadow-lg hover:scale-110 transition-transform"
          aria-label="Close image view"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative w-full h-auto flex justify-center">
            {type === 'image' ? (
                <Image
                    src={src}
                    alt={alt}
                    width={500} // Provide base values, `h-auto` will maintain aspect ratio
                    height={500}
                    className="object-contain max-w-full max-h-[calc(80vh-8rem)] w-auto h-auto"
                    style={{ aspectRatio: 'auto' }} // Explicitly allow auto aspect ratio
                />
            ) : (
                <video
                    src={src}
                    controls
                    autoPlay
                    className="object-contain max-w-full max-h-[calc(80vh-8rem)] w-auto h-auto rounded"
                    aria-label={alt}
                >
                    Your browser does not support the video tag.
                </video>
            )}
        </div>

        <p
          id="polaroid-caption"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center w-full px-4 text-lg text-foreground/80 font-medium"
        >
          {alt}
        </p>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    const modalRoot = document.getElementById('modal-root');
    return modalRoot ? ReactDOM.createPortal(modalContent, modalRoot) : null;
  }

  return null;
}
