import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className={'navbar-wrapper'}>
      <div>Newly Nolte</div>
      <a href="#">Home</a>
      <a href="#OurStory">Our Story</a>
      <a href="#WeddingParty">Wedding Party</a>
      <a href="#EventDetails">Event Details</a>
      <a href="#Accomadtions">Accomodations</a>
    </div>
  );
}

export default Navbar;
