import './App.css';
import { useStories } from './hooks/useStories.js';

import Stories from './components/Story/Stories.js';

function App() {
  return (
    <div className="App">
      <Stories />
    </div>
  );
}

export default App;
