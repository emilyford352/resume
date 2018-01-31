import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe data-section">
          <div className="container">
              <div className="row">
                  <div className="col-md-6 offset-3">
                    <h1>
                      About Me
                    </h1>
                    <p>
                      Hi! I'm Emily. I'm an extremely driven, passionate and creative Front End Software Engineer. I love JavaScript,
                      my pets and any and all puns. I'm currently learning React JS in my spare time (this site was built in React)
                        among other things!
                        Take a look around or download the PDF version of my resume!
                    </p>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default AboutMe;
