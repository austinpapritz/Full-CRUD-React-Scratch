import { useEffect } from 'react';
import { useState } from 'react';
import { getStoryByID } from '../services/stories.js';

export function useStory(id) {
  const [storyDetail, setStoryDetail] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStoryByID(id);
        setStoryDetail(data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, [id]);

  return { storyDetail, setStoryDetail, error, setError };
}
