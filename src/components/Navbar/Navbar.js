import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';

/*eslint-disable jsx-a11y/href-no-hash*/

const NavLinks = ({ className }) => {
  return (
    <div className={className}>
      <a href="#">Home</a>
      <a href="#OurStory">Our Story</a>
      <a href="#WeddingParty">Wedding Party</a>
      <a href="#EventDetails">Event Details</a>
      <a href="#Accomodations">Accomodations</a>
    </div>
  );
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
    };
  }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen,
    });
  }

  render() {
    return (
      <div className={'navbar-wrapper'}>
        <div>
          <div className={'nav-logo'}>#NewlyNolte</div>
          {<NavLinks className={'nav-links-desktop'} />}
          <div className={'nav-hamburger'}>
            <FontAwesomeIcon onClick={this.toggleNav} icon={faBars} />
          </div>
        </div>
        {
          this.state.navOpen && <NavLinks className={'nav-links-mobile'} />
        }
      </div>
    );
  }
}

export default Navbar;
