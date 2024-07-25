import prisma from '../../lib/prisma';

export const getTipCommentCount = async (tipId: string) => {
    try {
        return await prisma.comment.count({
            where: { tipId },
        });
    } catch (error) {
        console.error('Error fetching comment count:', error);
        throw new Error('Unable to fetch comment count');
    }
};

export const createTipComment = async (userId: string, tipId: string, content: string) => {
    try {
        return await prisma.comment.create({
            data: {
                userId,
                tipId,
                content,
            },
        });
    } catch (error) {
        console.error('Error creating comment:', error);
        throw new Error('Unable to create comment');
    }
};

export const deleteTipComment = async (userId: string, commentId: string) => {
    try {
        return await prisma.comment.deleteMany({
            where: {
                id: commentId,
                userId: userId
            }
        });
    } catch (error) {
        console.error('Error deleting comment:', error);
        throw new Error('Unable to delete comment');
    }
};
