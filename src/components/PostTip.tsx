import React, { useState } from 'react';
import styles from '../styles/PostTip.module.css';

const PostTip: React.FC = () => {
    const [content, setContent] = useState<string>('');
    const [videoUrl, setVideoUrl] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await fetch('/api/tips', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content, videoUrl }),
        });
        if (response.ok) {
            // Clear form and show success message
            setContent('');
            setVideoUrl('');
        } else {
            // Show error message
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Share your tip..."
            />
            <input
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Video URL (optional)"
            />
            <button type="submit">Post Tip</button>
        </form>
    );
};

export default PostTip;
