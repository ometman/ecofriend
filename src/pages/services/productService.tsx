import axios from 'axios';
import { Product } from './productData';

const API_URL = 'https://open.sustainableapi.com/products';

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get<Product[]>(API_URL);
        return response.data;
    } catch(error) {
        console.error('Error fetching products:', error);
        throw new Error ('Fetching productts failed');
    }
}