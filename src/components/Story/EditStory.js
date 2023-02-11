import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useStory } from '../../hooks/useStory.js';
import { updateStory } from '../../services/stories.js';
import StoryCard from './StoryCard.js';
import StoryForm from './StoryForm.js';

export default function EditStory() {
  const { id } = useParams();
  const { storyDetail, error, setError } = useStory(id);
  const history = useHistory();

  if (error) return <h1>{error}</h1>;

  const handleSubmit = async (title, name, entry) => {
    try {
      await updateStory(storyDetail.id, title, name, entry);
      history.push('/entries');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <StoryForm {...storyDetail} submitHandler={handleSubmit} />
      <StoryCard {...storyDetail} />
    </>
  );
}
