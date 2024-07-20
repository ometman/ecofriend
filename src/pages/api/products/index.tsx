// pages/api/products/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getProducts, createProduct } from '../../services/productService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { page, limit } = req.query;
    const pageNumber = parseInt(page as string, 10) || 1;
    const limitNumber = parseInt(limit as string, 10) || 3;

    if (req.method === 'GET') {
        try {
            const { products, totalcount } = await getProducts(pageNumber, limitNumber);
            res.status(200).json({ products, totalcount });
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch products' });
        }
    } else if (req.method === 'POST') {
        try {
            const { name, brand, category, description, ecoRating, imageUrl } = req.body;
            if (!name || !brand || !category || !description || !ecoRating) {
                res.status(400).json({ error: 'Missing required fields' });
                return;
            }
            const newProduct = await createProduct({ name, brand, category, description, ecoRating, imageUrl });
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create product' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};
