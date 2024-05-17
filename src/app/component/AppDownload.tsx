import styles from '@/app/page.module.css';
import { CiMenuKebab } from 'react-icons/ci';
import { IoShareOutline } from 'react-icons/io5';
import { GoDesktopDownload } from 'react-icons/go';
import { FaChrome, FaSafari } from 'react-icons/fa';

export default function AppDownload() {
  return (
    <p>
      <span className={styles.browserTitle}>Android :</span>
      <br />
      1. <FaChrome className={styles.browser} />
      Chrome에서 주소창 오른편의
      <br />
      [메뉴
      <CiMenuKebab />
      ]를 탭합니다.
      <br />
      2. [앱 설치]를 탭합니다.
      <br />
      <br />
      <span className={styles.browserTitle}>iOS :</span>
      <br />
      1. <FaChrome className={styles.browser} />
      Chrome 혹은 <FaSafari className={styles.browser} />
      Safari에서 주소창 오른편의 [공유
      <IoShareOutline />
      ]를 탭합니다.
      <br />
      2. [홈 화면에 추가]를 탭합니다.
      <br />
      <br />
      <span className={styles.browserTitle}>컴퓨터 :</span>
      <br />
      <FaChrome className={styles.browser} />
      Chrome에서 주소창 오른편의
      <br />
      [설치
      <GoDesktopDownload />
      ]를 클릭합니다.
    </p>
  );
}
