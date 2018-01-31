import React, { Component } from 'react';
import Cloud from './Cloud';

class Overlay extends Component {
  render() {
    return (
      <div id="overlay">
          <div className="clouds">
            <Cloud cloudType="cloud cloud-1"/>
            <Cloud cloudType="cloud cloud-2"/>
            <Cloud cloudType="cloud cloud-3"/>
            <Cloud cloudType="cloud cloud-4"/>
            <Cloud cloudType="cloud cloud-1"/>

        </div>
          <div className="welcome-screen">
              <div className="welcome">
                  Welcome!
              </div>
              <div>
                  Emily Mame Ford's Interactive Resume - click anywhere to enter
              </div>
          </div>
      </div>
    );
  }
}

export default Overlay;
