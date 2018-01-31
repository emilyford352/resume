import React, { Component } from 'react';
//import logo from './eevee.png';
import profileImage from '../Images/emily.png';
import ReactTooltip from 'react-tooltip'

class ImagePane extends Component {
  render() {
    return (
      <div className="ImagePane" data-tip="Emily Mame Ford">
          <ReactTooltip />
          <div className="row">
              <div className="col-centered">
                <img src={profileImage} className="profile-image" alt="Emily" />
              </div>
          </div>
      </div>
    );
  }
}

export default ImagePane;
