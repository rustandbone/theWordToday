'use client';
import { useState, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaRegCopy } from 'react-icons/fa';
import styles from './type.module.css';
import toast from 'react-hot-toast';

export default function WordType({
  hideType,
  word,
}: {
  hideType: () => void;
  word: string;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [typing, setTyping] = useState('');
  const [typingWord, quote] = word.split('|');

  const handleTypingChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setTyping(value);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }

    if (typingWord === value) {
      toast.success('아멘', {
        id: 'success',
        icon: '🙏',
        duration: 4000,
        style: {
          fontWeight: 'bold',
          marginTop: 'calc(50vh - 43px)',
        },
      });
    }
  };

  const copyWord = () => {
    const copyWordForm = [typingWord, quote].join('\n[') + ']';

    navigator.clipboard
      .writeText(copyWordForm)
      .then(() => {
        toast.success('말씀이 클립보드에 복사되었습니다.', {
          id: 'copyWord',
        });
      })
      .catch((error) => {
        console.error('클립보드 복사 실패:', error);
      });
  };

  return (
    <article className={styles.typing}>
      <div className={styles.typingQuote}>
        [{quote}]
        <span>
          <button type="button" className={styles.copyBtn} onClick={copyWord}>
            <FaRegCopy className={styles.copyIcon} />
          </button>
        </span>
      </div>
      <div className={styles.typingWord}>
        {typingWord.split('').map((char, index) => {
          let charClass = '';
          if (index < typing.length) {
            charClass = char === typing[index] ? 'success' : 'fail';
          }
          return (
            <span key={index} className={charClass}>
              {char}
            </span>
          );
        })}
      </div>
      <textarea
        value={typing}
        spellCheck={false}
        ref={textareaRef}
        placeholder="[당일말씀]을 적어보세요."
        className={styles.typingArea}
        onChange={handleTypingChange}
        maxLength={typingWord.length * 2}
      />

      <button type="button" className={styles.closeDetail} onClick={hideType}>
        <IoClose className={styles.closeIcon} />
      </button>
    </article>
  );
}
