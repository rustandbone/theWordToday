import type { Metadata } from 'next';
import { Gowun_Dodum } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { WORD_URL, WORD_TITLE, WORD_DESCRIPTION } from '@/app/constants';
import './globals.css';
import Head from 'next/head';

const gowunDodum = Gowun_Dodum({ weight: '400', subsets: ['latin'] });

export const viewport = {
  themeColor: '#2f339d',
};

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
      <Head>
        <meta
          name="google-site-verification"
          content="hiRUKgiCEnHr0E_06-wvBHmsENATk9b4x0dO5psDNPo"
        />
        <meta
          name="naver-site-verification"
          content="142ba17f8726cbcbd20ef93b4ff8e355724adeb7"
        />
      </Head>
      <body className={gowunDodum.className}>
        <Toaster
          toastOptions={{
            style: {
              fontFamily: 'Gowun Dodum',
              fontSize: '0.9rem',
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
