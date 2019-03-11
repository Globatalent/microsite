import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import Program from './components/Program';
import Why from './components/Why';
import Modal from './components/Modal';
import Footer from './components/Footer';
import './i18n';

class App extends Component {
  state = {
    displayedTab: 1
  }
  displayTab = (index) => this.setState({ displayedTab: index.target.id.substr(8) })
  render() {
    return (
      <div>
        <Header t={this.props.t}/>
        <div className="columns" style={{ marginBottom: '0' }}>
          <div className="column is-1" style={{ paddingBottom: '0' }}></div>
          <div className="column is-10" style={{ paddingBottom: '0' }}>
            <div className="tabs is-toggle">
              <ul>
                <li className={(this.state.displayedTab == 1 ? 'is-active ' : '') + 'column is-4'}><a id="tab-btn-1" onClick={this.displayTab}>{this.props.t('tabs.title_1')}</a></li>
                <li className={(this.state.displayedTab == 2 ? 'is-active ' : '') + 'column is-4'}><a id="tab-btn-2" onClick={this.displayTab}>{this.props.t('tabs.title_2')}</a></li>
                <li className={(this.state.displayedTab == 3 ? 'is-active ' : '') + 'column is-4'}><a id="tab-btn-3" onClick={this.displayTab}>{this.props.t('tabs.title_3')}</a></li>
              </ul>
            </div>
          </div>
          <div className="column is-1" style={{ paddingBottom: '0' }}></div>
        </div>
        <div style={this.state.displayedTab != 1 ? { display: "none" } : {}}>
          <Hero t={this.props.t}/>
          <Info t={this.props.t}/>
        </div>
        <div style={this.state.displayedTab != 2 ? { display: "none" } : {}}>
          <Program t={this.props.t}/>
        </div>
        <div style={this.state.displayedTab != 3 ? { display: "none" } : {}}>
          <Why t={this.props.t}/>
        </div>
        <Modal t={this.props.t}/>
        <Footer t={this.props.t}/>
      </div>
    );
  }
}

export default withNamespaces()(App);
