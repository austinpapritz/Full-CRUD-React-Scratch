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
      <Header />
      <img className="mary" src={process.env.PUBLIC_URL + '/mary-only.png'}></img>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/auth/:type" component={Auth} />
        <Route exact path="/entries/edit/:id" component={EditStory} />
        <Route exact path="/entries" component={Stories} />
        <Route exact path="/entries/new" component={NewStory} />
        <Route path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
