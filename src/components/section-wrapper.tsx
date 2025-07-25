
import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { DecryptedText } from './decrypted-text';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  title?: ReactNode;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  disableSubtitleDecryption?: boolean;
  applyTitleShimmer?: boolean; // Added applyTitleShimmer
}

export function SectionWrapper({
  children,
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  disableSubtitleDecryption,
  applyTitleShimmer = true, // Default to true
  ...props // Rest of the props
}: SectionWrapperProps) {
  return (
    <section
      className={cn('py-12 md:py-16 lg:py-20', className)}
      {...props} // Spread only the remaining props here
    >
      <div className="container mx-auto px-4 md:px-6">
        {(title || subtitle) && (
          <div className="mb-8 md:mb-12 text-center">
            {subtitle && (
              disableSubtitleDecryption ? (
                <p className={cn('text-base font-semibold uppercase tracking-wider text-primary mb-2', subtitleClassName)}>
                  {subtitle}
                </p>
              ) : (
                <DecryptedText
                  text={subtitle}
                  as="p"
                  className={cn('text-base font-semibold uppercase tracking-wider text-primary mb-2', subtitleClassName)}
                />
              )
            )}
            {title && (
              typeof title === 'string' ? (
                <h2 className={cn(
                  'text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl',
                  applyTitleShimmer ? 'text-title-shimmer' : 'text-foreground', // Apply shimmer or default
                  titleClassName
                )}>
                  {title}
                </h2>
              ) : (
                <div className={cn(
                  'text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl',
                  applyTitleShimmer ? 'text-title-shimmer' : 'text-foreground', // Apply shimmer or default
                  titleClassName
                )}>
                  {title}
                </div>
              )
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
