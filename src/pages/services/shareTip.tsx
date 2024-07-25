import prisma from '../../lib/prisma';

// Function to share a tip
export const shareTip = async (userId: string, tipId: string, platform: string) => {
    try {
        // Validate the platform parameter
        const allowedPlatforms = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'WhatsApp', 'Email'];
        if (!allowedPlatforms.includes(platform)) {
            throw new Error('Invalid platform specified');
        }

        return await prisma.share.create({
            data: {
                userId,
                tipId,
                platform,
            },
        });
    } catch (error) {
        console.error('Error sharing tip:', error);
        throw new Error('Unable to share tip');
    }
};
