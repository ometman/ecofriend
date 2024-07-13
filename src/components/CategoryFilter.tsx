// components/CategoryFilter.tsx
import React from 'react';
import styles from '../styles/Tips.module.css';

const categories = ['All', 'Energy', 'Water', 'Waste', 'Transportation', 'Products'];

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className={styles.categoryContainer}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.categoryButton} ${selectedCategory === category ? styles.selectedCategory : ''}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
