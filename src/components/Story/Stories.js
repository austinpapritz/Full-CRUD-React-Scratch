import React from 'react';
import './Stories.css';

import { useStories } from '../../hooks/useStories.js';

import StoryCard from '../Story/StoryCard.js';
import { Link } from 'react-router-dom';

export default function Stories() {
  const { stories } = useStories();

  return (
    <>
      <Link to="/entries/mary">
        <img className="mary" src={process.env.PUBLIC_URL + '/mary.png'} />
      </Link>
      <Link to="/entries/martin">
        <img className="bandit" src={process.env.PUBLIC_URL + '/bandit.png'} />
      </Link>
      <div className="cards-container">
        {stories.map((story) => (
          <StoryCard key={story.id} {...story} entry={story.entry.slice(0, 80)} />
        ))}
      </div>
    </>
  );
}
