import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <h2>Let’s Be Friends</h2>
              <div className="row">
                <p className="lead">I’m currently seeking a great Front-End Designer & Developer position with a company who wants to improve the world!</p>
                <p className="lead">I am also available for freelance work. Click the icons below to be redirected to my social media, email or phone number!</p>
              </div>
              
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  {resumeData.linkedinId}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
