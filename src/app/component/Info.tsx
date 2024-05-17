'use client';
import styles from '@/app/page.module.css';
import Introduce from './Introduce';
import AppDownload from './AppDownload';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

export default function Info({ hideArticle }: { hideArticle: () => void }) {
  const [currentView, setCurrentView] = useState('info');

  return (
    <>
      <div className={styles.tabContainer}>
        <button
          onClick={() => setCurrentView('info')}
          className={currentView === 'info' ? styles.activeTab : ''}
        >
          당일말씀은?
        </button>
        <button
          onClick={() => setCurrentView('appInfo')}
          className={currentView === 'appInfo' ? styles.activeTab : ''}
        >
          앱 설치
        </button>
      </div>

      {currentView === 'info' && <Introduce />}
      {currentView === 'appInfo' && <AppDownload />}

      <button
        type="button"
        className={styles.closeDetail}
        onClick={hideArticle}
      >
        <IoClose className={styles.closeIcon} />
      </button>
    </>
  );
}
