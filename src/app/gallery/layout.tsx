import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | HappyArts',
  description: 'Browse the portfolio of HappyArts, showcasing customized gifts, workshop creations, and more.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
