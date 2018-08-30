import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import scrollTo from 'scroll-to';
import './Navbar.css';

const NavLinks = ({ className, navigate }) => {
  return (
    <div className={className}>
      <div
        className={'link'}
        role={'button'}
        tabIndex={0}
        onClick={() => { navigate('top'); }}
      >
        Home
      </div>
      <div
        className={'link'}
        role={'button'}
        tabIndex={0}
        onClick={() => { navigate('OurStory'); }}
      >
        Our Story
        </div>
      <div
        className={'link'}
        role={'button'}
        tabIndex={0}
        onClick={() => { navigate('WeddingParty'); }}
      >
        Wedding Party
      </div>
      <div
        className={'link'}
        role={'button'}
        tabIndex={0}
        onClick={() => { navigate('EventDetails'); }}
      >
        Event Details
      </div>
      <div
        className={'link'}
        role={'button'}
        tabIndex={0}
        onClick={() => { navigate('Accomodations'); }}
      >
        Accomodations
      </div>
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

  navigate= (id) => {
    const element = document.getElementById(id);
    if (element) {
      scrollTo(0, element.getBoundingClientRect().top - document.body.getBoundingClientRect().top);
    }
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
          {<NavLinks className={'nav-links-desktop'} navigate={this.navigate} />}
          <div className={'nav-hamburger'}>
            <FontAwesomeIcon onClick={this.toggleNav} icon={faBars} />
          </div>
        </div>
        {
          this.state.navOpen && <NavLinks className={'nav-links-mobile'} navigate={this.navigate}/>
        }
      </div>
    );
  }
}

export default Navbar;
