import React, { Component } from 'react';
//import logo from './eevee.png';
import profileImage from '../Images/emily.jpg';

class ImagePane extends Component {
  render() {
    return (
      <div className="ImagePane">
        <div className="row">
            <div className="col-md-4 col-centered profile-image-container">
                <img src={profileImage} className="profile-image" alt="Emily" />
            </div>
        </div>
      </div>
    );
  }
}

export default ImagePane;
