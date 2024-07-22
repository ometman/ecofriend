import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

async function main() {
    // Clear existing data
    await prisma.like.deleteMany();
    await prisma.comment.deleteMany();
    await prisma.share.deleteMany();
    await prisma.tip.deleteMany();
    await prisma.post.deleteMany();
    await prisma.user.deleteMany();
    await prisma.product.deleteMany();

    // Create dummy users
    await prisma.user.createMany({
        data: [
            { id: uuidv4(), email: 'user1@example.com', name: 'User One' },
            { id: uuidv4(), email: 'user2@example.com', name: 'User Two' },
            { id: uuidv4(), email: 'user3@example.com', name: 'User Three' },
        ],
    });

    // Fetch the created users to get their IDs
    const allUsers = await prisma.user.findMany();

    // Create products
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

    // Create tips with real video URLs
    await prisma.tip.createMany({
        data: [
            {
                id: uuidv4(),
                userId: allUsers[0].id,
                content: 'Use this detergent to keep your clothes clean without harming the environment.',
                videoUrl: 'https://www.pexels.com/video/cleaning-the-floor-2497224/',
            },
            {
                id: uuidv4(),
                userId: allUsers[1].id,
                content: 'Reusable bags are great for reducing plastic waste.',
                videoUrl: 'https://www.pexels.com/video/close-up-footage-of-a-shopping-bag-2196909/',
            },
            {
                id: uuidv4(),
                userId: allUsers[2].id,
                content: 'Bamboo toothbrushes are an eco-friendly alternative to plastic ones.',
                videoUrl: 'https://www.pexels.com/video/bamboo-brushes-3800489/',
            },
            {
                id: uuidv4(),
                userId: allUsers[0].id,
                content: 'Eco-friendly shampoo is good for your hair and the planet.',
                videoUrl: 'https://www.pexels.com/video/healthy-hair-care-3596688/',
            },
            {
                id: uuidv4(),
                userId: allUsers[1].id,
                content: 'Reusable water bottles help reduce single-use plastic waste.',
                videoUrl: 'https://www.pexels.com/video/metal-water-bottle-2955586/',
            },
            {
                id: uuidv4(),
                userId: allUsers[2].id,
                content: 'Use plant-based dish soap for a clean and green kitchen.',
                videoUrl: 'https://www.pexels.com/video/washing-dishes-2760750/',
            },
            {
                id: uuidv4(),
                userId: allUsers[0].id,
                content: 'Compostable trash bags are a great alternative to plastic ones.',
                videoUrl: 'https://www.pexels.com/video/close-up-of-a-bag-2338218/',
            },
            {
                id: uuidv4(),
                userId: allUsers[1].id,
                content: 'Organic cotton towels are soft, durable, and eco-friendly.',
                videoUrl: 'https://www.pexels.com/video/close-up-of-towel-3226897/',
            },
            {
                id: uuidv4(),
                userId: allUsers[2].id,
                content: 'Reusable coffee cups are perfect for your daily coffee routine.',
                videoUrl: 'https://www.pexels.com/video/coffee-cup-on-a-table-3278076/',
            },
            {
                id: uuidv4(),
                userId: allUsers[0].id,
                content: 'Bamboo cutlery sets are great for picnics and reducing plastic use.',
                videoUrl: 'https://www.pexels.com/video/bamboo-cutlery-3521664/',
            },
        ],
    });

    // Create likes
    const tips = await prisma.tip.findMany();
    await prisma.like.createMany({
        data: [
            { id: uuidv4(), userId: allUsers[0].id, tipId: tips[0].id },
            { id: uuidv4(), userId: allUsers[1].id, tipId: tips[1].id },
            { id: uuidv4(), userId: allUsers[2].id, tipId: tips[2].id },
        ],
    });

    // Create comments
    await prisma.comment.createMany({
        data: [
            { id: uuidv4(), userId: allUsers[0].id, tipId: tips[0].id, content: 'Great tip!' },
            { id: uuidv4(), userId: allUsers[1].id, tipId: tips[1].id, content: 'Very useful.' },
            { id: uuidv4(), userId: allUsers[2].id, tipId: tips[2].id, content: 'Thanks for sharing!' },
        ],
    });

    // Create shares
    await prisma.share.createMany({
        data: [
            { id: uuidv4(), userId: allUsers[0].id, tipId: tips[0].id },
            { id: uuidv4(), userId: allUsers[1].id, tipId: tips[1].id },
            { id: uuidv4(), userId: allUsers[2].id, tipId: tips[2].id },
        ],
    });

    // Add dummy posts
    await prisma.post.createMany({
        data: [
            { id: uuidv4(), title: 'Post 1', content: 'Content of post 1', authorId: allUsers[0].id },
            { id: uuidv4(), title: 'Post 2', content: 'Content of post 2', authorId: allUsers[1].id },
            { id: uuidv4(), title: 'Post 3', content: 'Content of post 3', authorId: allUsers[2].id },
        ],
    });

    console.log('Data seeded successfully!');
}

main()
    .catch((error) => {
        console.error('Error seeding data:', error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
