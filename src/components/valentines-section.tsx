
import Link from 'next/link';
import { SectionWrapper } from '@/components/section-wrapper';
import { GalleryItem } from '@/components/gallery-item';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS, VALENTINES_WHATSAPP_LINK } from '@/constants';

export function ValentinesSection() {
    const valentineItems = GALLERY_ITEMS.filter(item => item.category?.includes('valentines')).slice(0, 4);

    if (valentineItems.length === 0) {
        return null; // Don't render the section if there are no items
    }

    return (
        <SectionWrapper
            id="valentines"
            title="Valentine's Specials"
            subtitle="Gifts for Your Loved One"
            className="bg-pink-100/40 dark:bg-pink-900/20"
            disableSubtitleDecryption
            applyTitleShimmer={false}
        >
            <div className="text-center max-w-2xl mx-auto mb-10">
                <p className="text-lg text-foreground/80">
                    Surprise your special someone with a unique, handcrafted gift that speaks from the heart. Explore our limited-edition collection for Valentine's Day.
                </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {valentineItems.map((item) => (
                    <GalleryItem key={item.id} {...item} allowModal />
                ))}
            </div>

            <div className="mt-12 text-center flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
                    <Link href="/valentines">
                        Explore All Specials <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <a href={VALENTINES_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                        <Heart className="mr-2 h-5 w-5 fill-current" /> Quick Enquiry
                    </a>
                </Button>
            </div>
        </SectionWrapper>
    );
}
