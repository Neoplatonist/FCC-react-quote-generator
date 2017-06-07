import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper blue">
              <a className="brand-logo center">Quote Generator</a>
            </div>
          </nav>
        </div>

        <div id="notification" className="orange center">{ this.props.notification }</div>
      </header>
    );
  }
}
