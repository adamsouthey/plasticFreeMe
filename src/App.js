import React, { Component } from 'react';
import Content from './Components/Content.js';
import Header from './Components/Header.js';
import DummyData from './Components/DummyData';


class App extends Component {
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
