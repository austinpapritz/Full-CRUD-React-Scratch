import React from 'react';
import { useStories } from '../../hooks/useStories.js';

import StoryCard from '../Story/StoryCard.js';

export default function Stories() {
  const { stories } = useStories();

  return (
    <div className="cards-container">
      {stories.map((story) => (
        <StoryCard key={story.id} {...story} />
      ))}
    </div>
  );
}
