import React, { Component } from 'react';
import Branch from './Branch';

class SkillTree extends Component {
  render() {
    return (
      <div className="tree-container">
        <h1>
            Languages, Frameworks, oh my!
        </h1>
        <div className="tree">
            <Branch skillName="Javascript"/>
            <Branch skillName="Node"/>
            <Branch skillName="Backbone"/>
            <Branch skillName="Marionette"/>
            <Branch skillName="React"/>
            <Branch skillName="Pug"/>
            <Branch skillName="Express"/>
            <Branch skillName="HTML/CSS"/>
            <Branch skillName="HTML/CSS"/>
            <Branch skillName="C"/>
            <Branch skillName="Python"/>
            <Branch skillName="Java"/>
            <Branch skillName="Selenium"/>
            {/*
            <div className="tree-base-top">

            </div>

            <div className="tree-base">

            </div>

            <div className="tree-base-bottom">


            </div>
            */}
        </div>
      </div>
    );
  }
}

export default SkillTree;