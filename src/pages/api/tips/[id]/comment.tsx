import type { NextApiRequest, NextApiResponse } from 'next';
import { 
    getTipCommentCount,
    createTipComment,
    deleteTipComment 
} from '../../../services/commentService'; 

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const { userId, content } = req.body;

    if (req.method === 'GET') {
        try {
            const commentCount = await getTipCommentCount(id as string);
            res.status(200).json({ commentCount });
        } catch (error) {
            res.status(500).json({ error: 'Failed to get comment count' });
        }
    } else if (req.method === 'POST') {
        try {
            const newComment = await createTipComment(userId, id as string, content);
            res.status(201).json(newComment);
        } catch (error) {
            res.status(500).json({ error: 'Failed to comment on tip' });
        }
    } else if (req.method === 'DELETE') {
        try {
            const deletedComment = await deleteTipComment(userId, id as string);
            res.status(200).json(deletedComment);
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete comment' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};

