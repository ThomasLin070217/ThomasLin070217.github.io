import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Thomas Lin — AI-native Product Builder',
  description: 'Thomas Lin builds products, communities and experiments with AI.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  openGraph: {
    title: 'Thomas Lin — AI-native Product Builder',
    description: 'Building products, communities and experiments with AI.',
    type: 'website',
    images: [{ url: '/og.png', width: 2048, height: 1078, alt: 'Thomas Lin — AI-native product builder, founder and student at HKU.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Lin — AI-native Product Builder',
    description: 'Building products, communities and experiments with AI.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
