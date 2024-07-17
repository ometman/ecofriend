import type { NextApiRequest, NextApiResponse } from 'next';
import { getProducts, createProduct } from '../../services/productService';

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const products = getProducts();
        console.log(products)
        res.status(200).json(products);
    } else if (req.method === 'POST') {
        const { name, brand, category, description, ecoRating, imageUrl } = req.body;
        if (!name || !brand || !category || !description || !ecoRating) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }
        const newProduct = createProduct({ name, brand, category, description, ecoRating, imageUrl });
        res.status(201).json(newProduct);
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};
