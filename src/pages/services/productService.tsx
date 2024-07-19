// import axios from 'axios}
import { PrismaClient, Product as PrismaProduct } from '@prisma/client';
// import { v4 as uuidv4 } from "uuid";
import { Product, mockProducts } from './productData';
// import products from '../api/products';

// read all products (with external data api if available)
// const API_URL = 'https://open.sustainableapi.com/products';

const prisma = new PrismaClient();
type ProductCreateInput = Omit<PrismaProduct, 'id'>;
// read all products (with mock data)
// export const getProducts = (): Product[] => mockProducts;

export const getProducts = async () => {
    try {
        return await prisma.product.findMany();
    } catch(error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

// read specific product
export const getProductById = async (id: string) => {
    try {
        return await prisma.product.findUnique({
            where: { id },
        });
    }catch(error) {
        console.error('Error fetching product:', error);
        throw error;
    } 
}

export const createProduct = async (product: ProductCreateInput) => {
    try {
        return await prisma.product.create({
            data: product,
        });
    } catch (error) {
        console.error("Error creating product:", error)
        throw error;
    }
}

export const updateProduct = async (id: string, updatedProduct: Partial<Product>) => {
    try {
        return await prisma.product.update({
            where: { id },
            data: updatedProduct,
        });
    } catch(error) {
        console.error("Error updating product");
        throw error;
    }
};

export const deleteProduct = async (id: string) => {
    try {
         await prisma.product.delete({
            where: { id },
        });
        return true;
    } catch(error) {
        console.error("Error updating product");
        return false;
    }
}