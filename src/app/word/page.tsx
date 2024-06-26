'use client';
import ImageComponent from '@/app/component/ImageComponent.client';
import { wordInfo } from '@/app/data';
import { useEffect, useState } from 'react';

export default function Word() {
  const [imageUrl, setImageUrl] = useState('');
  const [word, setWord] = useState('');

  useEffect(() => {
    function seededRandom(seed: number) {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    }

    const currentDate = new Date();
    const seed =
      currentDate.getFullYear() * 10000 +
      (currentDate.getMonth() + 1) * 100 +
      currentDate.getDate();
    const random = seededRandom(seed);
    const index = Math.floor(random * wordInfo.length);

    const { link, word } = wordInfo[index];

    setWord(word);
    setImageUrl(link);
  }, []);

  return <ImageComponent src={`/word${imageUrl}`} word={word} />;
}
