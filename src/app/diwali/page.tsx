
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';
import { WHATSAPP_LINK } from '@/constants';
import { Gift, ArrowLeft, ArrowRight } from 'lucide-react';
import { ProximityText } from '@/components/proximity-text';
import { DecryptedText } from '@/components/decrypted-text';
import React, { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from '@/hooks/use-window-size';
import { InfiniteScroller } from '@/components/infinite-scroller';
import { GalleryItem } from '@/components/gallery-item';
import { LottieAnimation } from '@/components/lottie-animation';

const diwaliImages = [
    { id: 'diwali-img-1', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1759827761/WhatsApp_Image_2025-10-06_at_01.06.59_dwca1m.jpg', alt: 'Diwali Gift Hamper', type: 'image', aiHint: 'diwali hamper' },
    { id: 'diwali-img-2', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1759827744/WhatsApp_Image_2025-10-06_at_01.05.23_ngxka2.jpg', alt: 'Diwali Decoration', type: 'image', aiHint: 'diwali decor' },
    { id: 'diwali-img-3', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1759827747/WhatsApp_Image_2025-10-06_at_01.05.22_hxftsf.jpg', alt: 'Diwali Gift Box', type: 'image', aiHint: 'diwali gift' },
    { id: 'diwali-img-4', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1759827739/WhatsApp_Image_2025-10-06_at_01.07.16_fgd7et.jpg', alt: 'Handcrafted Diwali Item', type: 'image', aiHint: 'diwali craft' },
    { id: 'diwali-img-5', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1759827740/WhatsApp_Image_2025-10-06_at_01.05.24_1_nxucu3.jpg', alt: 'Diwali Present', type: 'image', aiHint: 'diwali present' },
    { id: 'diwali-img-6', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1759827739/WhatsApp_Image_2025-10-06_at_01.05.24_vzm8u9.jpg', alt: 'Festive Diwali Gift', type: 'image', aiHint: 'diwali festive' },
    { id: 'diwali-img-7', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1759827736/WhatsApp_Image_2025-10-06_at_01.06.37_fdylzv.jpg', alt: 'Diwali Hamper Box', type: 'image', aiHint: 'diwali hamper' },
    { id: 'diwali-img-8', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1759827735/WhatsApp_Image_2025-10-06_at_01.05.23_1_panx5b.jpg', alt: 'Diwali Celebration Gift', type: 'image', aiHint: 'diwali celebration' },
];

const bottomRowImages = [
    { id: 'diwali-img-9', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1759827734/WhatsApp_Image_2025-10-06_at_01.11.16_o4w4w5.jpg', alt: 'Unique Diwali Hamper', type: 'image', aiHint: 'diwali unique' },
    { id: 'diwali-img-10', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1759827733/WhatsApp_Image_2025-10-06_at_01.09.07_qwwcpz.jpg', alt: 'Artistic Diwali Gift', type: 'image', aiHint: 'diwali artistic' },
    { id: 'diwali-img-11', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1759827732/WhatsApp_Image_2025-10-06_at_01.07.42_qozxph.jpg', alt: 'Luxury Diwali Box', type: 'image', aiHint: 'diwali luxury' },
    { id: 'diwali-img-12', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1759827730/WhatsApp_Image_2025-10-06_at_01.08.01_pct24z.jpg', alt: 'Diwali Special Hamper', type: 'image', aiHint: 'diwali special' },
    { id: 'diwali-img-13', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1759827730/WhatsApp_Image_2025-10-06_at_01.10.44_iigi2n.jpg', alt: 'Diwali Sweets and Gifts', type: 'image', aiHint: 'diwali sweets' },
    { id: 'diwali-img-14', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1759827730/WhatsApp_Image_2025-10-06_at_01.09.45_jfzbco.jpg', alt: 'Corporate Diwali Gifts', type: 'image', aiHint: 'diwali corporate' },
    { id: 'diwali-img-15', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1759827730/WhatsApp_Image_2025-10-06_at_01.08.43_b6gxtp.jpg', alt: 'Family Diwali Hamper', type: 'image', aiHint: 'diwali family' },
    { id: 'diwali-img-16', src: 'https://res.cloudinary.com/dsdp8sjkh/image/upload/v1759827727/WhatsApp_Image_2025-10-06_at_01.12.40_qianse.jpg', alt: 'Modern Diwali Gift', type: 'image', aiHint: 'diwali modern' }
];

const topRowImages = diwaliImages;


export default function DiwaliPage() {
  const [showSparks, setShowSparks] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setShowSparks(true);
    const timer = setTimeout(() => setShowSparks(false), 8000); // Animation duration
    return () => clearTimeout(timer);
  }, []);

  const sparkColors = [
    "hsl(var(--accent))",      // Cheerful Yellow
    "hsl(35, 100%, 55%)",    // Gold
    "hsl(50, 100%, 60%)",    // Bright Gold
    "hsl(15, 100%, 50%)",    // Orange
  ];

  const drawSpark = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.moveTo(-5, 0);
    ctx.lineTo(5, 0);
    ctx.moveTo(0, -5);
    ctx.lineTo(0, 5);
    ctx.stroke();
  };

  return (
    <div className="relative">
      <LottieAnimation
        src="https://lottie.host/80f33de2-a44b-4c8a-85d9-89beafef27c9/Mjd0Jtec11.lottie"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 z-10"
      />
       {showSparks && width && height && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={100}
          gravity={0.1}
          colors={sparkColors}
          drawShape={drawSpark}
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
            <p className="text-base font-semibold uppercase tracking-wider text-primary mb-2">Celebrate the Festival of Lights</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-primary mb-4">
              <span className="block"><ProximityText text="Diwali" /></span>
              <span className="block"><ProximityText text="Specials" /></span>
            </h1>
            <DecryptedText text="Exclusive Handcrafted Gift Hampers" as="p" className="text-xl text-foreground/80 mb-6" />
            <p className="text-foreground/70 mb-4 leading-relaxed">
              This Diwali, brighten up the festivities with our exclusive collection of handcrafted gift hampers. Each hamper is curated with love and light to make your celebration special.
            </p>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              From personalized goodies to artistic treasures, find the perfect way to share the joy of Diwali. Limited edition hampers available now!
            </p>
            <Button asChild size="lg" className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Gift className="mr-2 h-5 w-5" /> Explore Hampers
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-[9/16] group rounded-xl overflow-hidden shadow-2xl">
              <video
                  src="https://res.cloudinary.com/dsdp8sjkh/video/upload/v1753201291/WhatsApp_Video_2025-07-18_at_14.41.24_akc3it.mp4"
                  poster="https://res.cloudinary.com/dsdp8sjkh/video/upload/v1751630653/Video-59_z5kaqs.jpg"
                  autoPlay
                  loop
                  muted
                  controls
                  className="w-full h-full object-cover"
                  playsInline
                  preload="metadata"
              >
                  Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper
        title="Gifting Inspirations"
        subtitle="Diwali Hamper Collection"
        className="py-16 md:py-20 lg:py-24 bg-muted/40"
      >
        <div className="space-y-6 md:space-y-8">
            <InfiniteScroller direction="right">
              <div className="flex">
                {topRowImages.map((item, index) => (
                  <div key={`${item.id}-top-${index}`} className="w-64 sm:w-72 md:w-80 lg:w-96 px-3 flex-shrink-0">
                    <GalleryItem {...item} allowModal />
                  </div>
                ))}
              </div>
            </InfiniteScroller>
            <InfiniteScroller direction="left">
              <div className="flex">
                {bottomRowImages.map((item, index) => (
                  <div key={`${item.id}-bottom-${index}`} className="w-64 sm:w-72 md:w-80 lg:w-96 px-3 flex-shrink-0">
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
    </div>
  );
}
