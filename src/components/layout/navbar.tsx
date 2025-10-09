
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/constants';
import { NAV_LINKS, WHATSAPP_LINK } from '@/constants';
import React from 'react';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors ml-2">
            <Image
              src="https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748970461/Image_Background_Removed_1_lto5o5.png"
              alt="HappyArts Logo"
              width={64}
              height={64}
              className="object-contain h-16 w-16"
              data-ai-hint="logo brand"
              priority
            />
            <span
              className="font-bold text-xl tracking-tight"
            >
              HappyArts
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1 text-sm font-medium" aria-label="Main navigation">
            <ul className="flex items-center space-x-6">
              {NAV_LINKS.map((item: NavItem) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'transition-colors hover:text-primary',
                      pathname === item.href ? 'text-primary' : 'text-foreground/60'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
                <SheetTitle className="sr-only">Main Menu</SheetTitle>
                <nav className="flex flex-col space-y-5" aria-label="Mobile navigation">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-primary mb-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      src="https://res.cloudinary.com/dsdp8sjkh/image/upload/v1748970461/Image_Background_Removed_1_lto5o5.png"
                      alt="HappyArts Logo"
                      width={64}
                      height={64}
                      className="object-contain h-16 w-16"
                      data-ai-hint="logo brand"
                      priority
                    />
                    <span className="font-bold text-lg">HappyArts</span>
                  </Link>
                  <ul className="flex flex-col space-y-5">
                  {NAV_LINKS.map((item: NavItem) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            'block rounded-md p-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                            pathname === item.href
                              ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground'
                              : 'text-foreground hover:bg-muted'
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                  </ul>
                   <SheetClose asChild>
                      <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                              'block rounded-md p-3 text-base font-medium transition-colors bg-green-500 text-white hover:bg-green-600 text-center'
                          )}
                          onClick={() => setIsOpen(false)}
                      >
                          Contact on WhatsApp
                      </a>
                   </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
