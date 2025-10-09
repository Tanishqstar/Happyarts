
import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, Instagram } from 'lucide-react';
import { WHATSAPP_LINK, INSTAGRAM_LINK } from '@/constants';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
            <Image 
              src="https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748970461/Image_Background_Removed_1_lto5o5.png" 
              alt="HappyArts Logo" 
              width={64} 
              height={64} 
              className="object-contain h-16 w-16" 
              data-ai-hint="logo brand"
              priority
            />
            <p className="text-center text-sm leading-loose md:text-left">HappyArts</p>
          </Link>
        </div>
        <nav className="flex items-center space-x-4" aria-label="Social media">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Contact on WhatsApp"
            >
              <MessageSquare className="h-6 w-6" />
            </a>
            <a 
              href={INSTAGRAM_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="HappyArts on Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
        </nav>
        <div className="text-center md:text-right text-sm text-foreground/60">
          <p>
            © {new Date().getFullYear()} HappyArts. All rights reserved.
          </p>
          <p>
            Magic behind the screen:{" "}
            <a
              href="https://flareweb.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              FlareWeb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
