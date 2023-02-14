import React from 'react';
import './Stories.css';
import { useHistory } from 'react-router-dom';
import { createNewStory } from '../../services/stories.js';
import StoryForm from './StoryForm.js';

export default function NewStory() {
  const history = useHistory();
  const handleSubmit = async (title, name, entry) => {
    try {
      await createNewStory(title, name, entry);
      history.push('/entries');
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div className="form-container">
      <StoryForm submitHandler={handleSubmit} />
    </div>
  );
}
