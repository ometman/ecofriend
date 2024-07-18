// components/TipItem.tsx
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Tips.module.css';

interface TipItemProps {
  tip: {
    id: string;
    title: string;
    description: string;
    category: string;
  };
}

const TipItem: React.FC<TipItemProps> = ({ tip }) => {
  return (
    <Link href={`/tips/${tip.id}`}>
      <div className={styles.tipItem}>
        <h3 className={styles.tipTitle}>{tip.title}</h3>
        <p className={styles.tipDescription}>{tip.description}</p>
      </div>
    </Link>
  );
};

export default TipItem;
