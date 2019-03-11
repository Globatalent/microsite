import React, { Component } from 'react';
import hero from '../assets/img/hero.png';
import bck from '../assets/img/bck_1.png';

class Hero extends Component {
  render() {
    return (
      <section className="hero is-medium" style={{
        backgroundImage: "url(" + hero + ")",
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <div className="hero-body columns">
          <div className="column is-7"></div>
          <div className="container column is-4">
						<img src={bck} className="" alt="background" />
            <div style={{ position: 'absolute', top: "32%", width: "100%"}}>
              <div className="columns">
              <div className="column is-4"></div>

              <div className="column is-7">
              <h1 className="title has-text-white is-1">
                {this.props.t('site.title')}
              </h1>
              <h2 className="subtitle has-text-white">
                {this.props.t("site.subtitle_1")}
                <br />
                {this.props.t("site.subtitle_2")}
              </h2>
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