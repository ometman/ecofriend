import type { NextApiRequest, NextApiResponse } from 'next';
import { getProductById, updateProduct, deleteProduct } from '../../services/productService'

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    if (typeof id !== 'string') {
        res.status(400).json({ error: 'Invalid product ID' });
        return;
    }

    if (req.method === 'GET') {
        const product = getProductById(id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } else if (req.method === 'PUT') {
        const { name, brand, category, description, ecoRating, imageUrl } = req.body;
        const updatedProduct = updateProduct(id, { name, brand, category, description, ecoRating, imageUrl });
        if (updatedProduct) {
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } else if (req.method === 'DELETE') {
        const success = deleteProduct(id);
        if (success) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};
