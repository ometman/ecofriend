import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
    {
        name: 'Eco-friendly Detergent',
        brand: 'EcoBrand',
        category: 'Household Cleaners',
        description: 'A biodegradable detergent that is safe for the environment.',
        ecoRating: 4.5,
        imageUrl: 'https://source.unsplash.com/random/400x400?detergent'
    },
    {
        name: 'Reusable Water Bottle',
        brand: 'GreenLife',
        category: 'Personal Care',
        description: 'A stainless steel water bottle that can be reused indefinitely.',
        ecoRating: 5.0,
        imageUrl: 'https://source.unsplash.com/random/400x400?water-bottle'
    },
    {
        name: 'Bamboo Toothbrush',
        brand: 'EcoTeeth',
        category: 'Personal Care',
        description: 'A toothbrush made from bamboo, which is a renewable resource.',
        ecoRating: 4.7,
        imageUrl: 'https://source.unsplash.com/random/400x400?toothbrush'
    },
    {
        name: 'Compostable Trash Bags',
        brand: 'GreenBag',
        category: 'Household Cleaners',
        description: 'Trash bags that break down naturally in a compost environment.',
        ecoRating: 4.3,
        imageUrl: 'https://source.unsplash.com/random/400x400?trash-bag'
    },
    {
        name: 'Organic Cotton Towels',
        brand: 'EcoHome',
        category: 'Home Essentials',
        description: 'Towels made from organic cotton, free from harmful chemicals.',
        ecoRating: 4.9,
        imageUrl: 'https://source.unsplash.com/random/400x400?towel'
    },
];

async function main() {
    for (const product of products) {
        await prisma.product.create({
            data: product,
        });
    }
    console.log('Dummy data inserted');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
