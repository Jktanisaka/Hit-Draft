import React from 'react';
import Level1 from './pages/level-1';
import Level2 from './pages/level-2';
import Level3 from './pages/level-3';
import Level4 from './pages/level-4';
import Level5 from './pages/level-5';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" element={<Level1/>} />
          <Route path="/level2" element={<Level2 />} />

          <Route path="/level3" element={<Level3 />} />

          <Route path="/level4" element={<Level4 />} />

          <Route path="/level5" element={<Level5 />} />

        </Switch>
      </Router>
    );
  }
}
