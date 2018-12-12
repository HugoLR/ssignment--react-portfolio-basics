import React, {Component} from 'react'
// import Job components
import Job from "./Job"

class WorkHistory extends Component {
  /*getJobs(){
    var jobsInJsx = jobsList.map(function(job){
      return <Job title = {job.title}
                  enterprise = {job.company}
                  description = {job.description}
                  begin = {job.years.start}
                  finish = {job.years.end} />
    });
    return jobsInJsx;
  }*/
  render() {
    console.log('???');
    /* receive `jobsList` array as props from App compnonent */

    return (
      <section>
        <h4>Work Experience</h4>
        <div className="skills-list">

            {
                this.props.work.map(function(job){
                return <Job title = {job.title }
                        enterprise = {job.company}
                        description = {job.start}
                        begin = {job.years.end}
                        finish = {job.years.end}/>
              })
            }

            { /*
                map over jobsList array and return an array of <Job/> components
                NOTE: you must pass values from each education object
                      to the <EduTitle> component as props...
              */

            }

        </div>
      </section>
    )
  }
}

export default WorkHistory;
