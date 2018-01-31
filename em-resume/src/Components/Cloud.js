import React, { Component } from 'react';

class Cloud extends Component {
  render() {
    return (
      <div className={this.props.cloudType}>
          <i className="fa fa-cloud"></i>
      </div>
    );
  }
}

export default Cloud;
