import React from 'react';

export default function StoryCard({ title, name, entry }) {
  return (
    <div className="scroll-div">
      <h3>
        {title} by {name}
      </h3>
      <p>{entry}</p>
    </div>
  );
}
