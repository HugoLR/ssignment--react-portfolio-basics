import React, { Component } from "react";

import Header from "./Header"
import Summary from "./Summary"
import ContactInfo from "./ContactInfo"
import SkillsList from "./SkillsList"
import EducationHistory from "./EducationHistory"
import WorkHistory from "./WorkHistory"

class PortfolioContent extends Component {
  render() {
    return (
      <div className="portfolio-content">
        <Header />
        <Summary />
        <ContactInfo />
        <SkillsList enrique = {this.props.hugo}/>
        <EducationHistory  education = {this.props.education}/>
        <WorkHistory  work = {this.props.work}/>
      </div>
    )
  }
}

export default PortfolioContent
