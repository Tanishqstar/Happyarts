import Link from 'next/link';
import { SectionWrapper } from '@/components/section-wrapper';
import { GalleryItem } from '@/components/gallery-item';
import { Button } from '@/components/ui/button';
import { Gift, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS, RAKSHABANDHAN_WHATSAPP_LINK } from '@/constants';
import FlowerPetalFall from '@/components/flower-petal-fall';

export function RakshabandhanSection() {
    const rakhiItems = GALLERY_ITEMS.filter(item => item.category?.includes('rakshabandhan')).slice(0, 4);

    if (rakhiItems.length === 0) {
        return null; // Don't render the section if there are no items
    }

    return (
        <section
            id="rakshabandhan"
            className="bg-amber-100/40 dark:bg-amber-900/20 py-12 md:py-16 lg:py-20 relative overflow-hidden"
        >
            <FlowerPetalFall />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="mb-8 md:mb-12 text-center">
                    <p className='text-base font-semibold uppercase tracking-wider text-primary mb-2'>Celebrate the Bond of Love</p>
                    <h2 className='text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground'>Rakshabandhan Specials</h2>
                </div>

                <div className="text-center max-w-2xl mx-auto mb-10">
                    <p className="text-lg text-foreground/80">
                        Discover our exclusive collection of handcrafted Rakhis and thoughtful gift hampers. Celebrate the special bond between brothers and sisters with a unique touch from HappyArts.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {rakhiItems.map((item) => (
                        <GalleryItem key={item.id} {...item} allowModal />
                    ))}
                </div>

                <div className="mt-12 text-center flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
                        <Link href="/rakshabandhan">
                            Explore All Specials <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                        <a href={RAKSHABANDHAN_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                            <Gift className="mr-2 h-5 w-5 fill-current" /> Quick Enquiry
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
