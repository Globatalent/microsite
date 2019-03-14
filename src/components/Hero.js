import React, { Component } from 'react';
import hero from '../assets/img/hero.png';
import bck from '../assets/img/bck_1.png';
import './Hero.css'

class Hero extends Component {
  render() {
    return (
      <section id="hero" className="hero is-medium" style={{
        backgroundImage: "url(" + hero + ")",
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <div className="hero-body columns">
          <div className="column is-7"></div>
          <div className="container column is-4">
						<img src={bck} className="img-bck" alt="background" />
            <div className="background-box">
              <div className="columns">
              <div className="column is-4"></div>
              <div className="column is-7">
              <h1 className="title has-text-white is-1">
                {this.props.t('site.title')}
              </h1>
              <div className="percent subtitle has-text-white">{this.props.t("site.percent")}</div>
              <div className="subtitle has-text-white" style={{textTransform: 'uppercase'}}>{this.props.t("site.subtitle_1")}</div>
              <div className="subtitle has-text-white">{this.props.t("site.subtitle_2")}</div>
              </div>
            </div>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </section>
    )
  }
}

export default Hero;