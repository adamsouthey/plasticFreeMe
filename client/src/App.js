import React, { Component } from 'react';
import Content from './Components/Content.js';
import Header from './Components/Header.js';
import DummyData from './Components/DummyData';


class App extends Component {

  componentDidMount() {
    fetch('/api')
    .then(data => data.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <DummyData />
          <Header />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
