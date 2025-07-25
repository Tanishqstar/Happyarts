
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
// Removed ReactConfetti and related imports
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/constants';
import { NAV_LINKS, WHATSAPP_LINK } from '@/constants';
import React from 'react'; // Removed useState, useEffect, useRef for easter egg
// Removed useWindowSize import

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  // Removed clickCount, showConfetti, audioRef states and related useEffects

  // Removed handleLogoTextClick function

  // Removed confettiColors

  return (
    <>
      {/* Removed ReactConfetti component */}
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
              // Removed onClick, style, role, tabIndex, aria-label, onKeyDown related to easter egg
            >
              HappyArts
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {NAV_LINKS.map((item: NavItem) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === item.href ? 'text-primary' : 'text-foreground/60'
                )}
              >
                {item.label}
              </Link>
            ))}
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
                <div className="flex flex-col space-y-5">
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
                  {NAV_LINKS.map((item: NavItem) => (
                    <SheetClose asChild key={item.href}>
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
                  ))}
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
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
