import React, { Component } from 'react';
import Eevee from '../Images/eevee.png';

class Interests extends Component {
  render() {
    return (
      <div className="Interests">
        <h1>
          Interests
        </h1>
        <p>
          When I'm not programming, you can usually find me walking my dog or posting pictures of my cat doing strange cat things! I also recently did stand up comedy for the first time. Get my autograph for when I make it big.
          <img src={Eevee} className="profile-image" alt="Emily" />
        </p>
      </div>
    );
  }
}

export default Interests;
