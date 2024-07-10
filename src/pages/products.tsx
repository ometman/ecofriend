import React from 'react';
import styles from '../styles/Products.module.css';

// Add local array of products
const products = [
    { id: 1, name: 'Eco-Friendly Toothbrush', description: 'A bamboo toothbrush with biodegradable bristles.' },
    { id: 2, name: 'Reusable Shopping Bags', description: 'Set of 5 reusable shopping bags made from recycled materials.' },
    { id: 3, name: 'Solar Powered Charger', description: 'A portable solar charger for your electronic devices.' }
  ];

const Products: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1>Eco-Friendly Products</h1>
            <ul className={styles.productList}>
                {products.map(product => (
                    <li key={product.id} className={styles.productItem}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>       
        </div>
    )
}

export default Products;