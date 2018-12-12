
import React, {Component} from 'react'

class Job extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="job">
    <div className="job__years">
      <h6 className="job__end">{this.props.end}</h6>
      <h6 className="job__start">{this.props.begin}</h6>
    </div>
    <h5 className="job__title">{this.props.title}</h5>
    <h5 className="job__company">{this.props.enterprise}</h5>
    <p className="job__description">{this.props.description}</p>
  </div>
    );
  }
}

export default Job
