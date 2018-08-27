import React from 'react';
import './Navbar.css';

/*eslint-disable jsx-a11y/href-no-hash*/

const Navbar = () => {
  return (
    <div className={'navbar-wrapper'}>
      <div>
        <div className={'nav-logo'}>#NewlyNolte</div>
        <a href="#">Home</a>
        <a href="#OurStory">Our Story</a>
        <a href="#WeddingParty">Wedding Party</a>
        <a href="#EventDetails">Event Details</a>
        <a href="#Accomadtions">Accomodations</a>
      </div>
    </div>
  );
}

export default Navbar;
