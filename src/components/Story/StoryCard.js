import React from 'react';
import { Link } from 'react-router-dom';
import './Stories.css';
import { useUser } from '../../context/UserContext.js';

export default function StoryCard({ user_id, id, title, name, entry }) {
  const { user } = useUser();
  const owner = user.id === user_id;

  return (
    <div className="scroll-div">
      <div className="content-container">
        <h3>{title}</h3>
        <h3>by {name}</h3>
        <p>{entry}</p>
        {owner && (
          <>
            <Link to={`/entries/edit/${id}`}>Edit</Link>
          </>
        )}
      </div>
    </div>
  );
}
