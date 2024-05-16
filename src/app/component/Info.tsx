import styles from '@/app/page.module.css';
import { FaInstagram } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export default function Info({ hideArticle }: { hideArticle: () => void }) {
  return (
    <p>
      [당일말씀]에는
      <br />
      매일 새로운 말씀이 등장합니다.
      <br />
      <br />
      하루를 온전히 살아가기 위한,
      <br />
      [당일말씀]과 함께 하세요!
      <br />
      <br />
      <span className={styles.infoWord}>
        오늘 내가 네게 명하는 이 말씀을
        <br />
        너는 마음에 새기고
        <br />
        &lt;신명기 6장 6절&gt;
      </span>
      <br />
      <br />
      <span className={styles.infoSource}>
        이미지 출처 :
        <a
          target="_blank"
          href="https://www.instagram.com/the.sole.mediocrity?utm_source=qr"
          className={styles.instaLink}
          rel="noopener noreferrer"
        >
          <FaInstagram />
          당일말씀
        </a>
      </span>
      <button
        type="button"
        className={styles.closeDetail}
        onClick={hideArticle}
      >
        <IoClose className={styles.closeIcon} />
      </button>
    </p>
  );
}
