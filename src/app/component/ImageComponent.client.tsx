'use client';
import Image from 'next/image';
import styles from './image.module.css';
import toast from 'react-hot-toast';
import { usePalette } from 'color-thief-react';
import { FaArrowLeft, FaDownload, FaShare } from 'react-icons/fa';
import { FiType } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { WORD_TITLE, WORD_URL } from '@/app/constants';
import WordType from './WordType';

export default function ImageComponent({
  src,
  word,
}: {
  src: string;
  word: string;
}) {
  const [type, setType] = useState(false);
  const { data: colors } = usePalette(src, 2, 'hex');
  const router = useRouter();
  const articleRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (articleRef.current) {
        articleRef.current.classList.add(styles.fadeOut);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const imgAlt = src.split('.')[0].replace('/word/', '');

  const goBack = () => {
    router.back();
  };

  const isIOS = () => {
    return (
      /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent) &&
      navigator.maxTouchPoints > 0
    );
  };

  const downloadImage = () => {
    if (isIOS()) {
      toast.success('말씀을 꾸욱 누르면 다운로드 가능합니다.', {
        id: 'download',
        icon: '👇',
      });
    } else {
      const imageLink = document.createElement('a');
      const imageUrl = src;
      imageLink.href = imageUrl;
      imageLink.download = imgAlt;
      document.body.appendChild(imageLink);
      imageLink.click();
      document.body.removeChild(imageLink);
    }
  };

  const sharePage = () => {
    if (navigator.share) {
      navigator
        .share({
          title: WORD_TITLE,
          url: WORD_URL,
        })
        .then(() => console.log('공유 성공'))
        .catch((error) => console.log('공유 실패', error));
    } else {
      navigator.clipboard
        .writeText(WORD_URL)
        .then(() => {
          toast.success('링크가 클립보드에 복사되었습니다.', {
            id: 'copy',
          });
        })
        .catch((error) => {
          console.error('클립보드 복사 실패:', error);
        });
    }
  };

  const hideType = () => {
    setType(false);
  };

  if (colors) {
    return (
      <main
        className={styles.main}
        style={{
          background: `radial-gradient(circle, ${colors[0]}, ${colors[1]})`,
        }}
      >
        <Image
          src={src}
          alt={word}
          fill
          style={{ objectFit: 'contain' }}
          priority={true}
        />

        <article className={styles.icons} ref={articleRef}>
          <button type="button" onClick={goBack}>
            <FaArrowLeft className={styles.icon} />
          </button>
          <button type="button" onClick={() => setType(!type)}>
            <FiType className={styles.icon} style={{ strokeWidth: 4 }} />
          </button>
          <button type="button" onClick={downloadImage}>
            <FaDownload className={styles.icon} />
          </button>
          <button type="button" onClick={sharePage}>
            <FaShare className={styles.icon} />
          </button>
        </article>

        {type && <WordType hideType={hideType} word={word} />}
      </main>
    );
  }
}
