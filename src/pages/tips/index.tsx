// pages/tips/index.tsx
import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import CategoryFilter from '../../components/CategoryFilter';
import TipItem from '../../components/TipItem';
import styles from '../../styles/Tips.module.css';

interface Tip {
  id: string;
  title: string;
  description: string;
  category: string;
}

// Dummy data for tips
const tipsData: Tip[] = [
  { id: '1', title: 'Save Energy at Home', description: '1Use energy-efficient appliances...', category: 'Energy' },
  { id: '2', title: 'Reduce Water Waste', description: '2Fix leaks and install low-flow fixtures...', category: 'Water' },
  // Add more tips here
];

const TipsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTips = tipsData.filter(tip =>
    (selectedCategory === 'All' || tip.category === selectedCategory) &&
    (tip.title.toLowerCase().includes(searchQuery.toLowerCase()) || tip.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Eco-Friendly Tips</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className={styles.tipList}>
        {filteredTips.map((tip) => (
          <TipItem key={tip.id} tip={tip} />
        ))}
      </div>
    </div>
  );
};

export default TipsPage;
