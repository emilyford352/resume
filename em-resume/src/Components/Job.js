import React, { Component } from 'react';

class Job extends Component {
  render() {
    //const title = 'Black Duck Software';
    //const description = 'Really cool engineer';
    return (
      <div className="job">
          <h5>
              {this.props.title}
          </h5>
          <div className="position">
              {this.props.position}
          </div>
          <div className="position-dates">
              {this.props.dates}
          </div>
          <div className="description">
              {this.props.description}
          </div>
      </div>
    );
  }
}

export default Job;
