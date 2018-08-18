import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import LandingImage from './components/LandingImage/LandingImage';
import OurStory from './components/OurStory/OurStory';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <LandingImage />
        <OurStory />
      </div>
    );
  }
}

export default App;
