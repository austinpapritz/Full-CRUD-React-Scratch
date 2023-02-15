import './App.css';
import Stories from './components/Story/Stories.js';

import Header from './components/Header/Header.js';
import Auth from './components/Auth/Auth.js';
import NewStory from './components/Story/NewStory.js';

import { Redirect, Route, Switch } from 'react-router-dom';
import EditStory from './components/Story/EditStory.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header main={true} />
        </Route>
        <Route exact path="/auth/:type">
          <Header auth={true} />
          <Auth />
        </Route>
        <Route exact path="/edit/:id">
          <Header edit={true} />
          <EditStory />
        </Route>
        <Route exact path="/entries/:name">
          <Header stories={true} />
          <Stories />
        </Route>
        <Route exact path="/new">
          <Header new={true} />
          <NewStory />
        </Route>
        <Route path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
