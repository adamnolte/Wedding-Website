import React, { Component } from 'react';
import objectFitImages from 'object-fit-images';

import Navbar from './components/Navbar/Navbar';
import LandingImage from './components/LandingImage/LandingImage';
import OurStory from './components/OurStory/OurStory';
import WeddingParty from './components/WeddingParty/WeddingParty';
import EventDetails from './components/EventDetails/EventDetails';
import Accomodations from './components/Accomodations/Accomodations';
import './App.css';
import Registry from './components/Registry/Registry';

class App extends Component {

  componentDidMount() {
    objectFitImages();
  }

  render() {
    return (
      <div>
        <Navbar />
        <LandingImage />
        <OurStory />
        <WeddingParty />
        <EventDetails />
        <Accomodations />
        <Registry />
      </div>
    );
  }
}

export default App;
