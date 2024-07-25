import type { NextApiRequest, NextApiResponse } from 'next';
import { getTipLikeCount, createTipLike, deleteTipLike } from '../../../services/likeService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const { userId, content, videoUrl } = req.body;

    if (req.method === 'GET') {
        try {
            const likeCount = await getTipLikeCount(id as string);
            res.status(200).json({ likeCount });
        } catch (error) {
            res.status(500).json({ error: 'Failed to get likes' });
        }
    } else if (req.method === 'POST') {
        if (content && videoUrl) {
            try {
                const newLike = await createTipLike(userId, id as string);
                res.status(201).json(newLike);
            } catch (error) {
                res.status(500).json({ error: 'Failed to create tip' });
            }
        } else {
            res.status(500).json({ error: 'No content or video' });
        }
    } else if (req.method === 'DELETE') {
        try {
            const deleteLike = await deleteTipLike(userId, id as string);
            res.status(201).json(deleteLike);
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete like' });
        }
    } else {
            res.status(405).json({error: 'Method not allowed'})
        }
}
