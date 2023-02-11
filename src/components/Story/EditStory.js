import React from 'react';
import { useParams } from 'react-router-dom';
import { useStory } from '../../hooks/useStory.js';
import { updateStory } from '../../services/stories.js';
import StoryCard from './StoryCard.js';
import StoryForm from './StoryForm.js';

export default function EditStory() {
  const { id } = useParams();
  const { storyDetail, error, setError } = useStory(id);

  if (error) return <h1>{error}</h1>;

  const handleSubmit = async (title, name, entry) => {
    try {
      await updateStory(storyDetail.id, title, name, entry);
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
