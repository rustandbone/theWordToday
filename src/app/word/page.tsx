'use client';
import ImageComponent from '@/app/component/ImageComponent.client';
import { wordImages } from '@/app/data';
import Head from 'next/head';

export default function Word({ imageUrl }: { imageUrl: string }) {
  <Head>
    <title>당일말씀</title>
    <meta name="description" content="오늘의 말씀과 함께 하루를" />
    <meta property="og:title" content="당일말씀" />
    <meta property="og:description" content="오늘의 말씀과 함께 하루를" />
    <meta property="og:image" content={imageUrl} />
  </Head>;

  return <ImageComponent src={`/word${imageUrl}`} />;
}

export async function getServerSideProps() {
  const currentDate = new Date();
  const startOfYear = new Date(currentDate.getFullYear(), 0, 0);
  const diff = Number(currentDate) - Number(startOfYear);
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const index = dayOfYear % wordImages.length;
  const imageUrl = wordImages[index];

  return {
    props: {
      imageUrl: `/word${imageUrl}`, // 이미지 URL을 props로 전달
    },
  };
}
