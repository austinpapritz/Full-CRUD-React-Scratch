import React from 'react';
import { useHistory } from 'react-router-dom';
import StoryForm from './StoryForm.js';

export default function NewStory() {
  const history = useHistory();
  const handleSubmit = async (title, name, entry) => {};
  return (
    <>
      <StoryForm submitHandler={handleSubmit} />
    </>
  );
}
