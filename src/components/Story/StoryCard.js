import React from 'react';
import { Link } from 'react-router-dom';
import './Stories.css';
import { useUser } from '../../context/UserContext.js';
import { deleteStoryByID } from '../../services/stories.js';

export default function StoryCard({ user_id, id, title, name, entry }) {
  const { user } = useUser();
  const owner = user.id === user_id;

  async function handleDelete(id) {
    await deleteStoryByID(id);
  }

  return (
    <div className="scroll-div">
      <div className="content-container">
        <h3>{title}</h3>
        <h3>by {name}</h3>
        <p>{entry}</p>
        {owner && (
          <div className="control">
            <ul>
              <li>
                <Link to={`/entries/edit/${id}`}>Edit</Link>
              </li>
              <li
                onClick={() => {
                  handleDelete(id);
                }}
              >
                <Link to={`/entries/delete/${id}`}>Delete</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
