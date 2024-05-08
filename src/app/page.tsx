import Link from 'next/link';
import styles from '@/app/page.module.css';

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
      </section>
    </main>
  );
}
