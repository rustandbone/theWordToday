'use client';
import Image from 'next/image';
import styles from '@/app/page.module.css';
import { usePalette } from 'color-thief-react';

export default function ImageComponent({ src }: { src: string }) {
  const { data } = usePalette(src, 2, 'hex');

  if (data) {
    return (
      <main
        className={styles.main}
        style={{
          background: `radial-gradient(circle, ${data[0]}, ${data[1]})`,
        }}
      >
        <Image
          src={src}
          alt="이 생명의 말씀을 다 백성에게"
          fill
          style={{ objectFit: 'contain' }}
          priority={true}
        />
      </main>
    );
  }
}
