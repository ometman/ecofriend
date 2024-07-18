import React, { useEffect, useState } from 'react';
import { Product } from './services/productData';
import styles from '../styles/Products.module.css';
import Link from 'next/link';

const Products: React.FC = () => {
    const [products, setProducts]  = useState<Product[]>([])
    const [loading, setLoading ] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                if (error instanceof Error ) {
                    setError(error.message) 
                } else {
                    setError('An unknown error occured')
                }
            } finally {
                setLoading(false)
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div> ...loading </div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!products) {
        return <div>No product found</div>;
    }
   
    return (
        <div className={styles.container}>
            <h1>Eco-Friendly Products</h1>
            <ul className={styles.productList}>
                {products.map(product => (
                    <Link href={`/products/${product.id}`}>
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
                    </Link>
                ))}
            </ul>       
        </div>
    )
}

export default Products;