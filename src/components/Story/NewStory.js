import React from 'react';
import { useHistory } from 'react-router-dom';
import { createNewStory } from '../../services/stories.js';
import StoryForm from './StoryForm.js';

export default function NewStory() {
  const history = useHistory();
  const handleSubmit = async (title, name, entry) => {
    await createNewStory(title, name, entry);
  };
  return (
    <>
      <StoryForm submitHandler={handleSubmit} />
    </>
  );
}
