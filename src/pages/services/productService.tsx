import axios from 'axios';
import Products from '../products';

interface Product {
    id: string;
    name: string;
    brand: string;
    category: string;
    description: string;
    ecoRating: number;
    imageUrl?: string; // Optional property for product images
}

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