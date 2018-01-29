import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <header className="App-footer">
          <h1 className="App-title">Emily Mame Ford</h1>
          <p> Acton, MA </p>
          <div className="row text-center">
              <a title="GitHub" href="https://github.com/emilyford352">
                  <i className="fa fa-github col-sm-1"></i>
              </a>
              <a title="LinkedIn" href="https://www.linkedin.com/in/emily-ford-2385419b/">
                  <i className="fa fa-linkedin col-sm-1"></i>
              </a>
              <a title="Paper Resume" href="./resume.pdf">
                <i className="fa fa-file-text-o col-sm-1"></i>
              </a>
          </div>
        </header>
      </div>
    );
  }
}

export default Footer;
