import React, { Component } from "react";
import bck from '../assets/img/bck_2.png';
import prog_1 from '../assets/img/prog_1.png';
import prog_2 from '../assets/img/prog_2.png';
import prog_3 from '../assets/img/prog_3.png';
import './Program.css'

class Program extends Component {
  render() {
    return (
      <section id="program" className="is-centered">
        <div className="columns">
          <div className="column is-12">
            <img src={bck} alt="background" className="bck"/>
          </div>
        </div>
        <div className="columns">
          <div className="column is-12 has-text-centered">
            <p className="title-text">{this.props.t('program.text_1')}</p>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-1"></div>
          <div className="column is-3 has-text-centered">
            <img src={prog_1} alt="background" className="p-icon"/>
            <p>{this.props.t('program.text_2')}</p>
            {/* <input className="button" value={this.props.t('program.btn')} /> */}
          </div>
          <div className="column is-3 has-text-centered">
            <img src={prog_2} alt="background" className="p-icon"/>
            <p>{this.props.t('program.text_3')}</p>
            {/* <input className="button" value={this.props.t('program.btn')} /> */}
          </div>
          <div className="column is-3 has-text-centered">
            <img src={prog_3} alt="background" className="p-icon"/>
            <p>{this.props.t('program.text_4')}</p>
            {/* <input className="button" value={this.props.t('program.btn')} /> */}
          </div>
          <div className="column is-1"></div>
        </div>
      </section>
    )
  }
}

export default Program;