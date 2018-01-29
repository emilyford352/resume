import React, { Component } from 'react';
import MetaLinks from './MetaLinks';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header text-center">
          <h1 className="App-title">Emily Mame Ford</h1>
          <p> Acton, MA </p>
          <MetaLinks />
        </header>
      </div>
    );
  }
}

export default Header;
