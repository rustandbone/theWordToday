import Link from 'next/link';
import styles from '@/app/page.module.css';
import { FaQuestionCircle } from 'react-icons/fa';

export default function Home() {
  return (
    <main className={styles.mainTitle}>
      <section className={styles.section}>
        <h1>당일말씀</h1>
        <p>
          하루를 살아가기 위한,
          <br />
          오늘의 말씀.
        </p>
        <Link href="/word">✅</Link>
        <button type="button" className={styles.info}>
          <FaQuestionCircle className={styles.infoIcon} />
        </button>
      </section>
    </main>
  );
}
