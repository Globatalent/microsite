import React, { Component } from "react";
import img_1 from '../assets/img/img_1.png'
import img_2 from '../assets/img/img_2.png'
import img_3 from '../assets/img/img_3.png'
import './Info.css'

class Info extends Component {
  render() {
    return (
      <section id="about" className="section is-centered columns">
        <div className="column is-1"></div>
        <article className="column is-3">
          <div className="columns">
            <div className="column is-4">
              <figure className="image">
                <img src={img_1} alt="Globatalent is a unique platform that give you the chance to interact with your fans in unique ways" />
              </figure>
            </div>
            <div className="column is-1"></div>
            <div className="column is-7">
              <h2 className="title is-4">{this.props.t('info.title_1')}</h2>
              <p>{this.props.t('info.text_1')}</p>
            </div>
          </div>
        </article>
        <article className="column is-3">
          <div className="columns">
            <div className="column is-4">
              <figure className="image">
                <img src={img_2} alt="Globatalent enable you to share rewards in exchange of funding" />
              </figure>
            </div>
            <div className="column is-1"></div>
            <div className="column is-7">
              <h2 className="title is-4">{this.props.t('info.title_2')}</h2>
              <p>{this.props.t('info.text_2')}</p>
            </div>
          </div>
        </article>
        <article className="column is-3">
          <div className="columns">
            <div className="column is-4">
              <figure className="image">
                <img src={img_3} alt="You can tokenize almost everything!!" />
              </figure>
            </div>
            <div className="column is-1"></div>
            <div className="column is-7">
              <h2 className="title is-4">{this.props.t('info.title_3')}</h2>
              <p>{this.props.t('info.text_3')}</p>
            </div>
          </div>
        </article>
        <div className="column is-1"></div>
      </section>
    )
  }
}

export default Info;