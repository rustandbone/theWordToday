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

    const rawInfo = wordInfo[index];

    // 1. 한글 자모 분리 현상 방지를 위한 유니코드 NFC 정규화
    const normalizedLink = rawInfo.link ? rawInfo.link.normalize('NFC') : '';
    const normalizedWord = rawInfo.word ? rawInfo.word.normalize('NFC') : '';

    // 2. URL 경로 내 한글 깨짐 및 특수문자 처리를 위한 URL 인코딩
    const encodedLink = encodeURI(normalizedLink);

    setWord(normalizedWord);
    setImageUrl(encodedLink);
  }, []);

  return <ImageComponent src={`/word${imageUrl}`} word={word} />;
}