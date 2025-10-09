
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DrawingWhiteboard } from '@/components/drawing-whiteboard';
import { Home, Palette } from 'lucide-react'; 

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 overflow-hidden">
      {/* Decorative background splashes - adjusted opacities */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary rounded-full filter blur-2xl opacity-25 animate-pulse"></div>
      <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-accent rounded-full filter blur-2xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-secondary rounded-blob filter blur-xl opacity-15 animate-pulse delay-500"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">
        <Palette size={64} className="text-primary mb-6 animate-bounce" />
        <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-foreground mb-4">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-3">
          Oops! Page Not Found.
        </p>
        <p className="text-md md:text-lg text-foreground/70 mb-10">
          Looks like you've ventured off the canvas. Why not create some art while you're here?
        </p>

        <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] aspect-[4/3] md:aspect-[16/9] max-h-[70vh]">
           <DrawingWhiteboard />
        </div>

        <Button asChild size="lg" className="mt-12 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
          <Link href="/">
            <Home className="mr-2 h-5 w-5" />
            Back to Homepage
          </Link>
        </Button>
      </div>
      <style jsx>{`
        .rounded-blob {
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        }
        .animate-pulse {
          animation: pulse 5s infinite ease-in-out;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}

