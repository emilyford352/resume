import React, { Component } from 'react';
import Job from './Job';

class WorkExperience extends Component {
  render() {
    return (
      <div className="WorkExperience col-md-5">
        <h1>
          Work Experience
        </h1>
        <div>
          <Job title="Synopsys" dates="1/17-Present" position="Software Engineer" description="we got bought"/>
          <Job title="Black Duck Software" dates="5/17-12/17" position="Software Engineer" description="the coolest ever"/>
          <Job title="Black Duck Software" dates="9/16-5/17" position="QA Engineer" description="tested stuff"/>
          <Job title="C Squared Systems" dates="" position="QA Intern" description="test"/>
          <Job title="Virgin Pulse" dates="" position="QA Analyst" description="teststuff"/>
        </div>
      </div>
    );
  }
}

export default WorkExperience;
