import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/UserTips.module.css';

const UserTips: React.FC = () => {
    const [tips, setTips] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTips = async () => {
            try {
                const response = await fetch('/api/tips');
                const data = await response.json();
                setTips(data);
            } catch (error) {
                setError('Failed to load tips');
            } finally {
                setLoading(false);
            }
        };
        fetchTips();
    }, []);

    const handleLike = async (tipId: string) => {
        try {
            const response = await axios.post('/api/like', { tipId });
            if (response.status === 200) {
                // Optionally, update the UI to reflect the new like
                setTips((prevTips) => 
                    prevTips.map((tip) => 
                        tip.id === tipId ? { ...tip, likeCount: (tip.likeCount || 0) + 1 } : tip
                    )
                );
            }
        } catch (error) {
            console.error('Error liking the tip:', error);
            // Handle error (e.g., show a notification to the user)
        }
    };

    const handleComment = async (tipId: string, comment: string) => {
        try {
            const response = await axios.post('/api/comment', { tipId, content: comment });
            if (response.status === 201) {
                // Optionally, update the UI to reflect the new comment
                setTips((prevTips) => 
                    prevTips.map((tip) => 
                        tip.id === tipId 
                            ? { ...tip, comments: [...tip.comments, response.data] } 
                            : tip
                    )
                );
            }
        } catch (error) {
            console.error('Error commenting on the tip:', error);
            // Handle error (e.g., show a notification to the user)
        }
    };

    const handleShare = async (tipId: string, platform: string) => {
        try {
            const response = await axios.post('/api/share', { tipId, platform });
            if (response.status === 201) {
                // Optionally, update the UI to reflect the new share
                setTips((prevTips) => 
                    prevTips.map((tip) => 
                        tip.id === tipId ? { ...tip, shareCount: (tip.shareCount || 0) + 1 } : tip
                    )
                );
            }
        } catch (error) {
            console.error('Error sharing the tip:', error);
            // Handle error (e.g., show a notification to the user)
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className={styles.container}>
            {tips.map((tip) => (
                <div key={tip.id} className={styles.tip}>
                    {tip.videoUrl ? (
                        <video src={tip.videoUrl} controls className={styles.video} />
                    ) : (
                        <p>{tip.content}</p>
                    )}
                    <div className={styles.actions}>
                        <p> This will take the title of video</p>
                        <button onClick={() => handleLike(tip.id)}>Like ({tip.likeCount || 0})</button>
                        <button onClick={() => handleComment(tip.id, 'Nice tip!')}>Comment</button>
                        <button onClick={() => handleShare(tip.id, 'Facebook')}>Share</button>
                    </div>
                    {tip.comments && tip.comments.length > 0 && (
                        <div className={styles.comments}>
                            <h4>Comments:</h4>
                            {tip.comments.map((comment: { id: React.Key | null | undefined; content: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
                                <p key={comment.id}>{comment.content}</p>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default UserTips;
