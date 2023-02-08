import './App.css';
import { useStories } from './hooks/useStories.js';

function App() {
  const { stories } = useStories();

  console.log('stories', stories);
  return <div className="App"></div>;
}

export default App;
