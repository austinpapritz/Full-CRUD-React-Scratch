import './App.css';
import Stories from './components/Story/Stories.js';

import Header from './components/Header/Header.js';
import Auth from './components/Auth/Auth.js';

import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/auth/:type" component={Auth} />
        <Route exact path="/entries" component={Stories} />
        <Route path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
