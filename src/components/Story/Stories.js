import React from 'react';
import './Stories.css';

import { useStories } from '../../hooks/useStories.js';

import StoryCard from '../Story/StoryCard.js';

export default function Stories() {
  const { stories } = useStories();
  console.log('stories', stories);

  return (
    <div className="cards-container">
      {stories.map((story) => (
        <StoryCard key={story.id} {...story} />
      ))}
    </div>
  );
}
