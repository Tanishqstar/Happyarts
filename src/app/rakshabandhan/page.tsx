"use client";

import { SectionWrapper } from '@/components/section-wrapper';

import { GalleryItem } from '@/components/gallery-item';
import { GALLERY_ITEMS, RAKSHABANDHAN_WHATSAPP_LINK } from '@/constants';
import { Button } from '@/components/ui/button';
import { MessageSquare, Sparkles, Gift } from 'lucide-react';
import FlowerPetalFall from '@/components/flower-petal-fall';
import CircularGallery from '@/components/circular-gallery';
import Link from 'next/link';

export default function RakshabandhanPage() {
  const rakhiItems = GALLERY_ITEMS.filter(item => item.category?.includes('rakshabandhan'));
  const carouselItems = rakhiItems.filter(item => item.type === 'image');

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 via-white to-background dark:from-amber-950/20 dark:via-background dark:to-background relative">
      <FlowerPetalFall />
      
      {/* Hero / Main Section */}
      <SectionWrapper
        title={<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 font-extrabold flex items-center justify-center gap-3 text-5xl sm:text-6xl md:text-7xl drop-shadow-sm"><Sparkles className="text-amber-500 w-10 h-10 md:w-14 md:h-14" />Rakshabandhan Specials<Sparkles className="text-orange-600 w-10 h-10 md:w-14 md:h-14" /></span>}
        subtitle="Celebrate the Bond of Love"
        className="pt-20 pb-16 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xl text-foreground/80 mb-10 leading-relaxed font-medium">
            Discover our exclusive collection of handcrafted Rakhis and thoughtful gift hampers. Celebrate the special bond between brothers and sisters with a unique touch from HappyArts.
          </p>

          <div className="mt-8 text-center flex flex-col sm:flex-row justify-center items-center gap-6">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/25 transition-all hover:scale-105 rounded-full px-8 h-12 text-lg">
                <a href={RAKSHABANDHAN_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-6 w-6" /> Enquire Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/30 shadow-sm transition-all hover:scale-105 rounded-full px-8 h-12 text-lg">
                <Link href="#collection">
                  <Gift className="mr-2 h-6 w-6" /> View Collection
                </Link>
              </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Grid Section */}
      <SectionWrapper title="All Rakhi Designs" subtitle="Browse The Full Catalog" className="relative z-10 pt-16">
        <div className="max-w-6xl mx-auto">
          {rakhiItems.length > 0 ? (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 lg:gap-8 space-y-4 md:space-y-6 lg:space-y-8">
              {rakhiItems.map((item) => (
                <div key={`${item.id}-grid`} className="break-inside-avoid group relative overflow-hidden rounded-xl border border-amber-200/50 dark:border-amber-800/30 bg-white/50 dark:bg-black/20 p-2 shadow-sm transition-all hover:shadow-md hover:border-amber-400/50 mb-4 md:mb-6 lg:mb-8">
                   <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/20 to-transparent dark:from-amber-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <GalleryItem {...item} allowModal useTrueAspectRatio={true} />
                </div>
              ))}
            </div>
          ) : (
             <p className="text-center text-foreground/70 text-lg mt-8 bg-white/60 dark:bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-amber-200/50 dark:border-amber-800/30">
              Our Rakshabandhan collection is being prepared with love. Please check back soon!
            </p>
          )}
        </div>
      </SectionWrapper>

      {/* Interactive 3D Carousel Section */}
      {carouselItems.length > 0 && (
        <section className="w-full h-[500px] md:h-[600px] lg:h-[700px] relative z-10 my-12" id="collection">
          <div className="absolute inset-0 bg-amber-100/30 dark:bg-amber-900/10 skew-y-2 transform origin-left z-0"></div>
          <div className="absolute top-8 left-0 right-0 text-center z-20 pointer-events-none">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-700/80 dark:text-amber-400/80 mb-2">Interactive Gallery</h3>
            <p className="text-sm text-foreground/60 uppercase tracking-widest">Drag to explore</p>
          </div>
          <div className="relative w-full h-full z-10 cursor-grab active:cursor-grabbing">
            <CircularGallery items={carouselItems} bend={2} textColor="#d97706" borderRadius={0.05} />
          </div>
        </section>
      )}

    </div>
  );
}