import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchProducts } from '../services/productService';
import { Product } from '../services/productData';


const productsHandler = async (
    req: NextApiRequest, res: NextApiResponse<Product[] | { error: string }>)=> {
    try {
        const products = await fetchProducts();
        res.status(200).json(products)
    } catch(error) {
        res.status(500).json({error: 'failed to fetch products'})
    }
}

export default  productsHandler;