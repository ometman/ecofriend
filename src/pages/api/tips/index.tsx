import type { NextApiRequest, NextApiResponse } from 'next';
import { getTips, createTip, deleteTip, shareTip } from '../../services/TipService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const { userId, content, videoUrl } = req.body;
    if (req.method === 'GET') {
        try {
            const tips = await getTips();
            res.status(200).json(tips);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch tips (api)' });
        }
    } else if (req.method === 'POST') {
        try {
            const newTip = await createTip(userId, content, videoUrl)
            res.status(201).json(newTip);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create tip' });
        }
    } else if ( req.method === 'DELETE') {
        try {
            await deleteTip(id as string);
            res.status(204).end();
        } catch(error) {
            res.status(500).json({ error: 'Failed to delete tip' });
        }
    } else if ( req.method === 'PUT') {
        try {
            const newShare = await shareTip(userId, id as string)
            res.status(201).json(newShare)
        } catch(error) {
            res.status(500).json({error: 'Failed to share tip'})
        }
    } else {
        res.status(405).json({error: 'Method not allowed'})
    }
};

