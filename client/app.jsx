import React from 'react';
import Race from './components/race';
import Header from './components/header';
import Results from './components/results';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(props) {
  }

  render() {
    return (
      <>
      <Header />
      <Router>
        <Switch>
          <Route path='/' element={<Race />} />
          <Route path="/results" element={<Results />} />
        </Switch>
      </Router>
      </>
    );
  }
}
