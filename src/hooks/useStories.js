import { useEffect, useState } from 'react';
import { getStories } from '../services/stories.js';

export function useStories() {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStories();
        setStories(data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  return { stories, error };
}
