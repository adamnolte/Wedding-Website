import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';

/*eslint-disable jsx-a11y/href-no-hash*/

const NavLinks = ({ className, closeNav }) => {
  return (
    <div className={className}>
      <a href="#" onClick={closeNav}>Home</a>
      <a href="#OurStory" onClick={closeNav}>Our Story</a>
      <a href="#WeddingParty" onClick={closeNav}>Wedding Party</a>
      <a href="#EventDetails" onClick={closeNav}>Event Details</a>
      <a href="#Accomodations" onClick={closeNav}>Accomodations</a>
    </div>
  );
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
    };
    this.navRef = undefined;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.closeNav);
    document.addEventListener('mousedown', this.checkClick);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.closeNav);
    document.removeEventListener('mousedown', this.checkClick);
  }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen,
    });
  }

  closeNav = () => {
    if (this.state.navOpen) {
      this.setState({
        navOpen: false,
      });
    }
  }

  checkClick = (ev) => {
    if (this.navRef !== undefined && this.state.navOpen && !this.navRef.contains(ev.target)) {
      this.closeNav();
    }
  }

  setRef = (element) => {
    this.navRef = element;
  }

  render() {
    return (
      <div className={'navbar-wrapper'} ref={this.setRef}>
        <div>
          <div className={'nav-logo'}>#NewlyNolte</div>
          {<NavLinks className={'nav-links-desktop'} closeNav={this.closeNav} />}
          <div className={'nav-hamburger'}>
            <FontAwesomeIcon onClick={this.toggleNav} icon={faBars} />
          </div>
        </div>
        {
          this.state.navOpen && <NavLinks className={'nav-links-mobile'} closeNav={this.closeNav}/>
        }
      </div>
    );
  }
}

export default Navbar;
