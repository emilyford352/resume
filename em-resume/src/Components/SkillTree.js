import React, { Component } from 'react';
import Branch from './Branch';

class SkillTree extends Component {
  render() {
    return (
      <div className="tree-container col-md-6 offset-3 data-section">
        <h1>
            Languages & Frameworks
        </h1>
        <div className="tree">
            <Branch skillName="Javascript"/>
            <Branch skillName="Node"/>
            <Branch skillName="Backbone"/>
            <Branch skillName="Marionette"/>
            <Branch skillName="React"/>
            <Branch skillName="HTML/CSS"/>
            <Branch skillName="Pug"/>
            <Branch skillName="Express"/>
            <Branch skillName="C"/>
            <Branch skillName="Python"/>
            <Branch skillName="Java"/>
            <Branch skillName="Selenium"/>
        </div>
      </div>
    );
  }
}

export default SkillTree;