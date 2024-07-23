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

export interface Tip {
    id: string;
    userId: string;
    content?: string;
    videoUrl?: string;
    createdAt: Date;
}

export interface UserTips {
    id: string;
    email: string;
    name?: string;
    tips: Tip[];
}

export interface Like {
    id: string;
    userId: string;
    tipId: string;
    createdAt: Date;
}
