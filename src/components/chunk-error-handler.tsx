"use client";

import { useEffect } from 'react';

export function ChunkErrorHandler() {
  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      // This is a common Next.js error when a new version is deployed.
      // The user's browser has old JS files cached, and when they navigate,
      // it tries to load a chunk that no longer exists. A reload fixes it.
      if (event.message && (event.message.includes('Loading chunk') || event.message.includes('ChunkLoadError'))) {
        console.warn('A JavaScript chunk failed to load, which can happen after a new deployment. The page will now be reloaded to fetch the latest version.');
        window.location.reload();
      }
    };

    window.addEventListener('error', errorHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  return null; // This component does not render anything
}
