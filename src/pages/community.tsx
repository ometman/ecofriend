// src/pages/community.tsx
import React, { useEffect, useState } from 'react';
import styles from '../styles/Community.module.css';

type Challenge = {
  id: number;
  title: string;
};

type Discussion = {
  id: number;
  topic: string;
};

type Tip = {
  id: number;
  tip: string;
};

type Event = {
  id: number;
  event: string;
};

const Community: React.FC = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [tips, setTips] = useState<Tip[]>([]);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Simulate fetching data
    setChallenges([
      { id: 1, title: 'Reduce Plastic Use Challenge' },
      { id: 2, title: '30-Day Zero Waste Challenge' },
      { id: 3, title: 'Eco-Friendly Transportation Challenge' },
    ]);

    setDiscussions([
      { id: 1, topic: 'Sustainable living tips' },
      { id: 2, topic: 'Best eco-friendly products' },
    ]);

    setTips([
      { id: 1, tip: 'Use reusable bags instead of plastic' },
      { id: 2, tip: 'Switch to a bamboo toothbrush' },
    ]);

    setEvents([
      { id: 1, event: 'Local beach cleanup' },
      { id: 2, event: 'Online webinar on zero waste living' },
    ]);
  }, []);

  return (
    <div className={styles.container}>
      <h1>EcoFriend Community</h1>
      <section className={styles.challenges}>
        <h2>Community Challenges</h2>
        <ul>
          {challenges.map((challenge) => (
            <li key={challenge.id}>{challenge.title}</li>
          ))}
        </ul>
      </section>
      <section className={styles.discussions}>
        <h2>Discussions</h2>
        <ul>
          {discussions.map((discussion) => (
            <li key={discussion.id}>{discussion.topic}</li>
          ))}
        </ul>
      </section>
      <section className={styles.tips}>
        <h2>User Tips</h2>
        <ul>
          {tips.map((tip) => (
            <li key={tip.id}>{tip.tip}</li>
          ))}
        </ul>
      </section>
      <section className={styles.events}>
        <h2>Upcoming Events</h2>
        <ul>
          {events.map((event) => (
            <li key={event.id}>{event.event}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Community;
