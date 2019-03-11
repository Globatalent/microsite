import React, { Component } from 'react';
import logo from '../assets/img/logo--white.png';

class Header extends Component {
  render() {
    return (
      <header className="">
        <nav className="navbar is-transparent level" style={{ backgroundColor: '#086fcb', padding: '1rem 0' }}>
          <div className="navbar-brand level-item">
            <a className="navbar-item" href="https://globatalent.com">
              <img src={logo} style={{ filter: 'drop-shadow(0px 0px 1px black)', maxHeight: '2.5rem' }} alt="Globatalent: The first sports crypto exchange where you can trade and support your favorite clubs and sports idols" />
            </a>
            <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBurguer">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="level-item"></div>
          <div className="level-item"></div>
          <div className="level-item"></div>
          <div id="navbarBurguer" className="navbar-menu level-item">
            <a className="navbar-item has-text-white" href="#about">
            <span className="cube"></span> {this.props.t('site.nav.url_1')}
            </a>
            <a className="navbar-item has-text-white" href="#contact">
            <span className="cube"></span> {this.props.t('site.nav.url_2')}
            </a>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;