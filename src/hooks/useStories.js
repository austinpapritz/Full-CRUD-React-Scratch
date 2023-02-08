import { useEffect, useState } from 'react';
import { getStories } from '../services/stories.js';

export function useStories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStories();
        setStories(data);
      } catch (e) {
        console.log('e', e);
      }
    };
    fetchData();
  }, []);

  return { stories };
}
