import React from 'react';
import { useHistory } from 'react-router-dom';

export default function NewStory() {
  const history = useHistory();
  const handleSubmit = async (title, name, entry) => {
    console.log('submit handle');
  };
  return (
    <>
      <PostForm submitHandler={handleSubmit} />
    </>
  );
}
