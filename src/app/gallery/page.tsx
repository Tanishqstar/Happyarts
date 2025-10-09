
"use client"

import { useSearchParams, useRouter } from 'next/navigation';
import React, { Suspense, useMemo, useState, useEffect } from 'react'; // Import Suspense
import { GalleryItem } from '@/components/gallery-item';
import { SectionWrapper } from '@/components/section-wrapper';
import { GALLERY_ITEMS, SERVICES } from '@/constants';
import type { GalleryMedia } from '@/constants';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ProximityText } from '@/components/proximity-text';
import { useIsMobile } from '@/hooks/use-is-mobile';
import { cn } from '@/lib/utils';

// Define a loading component for Suspense fallback for useSearchParams
function GalleryContentLoading() {
  return (
    <SectionWrapper
      title="Our Creative Portfolio"
      subtitle="Gallery"
    >
      <div className="text-center py-20 text-foreground/70">
        <p>Loading gallery content...</p>
        {/* You might want to add a spinner or a more elaborate skeleton loader here */}
      </div>
    </SectionWrapper>
  );
}

// This component contains the original logic and uses useSearchParams
function GalleryPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isMobile = useIsMobile();

  const initialCategoryQueryParam = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategoryQueryParam);

  // Update selectedCategory if query param changes (e.g., browser back/forward)
  useEffect(() => {
    setSelectedCategory(initialCategoryQueryParam);
  }, [initialCategoryQueryParam]);

  const serviceCategories = SERVICES.map(service => ({
    value: service.slug,
    label: service.title,
  }));
  const allFilterOptions = [{ value: 'all', label: 'All Works' }, ...serviceCategories];

  const handleCategoryChange = (categoryValue: string) => {
    setSelectedCategory(categoryValue);
    router.push(`/gallery?category=${categoryValue}`, { scroll: false });
  };

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return GALLERY_ITEMS;
    }
    return GALLERY_ITEMS.filter(item => item.category?.includes(selectedCategory));
  }, [selectedCategory]);

  const currentFilterLabel = useMemo(() => {
    return allFilterOptions.find(tab => tab.value === selectedCategory)?.label || 'Filter by Category';
  }, [selectedCategory, allFilterOptions]);

  // Handle loading state for useIsMobile to prevent hydration mismatch
  // This is separate from the Suspense fallback for useSearchParams
  if (isMobile === undefined) {
    return (
      <SectionWrapper
        title="Our Creative Portfolio"
        subtitle="Gallery"
      >
        <div className="text-center py-10 text-foreground/70">Loading filters...</div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper
      title="Our Creative Portfolio"
      subtitle="Gallery"
    >
      {isMobile ? (
        <div className="mb-8 px-4 sm:px-0">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between shadow-sm border-border/80">
                {currentFilterLabel}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width]">
              {allFilterOptions.map(option => (
                <DropdownMenuItem
                  key={option.value}
                  onSelect={() => handleCategoryChange(option.value)}
                  className={cn(
                    "cursor-pointer",
                    selectedCategory === option.value ? "bg-accent text-accent-foreground" : ""
                  )}
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Tabs value={selectedCategory} onValueChange={handleCategoryChange} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="flex overflow-x-auto py-1 sm:overflow-x-visible sm:flex-wrap sm:justify-center gap-1 bg-muted rounded-md p-1 max-w-full sm:max-w-4xl">
              {allFilterOptions.map(tab => (
                 <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex-shrink-0 text-xs sm:text-sm px-3 py-1.5 whitespace-normal h-auto data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm rounded-sm"
                  >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>
      )}

      {filteredItems.length === 0 ? (
        <p className="text-center text-foreground/70 text-lg mt-8">
          No items found for "{currentFilterLabel}". More beautiful creations coming soon!
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {filteredItems.map((item: GalleryMedia) => (
            <GalleryItem key={item.id} {...item} allowModal />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}

// The default export function now wraps GalleryPageContent with Suspense
export default function GalleryPage() {
  return (
    <Suspense fallback={<GalleryContentLoading />}>
      <GalleryPageContent />
    </Suspense>
  );
}
