
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';
import { SERVICES, GALLERY_ITEMS } from '@/constants';
import type { GalleryMedia } from '@/constants';
import { ArrowLeft, Heart } from 'lucide-react';
import { ProximityText } from '@/components/proximity-text';
import { DecryptedText } from '@/components/decrypted-text';
import React, { useMemo, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ImageTrail from '@/components/image-trail';

const CircularGallery = dynamic(() => import('@/components/circular-gallery'), {
  ssr: false,
  loading: () => <div className="flex justify-center items-center h-[300px]"><p>Loading gallery...</p></div>
});

export default function ValentinesPage() {
  const service = SERVICES.find(s => s.slug === 'valentines');

  const [key, setKey] = useState(0);
   useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, []);

  if (!service) return <p>Service not found.</p>;

  const MAX_CIRCULAR_GALLERY_ITEMS = 10;
  const circularGalleryMedia = useMemo(() => {
    if (!service) return [];
    let media: GalleryMedia[] = GALLERY_ITEMS.filter(item =>
      item.category?.includes(service.slug) || service.galleryImageHints.some(hint => item.alt.toLowerCase().includes(hint))
    );

    if (media.length > MAX_CIRCULAR_GALLERY_ITEMS) {
      media = media.slice(0, MAX_CIRCULAR_GALLERY_ITEMS);
    }
    return media.map(item => ({
      src: item.src,
      alt: item.alt,
      type: item.type,
      id: item.id,
    }));
  }, [service]);

  const trailImages = useMemo(() => {
    return GALLERY_ITEMS.filter(item => item.category?.includes('valentines')).map(item => item.src);
  }, []);

  return (
    <>
      <SectionWrapper className="pt-8 md:pt-12 lg:pt-16 relative">
        <div className="absolute inset-0 z-0">
          <ImageTrail key={key} items={trailImages} variant={1} />
        </div>
        <div className="relative z-10">
            <div className="mb-8">
              <Button variant="outline" asChild className="text-sm">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <ProximityText
                  text={service.title}
                  as="h1"
                  className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-primary mb-4"
                />
                <DecryptedText text={service.subtitle} as="p" className="text-xl text-foreground/80 mb-6" />
                {service.longDescription.map((paragraph, index) => (
                  <p key={index} className="text-foreground/70 mb-4 leading-relaxed">{paragraph}</p>
                ))}
                <Button asChild size="lg" className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
                  <a href={`https://wa.me/919403420909?text=${service.whatsappEnquiryText}`} target="_blank" rel="noopener noreferrer">
                    <Heart className="mr-2 h-5 w-5 fill-current" /> Enquire for Valentine's
                  </a>
                </Button>
              </div>
              <div
                className="relative w-full aspect-[2/1] group pointer-events-none"
              >
                <Image
                  src={service.coverImage}
                  alt={service.title}
                  fill
                  className="object-cover rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={service.aiHint}
                  priority
                />
              </div>
            </div>
        </div>
      </SectionWrapper>

      {circularGalleryMedia.length > 0 && (
        <SectionWrapper title="Romantic Creations" subtitle="From the Heart" className="bg-muted/40">
          <div className="relative h-[60vh]">
            <CircularGallery items={circularGalleryMedia.map(item => ({ image: item.src, text: item.alt }))} textColor="hsl(var(--foreground))" />
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/gallery?category=valentines">Discover More Gifts of Love</Link>
            </Button>
          </div>
        </SectionWrapper>
      )}
    </>
  );
}
