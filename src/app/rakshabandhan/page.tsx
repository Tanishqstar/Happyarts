
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';
import { RAKHI_WHATSAPP_LINK } from '@/constants';
import { Gift, ArrowLeft, ArrowRight } from 'lucide-react';
import { ProximityText } from '@/components/proximity-text';
import { DecryptedText } from '@/components/decrypted-text';
import React, { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from '@/hooks/use-window-size';
import { InfiniteScroller } from '@/components/infinite-scroller';
import { GalleryItem } from '@/components/gallery-item';

export default function RakshabandhanPage() {
  const [showPetals, setShowPetals] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setShowPetals(true);
    const timer = setTimeout(() => setShowPetals(false), 8000); // Animation duration
    return () => clearTimeout(timer);
  }, []);

  const petalColors = [
    "hsl(0, 80%, 60%)",        // Bright Red
    "hsl(var(--primary))",       // Vibrant Pink from theme
    "hsl(350, 90%, 55%)",      // Deep Crimson
    "hsl(var(--accent))",        // Cheerful Yellow from theme
    "hsl(25, 95%, 60%)"         // Saffron Orange
  ];

  const drawPetal = (ctx: CanvasRenderingContext2D) => {
    const petalWidth = 10;
    const petalHeight = 15;
    ctx.beginPath();
    // A fuller, more rounded petal shape
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(petalWidth / 2, petalHeight / 3, petalWidth / 2, (petalHeight * 2) / 3, 0, petalHeight);
    ctx.bezierCurveTo(-petalWidth / 2, (petalHeight * 2) / 3, -petalWidth / 2, petalHeight / 3, 0, 0);
    ctx.closePath();
    ctx.fill();
  };

  const rakhiGalleryItems = [
    { id: 'rakhi-1', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201304/WhatsApp_Image_2025-07-18_at_14.26.12_xnnfbz.jpg', alt: 'Rakhi Gift Hamper 1', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-2', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201303/WhatsApp_Image_2025-07-18_at_14.26.37_gnkpsp.jpg', alt: 'Rakhi Gift Hamper 2', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-3', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201303/WhatsApp_Image_2025-07-18_at_14.26.31_epvfss.jpg', alt: 'Rakhi Gift Hamper 3', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-4', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201302/WhatsApp_Image_2025-07-18_at_14.26.38_zprwei.jpg', alt: 'Rakhi Gift Hamper 4', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-5', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201302/WhatsApp_Image_2025-07-18_at_14.26.37_2_be3nqe.jpg', alt: 'Rakhi Gift Hamper 5', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-6', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201302/WhatsApp_Image_2025-07-18_at_14.26.37_1_o7n6to.jpg', alt: 'Rakhi Gift Hamper 6', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-7', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201300/WhatsApp_Image_2025-07-18_at_14.27.41_ukavkv.jpg', alt: 'Rakhi Gift Hamper 7', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-8', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201300/WhatsApp_Image_2025-07-18_at_14.35.30_wxqu3k.jpg', alt: 'Rakhi Gift Hamper 8', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-9', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201299/WhatsApp_Image_2025-07-18_at_14.35.33_vtxz02.jpg', alt: 'Rakhi Gift Hamper 9', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-10', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201299/WhatsApp_Image_2025-07-18_at_14.35.33_1_jzchzx.jpg', alt: 'Rakhi Gift Hamper 10', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-11', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201299/WhatsApp_Image_2025-07-18_at_14.35.32_fcdfsw.jpg', alt: 'Rakhi Gift Hamper 11', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-12', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201298/WhatsApp_Image_2025-07-18_at_14.35.32_1_njjhr4.jpg', alt: 'Rakhi Gift Hamper 12', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-13', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201298/WhatsApp_Image_2025-07-18_at_14.35.49_dwhjay.jpg', alt: 'Rakhi Gift Hamper 13', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-14', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201293/WhatsApp_Image_2025-07-18_at_14.35.52_emr8xm.jpg', alt: 'Rakhi Gift Hamper 14', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-15', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201293/WhatsApp_Image_2025-07-18_at_14.35.50_1_kmjoqo.jpg', alt: 'Rakhi Gift Hamper 15', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-16', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201292/WhatsApp_Image_2025-07-18_at_14.35.53_2_g3natu.jpg', alt: 'Rakhi Gift Hamper 16', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-17', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201291/WhatsApp_Image_2025-07-18_at_14.35.53_vsicnn.jpg', alt: 'Rakhi Gift Hamper 17', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-18', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201290/WhatsApp_Image_2025-07-18_at_14.41.03_kzsh1y.jpg', alt: 'Rakhi Gift Hamper 18', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-19', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201290/WhatsApp_Image_2025-07-18_at_14.35.52_1_jtiyxo.jpg', alt: 'Rakhi Gift Hamper 19', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-20', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201288/WhatsApp_Image_2025-07-18_at_14.35.53_1_of5nrl.jpg', alt: 'Rakhi Gift Hamper 20', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-21', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201288/WhatsApp_Image_2025-07-18_at_14.41.03_1_nvg6ot.jpg', alt: 'Rakhi Gift Hamper 21', type: 'image' as const, aiHint: 'rakhi gift' },
    { id: 'rakhi-22', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1753201288/WhatsApp_Image_2025-07-18_at_14.41.05_rhtahl.jpg', alt: 'Rakhi Gift Hamper 22', type: 'image' as const, aiHint: 'rakhi gift' }
  ];

  const topRowItems = rakhiGalleryItems.slice(0, 11);
  const bottomRowItems = rakhiGalleryItems.slice(11);

  return (
    <>
       {showPetals && width && height && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={400}
          gravity={0.08}
          initialVelocityX={{ min: -5, max: 5 }}
          initialVelocityY={{ min: 5, max: 15 }}
          colors={petalColors}
          drawShape={drawPetal}
          style={{ zIndex: 1000, position: 'fixed' }}
          tweenDuration={7000}
        />
      )}
      <SectionWrapper className="pt-8 md:pt-12 lg:pt-16">
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
            <p className="text-base font-semibold uppercase tracking-wider text-primary mb-2">Celebrate the Bond of Love</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-primary mb-4">
              <span className="block"><ProximityText text="Rakshabandhan" /></span>
              <span className="block"><ProximityText text="Specials" /></span>
            </h1>
            <DecryptedText text="Exclusive Handcrafted Gift Hampers" as="p" className="text-xl text-foreground/80 mb-6" />
            <p className="text-foreground/70 mb-4 leading-relaxed">
              This Rakshabandhan, go beyond the ordinary. Discover our exclusive collection of handcrafted gift hampers, thoughtfully curated to make your sibling feel truly special. Each hamper is a unique blend of creativity and love.
            </p>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              From personalized goodies to artistic treasures, find the perfect way to say "Happy Rakhi". Limited edition hampers available now!
            </p>
            <Button asChild size="lg" className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
              <a href={RAKHI_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Gift className="mr-2 h-5 w-5" /> Explore Hampers
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xs aspect-[3/4] group rounded-xl overflow-hidden shadow-2xl">
              <video
                src="https://res.cloudinary.com/dsdp8sjkh/video/upload/v1753201291/WhatsApp_Video_2025-07-18_at_14.41.24_akc3it.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                aria-label="Rakshabandhan special video"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper
        title="Gifting Inspirations"
        subtitle="Rakhi Hamper Collection"
        className="py-16 md:py-20 lg:py-24 bg-muted/40"
      >
        <div className="space-y-6 md:space-y-8">
            <InfiniteScroller direction="right">
              <div className="flex">
                {topRowItems.map((item) => (
                  <div key={item.id} className="w-64 sm:w-72 md:w-80 lg:w-96 px-3 flex-shrink-0">
                    <GalleryItem {...item} allowModal />
                  </div>
                ))}
              </div>
            </InfiniteScroller>

            <InfiniteScroller direction="left">
              <div className="flex">
                {bottomRowItems.map((item) => (
                  <div key={item.id} className="w-64 sm:w-72 md:w-80 lg:w-96 px-3 flex-shrink-0">
                    <GalleryItem {...item} allowModal />
                  </div>
                ))}
              </div>
            </InfiniteScroller>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 shadow-md transition-transform hover:scale-105">
            <Link href="/gallery?category=gifting">
              View More Gifting Ideas <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
