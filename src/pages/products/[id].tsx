import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Product } from '../services/serviceInterface';
import styles from '../../styles/ProductDetail.module.css'

const ProductDetail: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ product, setProduct ] = useState<Product | null>(null)
    const [ error, setError ] = useState<string | null>(null)

    useEffect(() => {
        if (!id) return;
        const fetchProduct = async() => {
            try {
                const response = await fetch(`/api/products/${id}`);
                if (!response) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data);
            } catch(error) {
                if (error instanceof Error) {
                    setError(error.message) 
                } else {
                    setError('An unknown error occured')
                }
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id])

    if (loading) return <div>...loading </div>

    if (error) return <div>Error: { error } </div>

      if (!product) return <div> Product not found </div>

    return (
        <div className={styles.container}>
        <h1>{product.name}</h1>
        <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        <p>Description: {product.description}</p>
        <p>Eco Rating: {product.ecoRating}</p>
    </div>
    )
}

export default ProductDetail;