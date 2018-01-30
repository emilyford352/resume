import React, { Component } from 'react';
import Eevee from '../Images/eevee.png';
import Duncan from '../Images/duncan.png';
import PinkDuncan from '../Images/duncanpink.png';
import BlueDuncan from '../Images/duncanblue.png';

class Interests extends Component {
  render() {
    return (
      <div className="Interests">
        <h1>
          Interests
        </h1>
        <div className="row">
          <div className="col-md-6">
            When I'm not programming, you can usually find me walking my dog or posting pictures of my cat doing strange cat things! I also recently did stand up comedy for the first time. Get my autograph for when I make it big.
            <img src={Eevee} alt="Emily" />
            <img src={Duncan} alt="Emily" />

          </div>
        </div>
      </div>
    );
  }
}

export default Interests;
