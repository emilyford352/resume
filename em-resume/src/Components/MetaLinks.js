import React, { Component } from 'react';

class MetaLinks extends Component {
  render() {
    return (
      <div className="MetaLinks">
          <div className="meta-link">
              <a title="GitHub" href="https://github.com/emilyford352">
                  <i className="fa fa-github"></i>
              </a>
          </div>
          <div className="meta-link">
              <a title="LinkedIn" href="https://www.linkedin.com/in/emily-ford-2385419b/">
                  <i className="fa fa-linkedin"></i>
              </a>
          </div>
          <div className="meta-link">
              <a title="Paper Resume" href="./resume.pdf">
                  <i className="fa fa-file-text-o"></i>
              </a>
          </div>
      </div>
    );
  }
}

export default MetaLinks;
