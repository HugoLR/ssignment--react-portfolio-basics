import React, {Component} from 'react'

class Skill extends Component {
  render() {
    return (
      <span className="skills-list__single">
         {/* pass in skill string as props in <SkillsList/> component*/}
        {this.props.name}
      </span>
    );
  }
}

export default Skill
