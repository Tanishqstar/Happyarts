
"use client"; // Required for useState, useEffect, onClick handlers

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from '@/hooks/use-window-size';
import { HeroSection } from '@/components/hero-section';
import { ServiceCard } from '@/components/service-card';
import { GalleryItem } from '@/components/gallery-item';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Gift } from 'lucide-react';
import { SERVICES, GALLERY_ITEMS, WHATSAPP_LINK } from '@/constants';
import type { GalleryMedia } from '@/constants';
import { InfiniteScroller } from '@/components/infinite-scroller';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ValentinesSection } from '@/components/valentines-section';

export default function HomePage() {
  // Easter egg state
  const [serviceCardClickCount, setServiceCardClickCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const confettiColors = [
    '#FFC107', // Amber
    '#FF5722', // Deep Orange
    '#E91E63', // Pink
    '#4CAF50', // Green
    '#2196F3', // Blue
    '#9C27B0', // Purple
  ];

  const handleServiceCardClick = () => {
    setServiceCardClickCount(prevClickCount => {
      const newClickCount = prevClickCount + 1;
      if (newClickCount === 5) {
        setShowConfetti(true);
        
        setTimeout(() => {
          setShowConfetti(false);
        }, 6000); // Confetti duration (6 seconds)
        return 0; // Reset count
      }
      return newClickCount; // Increment count
    });
  };

  // Select items for the top scroller row: Gifting & Workshops
  const giftingItems = GALLERY_ITEMS.filter(item => item.category?.includes('gifting')).slice(0, 3);
  const workshopItems = GALLERY_ITEMS.filter(item => item.category?.includes('workshops')).slice(0, 3);
  const topRowSourceItems = [...giftingItems, ...workshopItems];

  // Select items for the bottom scroller row: DIY Stations & Art Classes
  const diyStationItems = GALLERY_ITEMS.filter(item => item.category?.includes('diy-stations')).slice(0, 3);
  const artClassItems = GALLERY_ITEMS.filter(item => item.category?.includes('art-classes')).slice(0, 3);
  const bottomRowSourceItems = [...diyStationItems, ...artClassItems];

  // Helper to ensure unique keys for items in scrollers
  const prepareScrollerItems = (sourceItems: GalleryMedia[], prefix: string) => {
    return sourceItems.map((item, index) => ({ 
      ...item, 
      id: `${item.id}-${prefix}-scroller-${index}` 
    }));
  };
  
  const topRowItems = prepareScrollerItems(topRowSourceItems, 'top');
  const bottomRowItems = prepareScrollerItems(bottomRowSourceItems, 'bottom');

  return (
    <>
      {showConfetti && width && height && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={900}
          gravity={0.15}
          initialVelocityX={7}
          initialVelocityY={25}
          colors={confettiColors}
          style={{ zIndex: 10000, position: 'fixed' }} // Ensure confetti is on top and fixed
        />
      )}
      <HeroSection />

      <ValentinesSection />

      <SectionWrapper 
        id="services" 
        title="Our Creative Services" 
        subtitle="What We Offer"
        disableSubtitleDecryption
        applyTitleShimmer={false}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.slug}
              icon={service.icon}
              title={service.title}
              description={service.shortDescription}
              link={`/${service.slug}`}
              onImageClick={handleServiceCardClick} // Pass the click handler
            />
          ))}
        </div>
      </SectionWrapper>
      
      <SectionWrapper 
        title="Glimpse Into Our Gallery" 
        subtitle="Recent Work" 
        className="bg-muted/40 py-16 md:py-20 lg:py-24"
        disableSubtitleDecryption
        applyTitleShimmer={false}
      >
        <div className="space-y-6 md:space-y-8">
          {topRowItems.length > 0 && (
            <InfiniteScroller direction="right">
              <div className="flex">
                {topRowItems.map((item) => (
                  <div key={item.id} className="w-64 sm:w-72 md:w-80 lg:w-96 px-3 flex-shrink-0">
                    <GalleryItem {...item} allowModal />
                  </div>
                ))}
              </div>
            </InfiniteScroller>
          )}

          {bottomRowItems.length > 0 && (
            <InfiniteScroller direction="left">
              <div className="flex">
                {bottomRowItems.map((item) => (
                  <div key={item.id} className="w-64 sm:w-72 md:w-80 lg:w-96 px-3 flex-shrink-0">
                    <GalleryItem {...item} allowModal />
                  </div>
                ))}
              </div>
            </InfiniteScroller>
          )}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 shadow-md transition-transform hover:scale-105">
            <Link href="/gallery">
              View Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>

      <TestimonialsSection />

      <SectionWrapper 
        title="Let's Create Together!" 
        subtitle="Get In Touch"
        disableSubtitleDecryption
        applyTitleShimmer={false}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-foreground/80 mb-8">
            Have an idea, a question, or want to book a service? We're excited to hear from you and help bring your creative visions to life!
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-transform hover:scale-105">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 h-5 w-5" /> Contact Us on WhatsApp
            </a>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
