import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export function Card({ title, description, link }) {
  return (
    <Link to={link} className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <div className={styles.cardFooter}>
        Learn More →
      </div>
    </Link>
  );
} 