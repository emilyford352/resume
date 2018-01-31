import React, { Component } from 'react';

class SkillTree extends Component {
  render() {
    return (
      <div className="tree-branch">
        <div className="skillName">
            {this.props.skillName}
        </div>
      </div>
    );
  }
}

export default SkillTree;
