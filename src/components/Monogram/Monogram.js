import React, { useRef, useEffect } from 'react';
import styles from './Monogram.module.css';

export const Monogram = () => {
  const monogramRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const monogramElement = monogramRef.current;
      const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
      const scrollY = window.scrollY;

      if (isMobile && scrollY === 0) {
        monogramElement.style.visibility = 'visible';
      } else {
        monogramElement.style.visibility = 'hidden';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div aria-hidden width="46" height="29" className={styles.monogram} ref={monogramRef}>
      <h2 className={styles.monoh1}>Nika Germanishvili</h2>
    </div>
  );
};




