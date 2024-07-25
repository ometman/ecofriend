
import type { NextApiRequest, NextApiResponse } from 'next';
import { shareTip } from '../../../services/shareTip';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { userId, tipId, platform } = req.body;

    if (req.method === 'POST') {
        try {
            const newShare = await shareTip(userId, tipId, platform);
            res.status(201).json(newShare);
        } catch (error) {
            res.status(500).json({ error: 'Failed to share tip' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};



