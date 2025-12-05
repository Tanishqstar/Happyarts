
"use client";

import { SectionWrapper } from '@/components/section-wrapper';
import { ProximityText } from '@/components/proximity-text';
import { GalleryItem } from '@/components/gallery-item';
import { GALLERY_ITEMS } from '@/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DiwaliPage() {
  const diwaliItems = GALLERY_ITEMS.filter(item => item.category?.includes('diwali'));

  return (
    <SectionWrapper
      title={<ProximityText text="Happy Diwali!" />}
      subtitle="Festival of Lights"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-lg text-foreground/80 mb-10">
          Explore our special collection for the festival of lights. Handcrafted decorations, gifts, and more to make your Diwali celebrations brighter.
        </p>
        
        {diwaliItems.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {diwaliItems.map((item) => (
              <GalleryItem key={item.id} {...item} allowModal />
            ))}
          </div>
        ) : (
          <p className="text-center text-foreground/70 text-lg mt-8">
            Our Diwali collection is coming soon! Stay tuned for beautiful festive creations.
          </p>
        )}

        <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/gallery?category=diwali">Explore More</Link>
            </Button>
          </div>
      </div>
    </SectionWrapper>
  );
}

    