import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '당일말씀',
  description: '오늘의 말씀과 함께 하루를',
  icons: {
    icon: '/word.ico',
  },
  openGraph: {
    title: '당일말씀',
    description: '오늘의 말씀과 함께 하루를',
    images: {
      url: '/word/철을 따라 꼴을 먹여주시니.png',
    },
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
