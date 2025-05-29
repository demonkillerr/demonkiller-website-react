import React from 'react';
import styles from './styles.module.css';

export function Grid({ children }) {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
} 