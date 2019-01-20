import React, { Component } from 'react'
import ExtendedHeader from './Components/ExtendedHeader'
import HotProducts from './Components/HotProducts'

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
          <ExtendedHeader />
          <HotProducts/>
        </div>
      </div>
    );
  }
}

export default App;
