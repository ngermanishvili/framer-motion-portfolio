import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <div
      aria-hidden
      width="46"
      height="29"
    >
      <h2 className={styles.monoh1}>Nika Germanishvili</h2>

    </div>
  );
});
