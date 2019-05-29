import React, { Component } from 'react';
import axios from 'axios';  
import logo from '../assets/img/logo--white.png';
import './Modal.css'

class Header extends Component {
  state = {
    displayModal: false,
    Username: '',
    Password: '',
    Firstname: '',
    LastName: '',
    Email: '',
    successMessagge: '',
    errorMessagge: ''
  }
  toggleModal = () => this.setState({ displayModal: !this.state.displayModal })
  handleChange = event => {
    let obj = {};
    obj[event.target.name] = event.target.value;
    obj['errorMessagge'] = '';
    this.setState(obj);
  }
  handleSubmit = event => {
    event.preventDefault();

    const user = {
      Username: this.state.Username,
      Password: this.state.Password,
      Firstname: this.state.Firstname,
      LastName: this.state.LastName,
      Email: this.state.Email
    };

    axios({method: 'POST', url: `https://go.globatalentpartners.com/api/registeraffiliate/`, params: user })
      .then(res => {
        let arrResults = res.data.split('|');
        
        if(arrResults[0] == 0) {
          this.setState({ displayModal: false, successMessagge: "Saved succesfully!"});
        }
        else {
          this.setState({ errorMessagge: arrResults[1]});
        }
      })
      .catch(err => {
        this.setState({ errorMessagge: "Try it later!"});
      })
  }
  render() {
    return (
      <header className="">
        <nav className="navbar is-transparent level" style={{ backgroundColor: '#086fcb', padding: '1rem 0', marginBottom: '0' }}>
          <div className="navbar-brand level-item">
            <a className="navbar-item" href="https://globatalent.com">
              <img src={logo} style={{ filter: 'drop-shadow(0px 0px 1px black)', maxHeight: '2.5rem' }} alt="Globatalent: The first sports crypto exchange where you can trade and support your favorite clubs and sports idols" />
            </a>
            {/* <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBurguer">
              <span></span>
              <span></span>
              <span></span>
            </div> */}
          </div>
          <div className="level-item"></div>
          <div className="level-item"></div>
          <div className="level-item"></div>
          {/* <div id="navbarBurguer" className="navbar-menu level-item">
            <a className="navbar-item has-text-white" href="#about">
            <span className="cube"></span> {this.props.t('site.nav.url_1')}
            </a>
            <a className="navbar-item has-text-white" href="#contact">
            <span className="cube"></span> {this.props.t('site.nav.url_2')}
            </a>
          </div> */}
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary" style={{ backgroundColor: '#fe9900' }} onClick={this.toggleModal}>
                  <strong>Sign up</strong>
                </a>
              </div>
            </div>
            {/* <div className="navbar-item">
              <div className="field">
                <input className="input" type="text" placeholder="User" style={{ backgroundColor: '#86d0f7', marginTop: '25px' }}/>
                <a style={{color: '#86d0f7'}}>forgot password?</a>
              </div>
            </div>
            <div className="navbar-item">
              <div className="field">
                <input className="input" type="password" placeholder="Password" style={{ backgroundColor: '#86d0f7' }}/>
              </div>
            </div>
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-light" style={{ backgroundColor: '#86d0f7', color: '#065aa2' }}>
                  Log in
                </a>
              </div>
            </div> */}
          </div>
        </nav>
        <div id="modal" className={this.state.displayModal ? 'modal is-active' : 'modal'}>
          <div className="modal-background"></div>
          <div className="modal-content">
          <form className="column" action='' name='register' method='POST' style={{backgroundColor: '#0a58a3'}} onSubmit={this.handleSubmit}>
              <h2 className="title is-4 form-title" style={{texTransform: 'uppercase', whiteSpace: 'nowrap'}}>{this.props.t('form.title')}</h2>
              {/* <div className="title is-4 has-text-centered text-centered">
                <p className="form-subtitle">{this.props.t('form.subtitle_1')}<br /><span>{this.props.t('form.subtitle_2')}</span></p>
              </div> */}

              <div className="inputs-container">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">{this.props.t('form.field_1.title')}<span className="has-text-danger">*</span></label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input className="input" required type="text" placeholder={this.props.t('form.field_1.help_1')} maxLength='40' name='Username' onChange={this.handleChange}/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">{this.props.t('form.field_2.title')}<span className="has-text-danger">*</span></label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input className="input" required type="password" placeholder={this.props.t('form.field_2.help_1')} maxLength='80' name='Password' onChange={this.handleChange} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">{this.props.t('form.field_3.title')}<span className="has-text-danger">*</span></label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input className="input" required type="text" placeholder={this.props.t('form.field_3.help_1')} maxLength='80' name='Firstname' onChange={this.handleChange} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">{this.props.t('form.field_4.title')}<span className="has-text-danger">*</span></label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input className="input" required type="text" placeholder={this.props.t('form.field_4.help_1')} maxLength='80' name='LastName' onChange={this.handleChange} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">{this.props.t('form.field_5.title')}<span className="has-text-danger">*</span></label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input className="input" required type="email" maxLength='100' name='Email' placeholder={this.props.t('form.field_5.help_1')} onChange={this.handleChange} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">{this.props.t('form.field_6.title')}</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input className="input" type="tel" placeholder={this.props.t('form.field_6.help_1')} maxLength='30' name='Phone' onChange={this.handleChange} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">{this.props.t('form.field_7.title')}</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input className="input" type="text" placeholder={this.props.t('form.field_7.help_1')} maxLength='100' name='Company' onChange={this.handleChange} />
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="field">
                  <div className="control">
                    <label className="checkbox">
                      <input autoComplete='off' required type='checkbox' name='privacyTool' />
                      <a href="https://globatalent.com/terms" rel="noopener noreferrer" target="_blank">{this.props.t('form.terms')}</a>
                    </label>
                  </div>
                </div>

                <div className="field is-grouped is-grouped-centered">
                  <div className="control">
                    <input className="button is-link form-button" id='formsubmit' type='submit' value={this.props.t('form.buttonSend')} />
                  </div>
                  <div className="control">
                    <input className="button is-text form-button" type='reset' value={this.props.t('form.buttonReset')} />
                  </div>
                </div>
                <div className="field is-grouped is-grouped-centered">
                  <p style={{color: 'red'}}>{this.state.errorMessagge}</p>
                </div>
              </div>
            </form>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={this.toggleModal}></button>
        </div>
        <p className="has-text-centered" style={{color: 'green', margin: '10px'}}>{this.state.successMessagge}</p>
      </header>
    )
  }
}

export default Header;