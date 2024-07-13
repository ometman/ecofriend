// pages/tips/[id].tsx
import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Tips.module.css';

interface Tip {
  id: string;
  title: string;
  description: string;
  category: string;
}

// Dummy data for tips
const tipsData: Tip[] = [
  { id: '1', title: 'Save Energy at Home', description: 'Use energy-efficient appliances...', category: 'Energy' },
  { id: '2', title: 'Reduce Water Waste', description: 'Fix leaks and install low-flow fixtures...', category: 'Water' },
  // we can add more tips here
];

const TipDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const tip = tipsData.find((tip) => tip.id === id);

  if (!tip) {
    return <div>Tip not found</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{tip.title}</h1>
      <p className={styles.description}>{tip.description}</p>
      {/* Add step-by-step guide, related tips, ratings, and comments here */}
    </div>
  );
};

export default TipDetailPage;
