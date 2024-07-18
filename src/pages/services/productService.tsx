// import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import { Product, mockProducts } from './productData';


// read all products (with external data)
// const API_URL = 'https://open.sustainableapi.com/products';

// export const getProducts = async (): Promise<Product[]> => {
//     try {
//         const response = await axios.get<Product[]>(API_URL);
//         return response.data;
//     } catch(error) {
//         console.error('Error fetching products:', error);
//         throw new Error ('Fetching productts failed');
//     }
// }

// read all products (with mock data)
export const getProducts = (): Product[] => mockProducts;

// read specific product
export const getProductById = (id: string): Product | undefined => mockProducts.find(product => product.id === id);


export const createProduct = (product: Omit<Product, 'id'>): Product => {
    const newProduct = { ...product, id: uuidv4() };
    mockProducts.push(newProduct);
    return newProduct;
}

export const updateProduct = (id: string, updatedProduct: Partial<Product>): Product | undefined => {
    const productIndex = mockProducts.findIndex(product => product.id === id);
    if (productIndex !== -1) {
        mockProducts[productIndex] = { ...mockProducts[productIndex], ...updatedProduct };
        return mockProducts[productIndex];
    }
    return undefined;
};

export const deleteProduct = (id: string): boolean => {
    const productIndex = mockProducts.findIndex(product => product.id === id);
    if (productIndex !== -1) {
        mockProducts.splice(productIndex, 1);
        return true;
    } 
    return false;
}