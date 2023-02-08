import './App.css';
import { useStories } from './hooks/useStories.js';

import Stories from './components/Story/Stories.js';

function App() {
  const { stories } = useStories();

  return (
    <div className="App">
      <Stories />
    </div>
  );
}

export default App;
