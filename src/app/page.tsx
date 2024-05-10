'use client';
import Link from 'next/link';
import styles from '@/app/page.module.css';
import { FaQuestionCircle, FaInstagram } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { WORD_TITLE } from '@/app/constants';
import { useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const showArticle = () => {
    setIsVisible(!isVisible);
  };

  const hideArticle = () => {
    setIsVisible(false);
  };

  return (
    <main className={styles.mainTitle}>
      <section className={styles.section}>
        <h1>{WORD_TITLE}</h1>
        <p>
          하루를 살아가기 위한,
          <br />
          오늘의 말씀.
        </p>
        <Link href="/word">✅</Link>
        {isVisible && (
          <article className={styles.infoDetail}>
            <p>
              당일말씀에는
              <br />
              매일 새로운 말씀이 등장합니다.
              <br />
              <br />
              하루를 온전히 살아가기 위한
              <br />
              당일말씀과 함께 하세요!
              <br />
              <br />
              <span className={styles.infoWord}>
                오늘 내가 네게 명하는 이 말씀을 너는 마음에 새기고
                <br />
                &lt;신명기 6장 6절&gt;
              </span>
              <br />
              <br />
              <span className={styles.infoSource}>
                이미지 출처 : 당일말씀 인스타그램
              </span>
              <a
                target="_blank"
                href="https://www.instagram.com/the.sole.mediocrity?utm_source=qr"
                className={styles.instaLink}
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <button
                type="button"
                className={styles.closeDetail}
                onClick={hideArticle}
              >
                <IoClose className={styles.closeIcon} />
              </button>
            </p>
          </article>
        )}
        <button type="button" className={styles.info} onClick={showArticle}>
          <FaQuestionCircle className={styles.infoIcon} />
        </button>
      </section>
    </main>
  );
}
