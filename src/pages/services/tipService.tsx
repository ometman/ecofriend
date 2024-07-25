// services/tipService.ts
import { Tip as PrismaTip } from '@prisma/client';
import prisma from '../../lib/prisma';

// Type for creating a new tip without the 'id' field
type TipCreateInput = Omit<PrismaTip, 'id'>;

// Function to get all tips
export const getTips = async () => {
    try {
        return await prisma.tip.findMany();
    } catch (error) {
        console.error('Error fetching tips:', error);
        throw new Error('Unable to fetch tips');
    }
}

// Function to create a new tip
export const createTip = async (userId: string, content: string, videoUrl: string) => {
    try {
        return await prisma.tip.create({
            data: {
                userId,
                content,
                videoUrl,
            },
        });
    } catch (error) {
        console.error('Error creating tip:', error);
        throw new Error('Unable to create tip');
    }
};

// Function to delete a tip by its ID
export const deleteTip = async (tipId: string) => {
    try {
        return await prisma.tip.delete({
            where: {
                id: tipId,
            },
        });
    } catch (error) {
        console.error('Error deleting tip:', error);
        throw new Error('Unable to delete tip');
    }
};
