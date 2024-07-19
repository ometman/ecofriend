import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

async function main() {
    await prisma.product.createMany({
        data: [
            {
                id: uuidv4(),
                name: 'Eco-friendly Detergent',
                brand: 'GreenClean',
                category: 'Cleaning',
                description: 'A biodegradable detergent that is tough on stains but gentle on the environment.',
                ecoRating: 4.5,
                imageUrl: 'https://picsum.photos/200/300?random=1',
            },
            {
                id: uuidv4(),
                name: 'Reusable Shopping Bags',
                brand: 'EcoBag',
                category: 'Accessories',
                description: 'Durable and reusable shopping bags to reduce plastic waste.',
                ecoRating: 4.8,
                imageUrl: 'https://picsum.photos/200/300?random=2',
            },
            {
                id: uuidv4(),
                name: 'Organic Bamboo Toothbrush',
                brand: 'NatureBrush',
                category: 'Personal Care',
                description: 'A toothbrush made from sustainable bamboo, with biodegradable bristles.',
                ecoRating: 4.7,
                imageUrl: 'https://picsum.photos/200/300?random=3',
            },
            {
                id: uuidv4(),
                name: 'Eco-friendly Shampoo',
                brand: 'EcoBeauty',
                category: 'Personal Care',
                description: 'A natural shampoo that is free from harmful chemicals and suitable for all hair types.',
                ecoRating: 4.6,
                imageUrl: 'https://picsum.photos/200/300?random=4',
            },
            {
                id: uuidv4(),
                name: 'Reusable Water Bottle',
                brand: 'HydrateEco',
                category: 'Accessories',
                description: 'A stainless steel water bottle that keeps your drinks cold or hot for hours.',
                ecoRating: 4.9,
                imageUrl: 'https://picsum.photos/200/300?random=5',
            },
            {
                id: uuidv4(),
                name: 'Eco-friendly Dish Soap',
                brand: 'PureClean',
                category: 'Cleaning',
                description: 'A plant-based dish soap that effectively cleans dishes without harming the environment.',
                ecoRating: 4.4,
                imageUrl: 'https://picsum.photos/200/300?random=6',
            },
            {
                id: uuidv4(),
                name: 'Compostable Trash Bags',
                brand: 'BioBag',
                category: 'Cleaning',
                description: 'Trash bags made from compostable materials, reducing plastic waste.',
                ecoRating: 4.7,
                imageUrl: 'https://picsum.photos/200/300?random=7',
            },
            {
                id: uuidv4(),
                name: 'Organic Cotton Towels',
                brand: 'SoftEco',
                category: 'Personal Care',
                description: 'Towels made from 100% organic cotton, soft and gentle on the skin.',
                ecoRating: 4.8,
                imageUrl: 'https://picsum.photos/200/300?random=8',
            },
            {
                id: uuidv4(),
                name: 'Reusable Coffee Cup',
                brand: 'EcoCup',
                category: 'Accessories',
                description: 'A reusable coffee cup made from sustainable materials, perfect for your daily coffee.',
                ecoRating: 4.6,
                imageUrl: 'https://picsum.photos/200/300?random=9',
            },
            {
                id: uuidv4(),
                name: 'Bamboo Cutlery Set',
                brand: 'GreenUtensils',
                category: 'Accessories',
                description: 'A cutlery set made from bamboo, ideal for picnics and reducing plastic use.',
                ecoRating: 4.5,
                imageUrl: 'https://picsum.photos/200/300?random=10',
            },
        ],
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
