import React, { Component } from 'react';

import LandingImage from './components/LandingImage/LandingImage';
import Navbar from './components/Navbar/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <LandingImage />
      </div>
    );
  }
}

export default App;
