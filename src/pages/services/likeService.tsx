import prisma from '../../lib/prisma';

export const getTipLikeCount = async (tipId: string) => {
    try {
        return await prisma.like.count({
            where: { tipId },
        });
    } catch (error) {
        console.error('Error fetching like count:', error);
        throw new Error('Unable to fetch like count');
    }
}

export const createTipLike = async (userId: string, tipId: string) => {
    try {
        return await prisma.like.create({
            data: { userId, tipId },
        });
    } catch (error) {
        console.error('Error creating like:', error);
        throw new Error('Unable to create like');
    }
}

export const deleteTipLike = async (userId: string, tipId: string) => {
    try {
        return await prisma.like.delete({
            where: {
                userId_tipId: {
                    userId,
                    tipId,
                },
            },
        });
    } catch (error) {
        console.error('Error deleting like:', error);
        throw new Error('Unable to delete like');
    }
}
