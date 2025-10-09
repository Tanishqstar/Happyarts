
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';
import { SERVICES, GALLERY_ITEMS } from '@/constants';
import type { GalleryMedia } from '@/constants';
import { MessageSquare, ArrowLeft } from 'lucide-react';
import { ProximityText } from '@/components/proximity-text';
import { DecryptedText } from '@/components/decrypted-text';
import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';

const CircularGallery = dynamic(() => import('@/components/circular-gallery').then(mod => mod.CircularGallery), {
  ssr: false,
  loading: () => <div className="flex justify-center items-center h-[300px]"><p>Loading gallery...</p></div>
});

export default function EventsPage() {
  const service = SERVICES.find(s => s.slug === 'events');

  if (!service) return <p>Service not found.</p>;

  const MAX_CIRCULAR_GALLERY_ITEMS = 20;
  const circularGalleryMedia = useMemo(() => {
    if (!service) return [];
    let media: GalleryMedia[] = GALLERY_ITEMS.filter(item =>
      item.category?.includes(service.slug) || service.galleryImageHints.some(hint => item.alt.toLowerCase().includes(hint))
    );

    if (media.length > MAX_CIRCULAR_GALLERY_ITEMS) {
      media = media.slice(0, MAX_CIRCULAR_GALLERY_ITEMS);
    }
    return media;
  }, [service]);

  return (
    <>
      <SectionWrapper className="pt-8 md:pt-12 lg:pt-16">
        <div className="mb-8">
          <Button variant="outline" asChild className="text-sm">
            <Link href="/#services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
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
            <Button asChild size="lg" className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
              <a href={`https://wa.me/919403420909?text=${service.whatsappEnquiryText}`} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" /> Book an Event
              </a>
            </Button>
          </div>
          <div
            className="relative w-full aspect-[2/1] group"
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
      </SectionWrapper>

      {circularGalleryMedia.length > 0 && (
        <SectionWrapper title="Event Highlights" subtitle="Memorable Moments" className="bg-muted/40">
          <div className="relative h-[60vh]">
            <div className="sticky top-[20vh] w-full flex items-center justify-center">
              <CircularGallery items={circularGalleryMedia} />
            </div>
          </div>
           <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/gallery?category=events">See More Events</Link>
            </Button>
          </div>
        </SectionWrapper>
      )}
    </>
  );
}