import './App.css';
import Stories from './components/Story/Stories.js';

import Auth from './components/Auth/Auth.js';
import NewStory from './components/Story/NewStory.js';

import { Redirect, Route, Switch } from 'react-router-dom';
import EditStory from './components/Story/EditStory.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/entries/pick-a-character">
          <Stories />
        </Route>
        <Route exact path="/auth/:type">
          <Auth />
        </Route>
        <Route exact path="/edit/:id">
          <EditStory />
        </Route>
        <Route exact path="/entries/:name">
          <Stories />
        </Route>
        <Route exact path="/new">
          <NewStory />
        </Route>
        <Route path="*">
          <Redirect to="/entries/pick-a-character" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
