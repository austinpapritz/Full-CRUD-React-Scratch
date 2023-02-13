import './App.css';
import Stories from './components/Story/Stories.js';

import Header from './components/Header/Header.js';
import Auth from './components/Auth/Auth.js';
import NewStory from './components/Story/NewStory.js';

import { Link, Redirect, Route, Switch } from 'react-router-dom';
import EditStory from './components/Story/EditStory.js';

function App() {
  return (
    <div className="App">
      <Link to="/entries/mary">
        <img className="mary" src={process.env.PUBLIC_URL + '/mary.png'} />
      </Link>
      <Link to="/entries/martin">
        <img className="bandit" src={process.env.PUBLIC_URL + '/bandit.png'} />
      </Link>

      <Switch>
        <Route exact path="/">
          <Header main={true} />
        </Route>
        <Route exact path="/auth/:type" component={Auth}>
          <Header auth={true} />
        </Route>
        <Route exact path="/entries/edit/:id" component={EditStory}>
          <Header edit={true} />
        </Route>
        <Route exact path="/entries/:name" component={Stories}>
          <Header stories={true} />
        </Route>
        <Route exact path="/entries/new" component={NewStory}>
          <Header new={true} />
        </Route>
        <Route path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
