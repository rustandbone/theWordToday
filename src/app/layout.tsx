import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://the-word-today.vercel.app/'),
  title: '당일말씀',
  description: '오늘의 말씀과 함께 하루를',
  icons: {
    icon: '/word.ico',
  },
  openGraph: {
    title: '당일말씀',
    description: '오늘의 말씀과 함께 하루를',
    images: 'https://the-word-today.vercel.app/word/%EC%B2%A0%EC%9D%84%20%EB%94%B0%EB%9D%BC%20%EA%BC%B4%EC%9D%84%20%EB%A8%B9%EC%97%AC%EC%A3%BC%EC%8B%9C%EB%8B%88.png',
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
