// pages/products.tsx
import React, { useEffect, useState } from 'react';
import { Product } from './services/serviceInterface';  // Adjust the import path if necessary
import styles from '../styles/Products.module.css';
import Link from 'next/link';

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const itemsPerPage = 3;
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/products?page=${currentPage}&limit=${itemsPerPage}`);
                const data = await response.json();
                if (data && Array.isArray(data.products)) {
                    setProducts(data.products);
                    setTotalPages(Math.ceil(data.totalcount / itemsPerPage));
                } else {
                    setError('Unexpected response format');
                }
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [currentPage]);

    const handleNextPage = () => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    const handlePrevPage = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1));

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (loading) {
        return <div>...loading</div>;
    }

    if (!products.length) {
        return <div>No products found</div>;
    }

    return (
        <div className={styles.container}>
            <h1>Eco-Friendly Products</h1>
            <ul className={styles.productList}>
                {products.map(product => (
                    <Link key={product.id} href={`/products/${product.id}`}>
                        <li className={styles.productItem}>
                            <h2><strong>Name: </strong>{product.name}</h2>
                            <p><strong>Brand: </strong>{product.brand}</p>
                            <p><strong>Category: </strong>{product.category}</p>
                            <p><strong>Description: </strong>{product.description}</p>
                            <p><strong>ecoRating: </strong>{product.ecoRating}</p>
                            <p>
                                {product.imageUrl && (
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className={styles.productImage}
                                    />
                                )}
                            </p>
                        </li>
                    </Link>
                ))}
            </ul>
            <div className={styles.pagination}>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Prev
                </button>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Products;
