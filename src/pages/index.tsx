// src/pages/index.tsx
import React from 'react';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to EcoFriend</h1>
      <p>Your sustainable living advisor.</p>
      <nav>
        <a href="/tips">Tips</a>
        <a href="/products">Products</a>
        <a href="/carbon-footprint">Carbon Footprint</a>
        <a href="/community">Community</a>
      </nav>
    </div>
  );
}

export default Home;
