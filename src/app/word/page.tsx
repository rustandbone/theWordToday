'use client';
import Head from 'next/head';
import ImageComponent from '@/app/component/ImageComponent.client';
import { wordImages } from '@/app/data';
import { useEffect, useState } from 'react';

export default function Word() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const startOfYear = new Date(currentDate.getFullYear(), 0, 0);
    const diff = Number(currentDate) - Number(startOfYear);
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    const index = dayOfYear % wordImages.length;

    setImageUrl(wordImages[index]);
  }, []);

  return (
    <>
      <Head>
        <title>당일말씀</title>
        <meta name="description" content="오늘의 말씀과 함께 하루를" />
        <meta property="og:title" content="당일말씀" />
        <meta property="og:description" content="오늘의 말씀과 함께 하루를" />
        <meta
          property="og:image"
          content={`https://the-word-today.vercel.app/word${imageUrl}`}
        />
      </Head>

      <ImageComponent src={`/word${imageUrl}`} />
    </>
  );
}
