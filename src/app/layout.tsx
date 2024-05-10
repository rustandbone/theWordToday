import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://the-word-today.vercel.app/'),
  title: '당일말씀',
  description: '오늘의 말씀과 함께 하루를',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: '당일말씀',
    description: '오늘의 말씀과 함께 하루를',
    url: 'https://the-word-today.vercel.app/',
    type: 'website',
    images: [
      {
        url: 'https://the-word-today.vercel.app/opengraph-image.png',
        width: 800,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
