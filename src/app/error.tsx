
"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32 text-center min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-destructive mb-4">Oops! Something went wrong.</h1>
      <p className="text-xl text-foreground/80 mb-8">
        We encountered an unexpected issue. Please try again, or if the problem persists, contact support.
      </p>
      <pre className="mb-8 p-4 bg-muted rounded-md text-left text-sm overflow-auto max-w-xl">
        {error.message}
        {error.digest && <><br />Digest: {error.digest}</>}
      </pre>
      <div className="flex gap-4">
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          size="lg"
          variant="destructive"
        >
          Try Again
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/">Go to Homepage</Link>
        </Button>
      </div>
    </div>
  );
}
