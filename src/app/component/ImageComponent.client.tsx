'use client';
import Image from 'next/image';
import styles from './image.module.css';
import toast from 'react-hot-toast';
import { usePalette } from 'color-thief-react';
import { FaArrowLeft, FaDownload, FaShare } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { WORD_URL } from '@/app/constants';

export default function ImageComponent({ src }: { src: string }) {
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
    router.push('/');
  };

  const downloadImage = () => {
    const imageLink = document.createElement('a');
    const imageUrl = src;
    imageLink.href = imageUrl;
    imageLink.download = imgAlt;
    document.body.appendChild(imageLink);
    imageLink.click();
    document.body.removeChild(imageLink);
  };

  const sharePage = () => {
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
          alt={imgAlt}
          fill
          style={{ objectFit: 'contain' }}
          priority={true}
        />

        <article className={styles.icons} ref={articleRef}>
          <button type="button" onClick={goBack}>
            <FaArrowLeft className={styles.icon} />
          </button>
          <button type="button" onClick={downloadImage}>
            <FaDownload className={styles.icon} />
          </button>
          <button type="button" onClick={sharePage}>
            <FaShare className={styles.icon} />
          </button>
        </article>
      </main>
    );
  }
}
