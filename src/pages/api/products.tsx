import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchProducts } from '../services/productService';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const products = await fetchProducts();
        res.status(200).json(products)
    } catch(error) {
        res.status(500).json({error: 'failed to fetch products'})
    }
}

export default  handler;