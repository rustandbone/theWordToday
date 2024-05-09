'use client';
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

  return <ImageComponent src={imageUrl} />;
}
