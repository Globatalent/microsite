import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faTelegram, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import logoBright from '../assets/img/logo_globa.svg'
import london from '../assets/img/london.png'
import buenosaires from '../assets/img/buenosaires.png'
import hongkong from '../assets/img/hongkong.png'


const style = {
  color: {
    color: "rgb(148,207,240)",
    marginBottom: 0,
    backgroundColor: "rgb(36,91,157)"
  },
  img: {
    maxWidth: "18rem",
    position: "absolute"
  },
  social: {
    justifyContent: "space-between",
    paddingTop: '2rem'
  },
  bckLocations: {
    backgroundColor: '#2ebce6',
    color: "rgb(36,91,157)",
  },
  bckLondon: {
    backgroundImage: `url(${london})`,
    backgroundPosition: '100% 0',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  bckBuenosAires: {
    backgroundImage: `url(${buenosaires})`,
    backgroundPosition: '100% 0',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  bckHongKong: {
    backgroundImage: `url(${hongkong})`,
    backgroundPosition: '100% 0',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}

class Footer extends Component  {
  render()
  {
    const socialNetworks = [
      { icon: faTwitter, url: "https://twitter.com/globatalent" },
      { icon: faFacebook, url: "https://www.facebook.com/globatalent.official" },
      { icon: faTelegram, url: "https://t.me/globatalent/" },
      { icon: faInstagram, url: "https://www.instagram.com/globatalent/" },
      { icon: faLinkedin, url: "https://www.linkedin.com/company/globatalent/" }
    ],
    icons = socialNetworks.map((network, index) => {
      return (
        <li key={index.toString()}>
          <a href={network.url} target="_blank" rel="noopener noreferrer" className="icon is-size-4">
            <FontAwesomeIcon icon={network.icon} />
          </a>
        </li>
      )
    });
  return (
    <footer className="footer is-paddingless" style={style.color}>
      <div className="columns is-centered">
          <figure className="column is-2 image is-hidden-mobile	">
            <img src={logoBright} alt="Globatalent" style={style.img} />
          </figure>
        <section className="column is-4">         
          <div className="section">
            <p>{this.props.t('footer.text')}</p>
            <div className="columns">
          <ul className="column is-9 is-flex" style={style.social}>
            {icons}
          </ul>
          </div>
          </div>
        </section>
        <section className="column has-text-centered is-size-4 has-text-weight-bold" style={style.bckLocations}>
          <div className="section">
            <p>{this.props.t('footer.locations')}</p>
            <span className="icon"><FontAwesomeIcon icon={faMapMarkedAlt} /></span>
          </div>
        </section>
        <section className="column has-text-centered is-size-4 has-text-white has-text-weight-bold" style={style.bckLondon}>
          <div className="section">
          <p>
            {this.props.t('footer.location.sites.0.city')}
            </p>
            <p className="is-size-7">
            {this.props.t('footer.location.sites.0.address')}
            </p>
            </div>
        </section>
        <section className="column has-text-centered is-size-4 has-text-white has-text-weight-bold" style={style.bckBuenosAires}>
          <div className="section">
            <p>
            {this.props.t('footer.location.sites.1.city')}
            </p>
            <p className="is-size-7">
            {this.props.t('footer.location.sites.1.address')}
            </p>
          </div>
        </section>
        <section className="column has-text-centered is-size-4 has-text-white has-text-weight-bold" style={style.bckHongKong}>
          <div className="section">
          <p>
            {this.props.t('footer.location.sites.2.city')}
            </p>
            <p className="is-size-7">
            {this.props.t('footer.location.sites.2.address')}
            </p>
            </div>
        </section>
      </div>
      <div className="columns is-centered" style={{backgroundColor: "#fff", color: 'rgb(36,91,157)'}}>
        <nav className="column is-full container is-fullhd columns has-text-centered is-centered">
          <a className="column is-2 has-text-weight-bold" href="/terms" style={{color: 'rgb(36,91,157)'}}>{this.props.t('footer.small.termsOfUse')}</a>
          <span className="column is-narrow has-text-weight-bold">
            <span>{this.props.t('footer.contactUs')}</span>
            {` `}
            <a href="mailto:contact@globatalent.com" style={{color: 'rgb(36,91,157)'}}>contact@globatalent.com</a>
            {` `}
            {this.props.t('footer.contactOr')}
            {` `}
            <a href="tel:+44(0)2075041304" style={{color: 'rgb(36,91,157)'}}>+44(0)2075041304</a>
          </span>
        </nav>
      </div>
      <div className="columns is-centered" style={{backgroundColor: "#fff"}}>
        <section className="columns container is-fullhd">
          <span className="column has-text-weight-bold has-text-justified is-size-7" style={{color: 'rgb(36,91,157)', padding:'0 2rem 0 2rem'}}>{this.props.t('footer.small.company')}</span>
        </section>
      </div>
      <div className="columns is-centered" style={{backgroundColor: "#fff"}}>
        <section className="section columns container is-fullhd">
          <span className="column has-text-weight-bold has-text-centered is-size-7" style={{color: 'rgb(36,91,157)'}}> &copy; {this.props.t('footer.small.copyright', { year: new Date().getFullYear() })}</span>
        </section>
      </div>
    </footer>
  )}
}

export default Footer;