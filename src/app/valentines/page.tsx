
"use client";

import { SectionWrapper } from '@/components/section-wrapper';
import { ProximityText } from '@/components/proximity-text';
import { GalleryItem } from '@/components/gallery-item';
import { GALLERY_ITEMS, VALENTINES_WHATSAPP_LINK } from '@/constants';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function ValentinesPage() {
  const valentineItems = GALLERY_ITEMS.filter(item => item.category?.includes('valentines'));

  return (
    <SectionWrapper
      title={<ProximityText text="Valentine's Day Specials" />}
      subtitle="Gifts from the Heart"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-lg text-foreground/80 mb-10">
          Celebrate love with our exclusive collection of handcrafted gifts. From personalized keepsakes to romantic hampers, find the perfect way to say "I love you" with a unique touch from HappyArts.
        </p>
        
        {valentineItems.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {valentineItems.map((item) => (
              <GalleryItem key={item.id} {...item} allowModal />
            ))}
          </div>
        ) : (
          <p className="text-center text-foreground/70 text-lg mt-8">
            Our Valentine's collection is being prepared with love. Please check back soon!
          </p>
        )}

        <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
              <a href={VALENTINES_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Heart className="mr-2 h-5 w-5 fill-current" /> Enquire About Specials
              </a>
            </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
