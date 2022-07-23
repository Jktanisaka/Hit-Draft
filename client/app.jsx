import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(props) {
  }

  render() {
    return (
      <div></div>
    );
  }
}
