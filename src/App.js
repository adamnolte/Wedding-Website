import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import LandingImage from './components/LandingImage/LandingImage';
import OurStory from './components/OurStory/OurStory';
import WeddingParty from './components/WeddingParty/WeddingParty';
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
        <WeddingParty />
        <EventDetails />
        <Accomodations />
      </div>
    );
  }
}

export default App;
