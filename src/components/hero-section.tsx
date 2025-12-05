
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { ProximityText } from './proximity-text';

export function HeroSection() {
  const heroSubtitle = "Discover a world of creativity with customized gifts, engaging art workshops, live DIY event stations, and inspiring art classes.";
  return (
    <div className="relative bg-gradient-to-br from-pink-100 via-beige-50 to-yellow-100 dark:from-pink-900/30 dark:via-neutral-900/30 dark:to-yellow-900/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32 text-center">
        <div className="absolute inset-0 opacity-30"> {/* Changed from opacity-20 to opacity-30 */}
            {/* Decorative background image - could be abstract art or subtle pattern */}
            <Image
                src="https://res.cloudinary.com/dsdp8sjkh/image/upload/v1749118901/IMG-20250525-WA0124_emqfws.jpg"
                alt="Artistic background with various art supplies and textures"
                fill
                className="object-cover pointer-events-none"
                data-ai-hint="art supplies texture"
                priority
            />
        </div>
        <div className="relative z-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              <ProximityText text="Welcome to " as="span" />
              <span className="text-animated-gradient">HappyArts</span>
            </h1>
            <p
              className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 sm:text-xl md:text-2xl"
            >
              {heroSubtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
                  <Link href="/#services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
              </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg transition-transform hover:scale-105 border-primary text-primary hover:bg-primary/10">
                <Link href="/contact">
                Get in Touch
                </Link>
            </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
