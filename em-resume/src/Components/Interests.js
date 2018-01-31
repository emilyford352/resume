import React, { Component } from 'react';
import Eevee from '../Images/eevee.png';
import Duncan from '../Images/duncan.png';
import PinkDuncan from '../Images/duncanpink.png';
import BlueDuncan from '../Images/duncanblue.png';

class Interests extends Component {
  render() {
    return (
      <div className="Interests">
        <div className="container">
            <div className="row">
              <div className="col-md-6 offset-3">
                  <h1>
                      Interests
                  </h1>
                  <div>
                    When I'm not programming, you can usually find me walking my dog or posting pictures of my cat
                      doing strange cat things! I also recently did stand up comedy for the first time. Get my autograph
                      for when I make it big.
                  </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Interests;
