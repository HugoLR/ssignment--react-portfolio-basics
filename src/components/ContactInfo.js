import React, { Component } from "react";

class ContactInfo extends Component {
  render() {
    return (
      <section>
          <div className="contactinfo">
            <a className="contactinfo__single" target="_blank">
              <i className="ion-ios-location-outline contactinfo__icon"></i>
              <span className="contactinfo__title">Metepc,Edo de México</span>
            </a>
            <a href="#" className="contactinfo__single" target="_blank">
              <i className="ion-ios-email-outline contactinfo__icon"></i>
              <span className="contactinfo__title">hugo94ronal@gmail.com</span>
            </a>
            <a href="#" className="contactinfo__single" target="_blank">
              <i className="ion-social-github-outline contactinfo__icon"></i>
              <span class="contactinfo__title">HugoLr</span>
            </a>
            <a href="#" className="contactinfo__single" target="_blank">
              <i className="ion-social-linkedin-outline contactinfo__icon"></i>
              <span className="contactinfo__title">Hugo David Luna Reyes </span>
            </a>
          </div>
        </section>
    )
  }
}

export default ContactInfo
