'use client';
import Link from 'next/link';
import Info from '@/app/component/Info';
import styles from '@/app/page.module.css';
import { useState } from 'react';
import { WORD_TITLE } from '@/app/constants';
import { FaQuestionCircle } from 'react-icons/fa';

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
        <Link href="/word" className={styles.linkWord}>
          ✅
        </Link>
        {isVisible && (
          <article className={styles.infoDetail}>
            <Info hideArticle={hideArticle} />
          </article>
        )}
        <button type="button" className={styles.info} onClick={showArticle}>
          <FaQuestionCircle className={styles.infoIcon} />
        </button>
      </section>
    </main>
  );
}
