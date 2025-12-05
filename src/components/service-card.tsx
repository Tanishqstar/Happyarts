
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  onImageClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function ServiceCard({ icon: imageUrl, title, description, link, onImageClick }: ServiceCardProps) {
  return (
    <article className="glow-wrapper h-full">
      <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden rounded-xl border-border/60">
        <CardHeader className="items-center text-center p-3 md:p-6 bg-muted/30">
          <div
            className={cn(
              "mb-2 md:mb-4 inline-block p-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center",
              onImageClick ? "cursor-pointer" : "" 
            )}
            onClick={onImageClick} 
            role={onImageClick ? "button" : undefined}
            tabIndex={onImageClick ? 0 : undefined}
            onKeyDown={onImageClick ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onImageClick(e as unknown as React.MouseEvent<HTMLDivElement>);
              }
            } : undefined}
            aria-label={onImageClick ? `Activate ${title} easter egg feature` : undefined}
          >
            <Image
              src={imageUrl}
              alt={`${title} service icon`}
              width={64}
              height={64}
              className="object-contain pointer-events-none"
              data-ai-hint={title.toLowerCase().split(' ').slice(0,2).join(' ')}
            />
          </div>
          <CardTitle className="text-lg md:text-2xl font-semibold text-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow p-3 md:p-6 text-center">
          <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{description}</p>
        </CardContent>
        <CardFooter className="p-3 md:p-6 pt-0 justify-center">
          <Button asChild variant="link" className="text-primary hover:text-primary/80 font-medium group text-sm md:text-base">
            <Link href={link}>
              Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </article>
  );
}
