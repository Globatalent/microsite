import React, { Component } from "react";
import bck from '../assets/img/bck_2.png';
import bck_2 from '../assets/img/bck_3.png';
import img_1 from '../assets/img/why_1.png';
import img_2 from '../assets/img/why_2.png';
import img_3 from '../assets/img/why_3.png';
import img_4 from '../assets/img/why_4.png';
import './Why.css'

class Why extends Component {
  render() {
    return (
      <section id="why" className="is-centered">
        <div className="columns">
          <div className="column is-12">
            <img src={bck} alt="background" className="bck"/>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-7">
            <img src={bck_2} alt="background" className="bck2"/>
          </div>
          <div className="column is-4">
            <article className="column is-12">
              <div className="columns">
                <div className="column is-3">
                  <figure className="image">
                    <img src={img_1} alt="Icon" />
                  </figure>
                </div>
                <div className="column is-9">
                  <h2 className="title is-4">{this.props.t('why.title_1')}</h2>
                  <p>{this.props.t('why.text_1')}</p>
                </div>
              </div>
            </article>
            <article className="column is-12">
              <div className="columns">
                <div className="column is-3">
                  <figure className="image">
                    <img src={img_2} alt="Icon" />
                  </figure>
                </div>
                <div className="column is-9">
                  <h2 className="title is-4">{this.props.t('why.title_2')}</h2>
                  <p>{this.props.t('why.text_2')}</p>
                </div>
              </div>
            </article>
            <article className="column is-12">
              <div className="columns">
                <div className="column is-3">
                  <figure className="image">
                    <img src={img_3} alt="Icon" />
                  </figure>
                </div>
                <div className="column is-9">
                  <h2 className="title is-4">{this.props.t('why.title_3')}</h2>
                  <p>{this.props.t('why.text_3')}</p>
                </div>
              </div>
            </article>
            <article className="column is-12">
              <div className="columns">
                <div className="column is-3">
                  <figure className="image">
                    <img src={img_4} alt="Icon" />
                  </figure>
                </div>
                <div className="column is-9">
                  <h2 className="title is-4">{this.props.t('why.title_4')}</h2>
                  <p>{this.props.t('why.text_4')}</p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-1"></div>
        </div>
      </section>
    )
  }
}

export default Why;