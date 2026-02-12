
import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { GlobalClickSpark } from '@/components/ui/global-click-spark'; // Import GlobalClickSpark
import { ChunkErrorHandler } from '@/components/chunk-error-handler';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'HappyArts - Creative Gifting & Workshops',
  description: 'Explore customized gifting, art workshops, live DIY stations, and art classes by HappyArts.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          poppins.variable,
          inter.variable
        )}
        style={{ overscrollBehaviorX: "auto" }}
      >
        <ChunkErrorHandler />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <GlobalClickSpark />
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
