// services/productService.ts
import { Product as PrismaProduct } from '@prisma/client';
import prisma from '../../lib/prisma';

type ProductCreateInput = Omit<PrismaProduct, 'id'>;

export const getProducts = async (page: number, limit: number) => {
    const offset = (page - 1) * limit;
    try {
        const [products, totalcount] = await prisma.$transaction([
            prisma.product.findMany({
                skip: offset,
                take: limit,
            }),
            prisma.product.count(),
        ]);
        return { products, totalcount };
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Unable to fetch products');
    }
}

export const getProductById = async (id: string) => {
    try {
        return await prisma.product.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw new Error('Unable to fetch product');
    }
}

export const createProduct = async (product: ProductCreateInput) => {
    try {
        return await prisma.product.create({
            data: product,
        });
    } catch (error) {
        console.error('Error creating product:', error);
        throw new Error('Unable to create product');
    }
}

export const updateProduct = async (id: string, updatedProduct: ProductCreateInput) => {
    try {
        return await prisma.product.update({
            where: { id },
            data: updatedProduct,
        });
    } catch (error) {
        console.error('Error updating product:', error);
        throw new Error('Unable to update product');
    }
}

export const deleteProduct = async (id: string) => {
    try {
        await prisma.product.delete({
            where: { id },
        });
        return true;
    } catch (error) {
        console.error('Error deleting product:', error);
        return false;
    }
}
