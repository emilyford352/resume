import React, { Component } from 'react';

class TimeLineObject extends Component {
  render() {
    return (
      <div className="row">
          <div className="timeline-date col-md-2 offset-2">
              <div className="position-dates">
                  {this.props.dates}
              </div>
          </div>
          <div className="timeline-object col-md-5 col-sm-5">
              <div>
                  <h5 className="timeline-object-title">
                      {this.props.title}
                  </h5>
                  <div className="timeline-object-position">
                      {this.props.position}
                  </div>
                  <div className="description">
                      {this.props.description}
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default TimeLineObject;
