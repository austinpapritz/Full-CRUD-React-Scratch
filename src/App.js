import './App.css';
import { getStories } from './services/stories.js';

function App() {
  getStories();
  return <div className="App"></div>;
}

export default App;
