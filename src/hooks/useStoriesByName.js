import { useEffect } from 'react';
import { useState } from 'react';
import { getStoriesByName } from '../services/stories.js';

export function useStoriesByName(name) {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStoriesByName(name);
        setStories(data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, [name]);

  return { stories, error, setError };
}
