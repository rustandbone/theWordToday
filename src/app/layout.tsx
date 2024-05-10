import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { WORD_URL, WORD_TITLE, WORD_DESCRIPTION } from '@/app/constants';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(WORD_URL),
  title: WORD_TITLE,
  description: WORD_DESCRIPTION,
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: WORD_TITLE,
    description: WORD_DESCRIPTION,
    url: WORD_URL,
    type: 'website',
    images: [
      {
        url: `${WORD_URL}opengraph-image.png`,
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
      <body className={inter.className}>
        <Toaster
          toastOptions={{
            style: {
              fontFamily: 'Gowun Dodum',
              fontSize: '1rem',
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
