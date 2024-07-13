// components/SearchBar.tsx
import React from 'react';
import styles from '../styles/Tips.module.css';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      className={styles.searchBar}
      type="text"
      placeholder="Search tips..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;
