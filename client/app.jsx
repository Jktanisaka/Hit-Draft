import React from 'react';
import Level1 from './pages/level-1';
import Level2 from './pages/level-2';
import Level3 from './pages/level-3';
import Level4 from './pages/level-4';
import Level5 from './pages/level-5';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Level1 />
          </Route>
          <Route path="/level2">
            <Level2 />
          </Route>
          <Route path="/level3">
            <Level3 />
          </Route>
          <Route path="/level4">
            <Level4 />
          </Route>
          <Route path="/level5">
            <Level5 />
          </Route>
        </Switch>
      </Router>
    );
  }
}
