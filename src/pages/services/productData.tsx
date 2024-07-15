import { v4 as uuidv4 } from "uuid";

export interface Product {
    id: string;
    name: string;
    brand: string;
    category: string;
    description: string;
    ecoRating: number;
    imageUrl?: string; // Optional property for product images
}

export const mockProducts: Product[] = [
    {
        id: uuidv4(),
        name: 'Eco-Friendly Laundry Detergent',
        brand: 'EcoBrand',
        category: 'Laundry',
        description: 'A biodegradable detergent made from natural ingredients.',
        ecoRating: 5,
        imageUrl: 'https://example.com/images/laundry-detergent.jpg'
    },
    {
        id: uuidv4(),
        name: 'Reusable Bamboo Paper Towels',
        brand: 'GreenEarth',
        category: 'Kitchen',
        description: 'Sustainable and reusable paper towels made from bamboo.',
        ecoRating: 4.5,
        imageUrl: 'https://example.com/images/bamboo-towels.jpg'
    },
    {
        id: uuidv4(),
        name: 'Natural All-Purpose Cleaner',
        brand: 'NatureClean',
        category: 'Cleaning',
        description: 'Non-toxic cleaner for all surfaces.',
        ecoRating: 4,
        imageUrl: 'https://example.com/images/all-purpose-cleaner.jpg'
    }
];