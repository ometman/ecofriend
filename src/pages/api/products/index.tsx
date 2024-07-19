import type { NextApiRequest, NextApiResponse } from 'next';
import { getProducts, createProduct } from '../../services/productService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const products = getProducts();
            console.log(products)
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch products' });
        }
    } else if (req.method === 'POST') {
        try {
            const { name, brand, category, description, ecoRating, imageUrl } = req.body;
            if (!name || !brand || !category || !description || !ecoRating) {
                res.status(400).json({ error: 'Missing required fields' });
                return;
            } else {
                const newProduct = await createProduct({ name, brand, category, description, ecoRating, imageUrl });
                res.status(201).json(newProduct);
            }
        } catch(error) {
            res.status(500).json({ error: 'Failed to fetch products' });
        }        
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};
