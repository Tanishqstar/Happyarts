
"use client";

import { SectionWrapper } from '@/components/section-wrapper';
import { ProximityText } from '@/components/proximity-text';
import { GalleryItem } from '@/components/gallery-item';
import { GALLERY_ITEMS, RAKSHABANDHAN_WHATSAPP_LINK } from '@/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { RakhiCursor } from '@/components/rakhi-cursor';

export default function RakshabandhanPage() {
  const rakhiItems = GALLERY_ITEMS.filter(item => item.category?.includes('rakshabandhan'));

  return (
    <>
      <RakhiCursor />
      <SectionWrapper
        title={<ProximityText text="Rakshabandhan Specials" />}
        subtitle="Celebrate the Bond of Love"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg text-foreground/80 mb-10">
            Discover our exclusive collection of handcrafted Rakhis and thoughtful gift hampers. Celebrate the special bond between brothers and sisters with a unique touch from HappyArts.
          </p>
          
          {rakhiItems.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {rakhiItems.map((item) => (
                <GalleryItem key={item.id} {...item} allowModal />
              ))}
            </div>
          ) : (
            <p className="text-center text-foreground/70 text-lg mt-8">
              Our Rakshabandhan collection is being prepared with love. Please check back soon!
            </p>
          )}

          <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-transform hover:scale-105">
                <a href={RAKSHABANDHAN_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-5 w-5" /> Enquire Now
                </a>
              </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

    