import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import LandingImage from './components/LandingImage/LandingImage';
import OurStory from './components/OurStory/OurStory';
import EventDetails from './components/EventDetails/EventDetails';
import Accomodations from './components/Accomodations/Accomodations';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <LandingImage />
        <OurStory />
        <EventDetails />
        <Accomodations />
      </div>
    );
  }
}

export default App;
