"use client";

import { useEffect } from 'react';

const CHUNK_ERROR_MESSAGES = [
  'Loading chunk',    // Standard Webpack/Next.js message
  'ChunkLoadError',     // Another common variant
];

export function ChunkErrorHandler() {
  useEffect(() => {
    const handleChunkError = (event: ErrorEvent | PromiseRejectionEvent) => {
      const error = 'reason' in event ? event.reason : event.error;
      
      if (!error || typeof error.message !== 'string') {
        return;
      }

      if (CHUNK_ERROR_MESSAGES.some(msg => error.message.includes(msg))) {
        console.warn('A JavaScript chunk failed to load, which can happen after a new deployment. The page will now be reloaded to fetch the latest version.');
        window.location.reload();
      }
    };

    // For synchronous errors
    window.addEventListener('error', handleChunkError);
    // For errors in promises (like dynamic imports)
    window.addEventListener('unhandledrejection', handleChunkError);

    return () => {
      window.removeEventListener('error', handleChunkError);
      window.removeEventListener('unhandledrejection', handleChunkError);
    };
  }, []);

  return null; // This component does not render anything
}
