import React, { useEffect, useState } from 'react';
import { Product } from './services/productData'
import styles from '../styles/Products.module.css';

const Products: React.FC = () => {
    const [products, setProducts]  = useState<Product[]>([])
    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                setProducts(data);
            } catch(error) {
              console.error('Error fetching products', error);
            }
        }
        getProducts();
    }, []);

    return (
        <div className={styles.container}>
            <h1>Eco-Friendly Products</h1>
            <ul className={styles.productList}>
                {products.map(product => (
                    <li key={product.id} className={styles.productItem}>
                        <h2><strong>Name: </strong>{product.name}</h2>
                        <p><strong>Brand: </strong>{product.brand}</p>
                        <p><strong>Category: </strong>{product.category}</p>
                        <p><strong>Description: </strong>{product.description}</p>
                        <p><strong>ecoRating: </strong>{product.ecoRating}</p>
                        <p>{product.imageUrl && (
                            <img src={product.imageUrl} alt={product.name} className="styles.productImage" />
                        )}
                        </p>
                    </li>
                ))}
            </ul>       
        </div>
    )
}

export default Products;