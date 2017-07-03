import React, { Component } from 'react';
import AppContainer from './routes/index.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppContainer />
      </div>
    );
  }
}

export default App;
