import React, { Component } from 'react';
import image_frame from '../styles/images/polaroid.png';
import profile_image from '../styles/images/profilepic.png';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          {/* LEFT COLUMN */}
          <div className="three columns">
            <div className="profile-image">
              {/*<img className="profile-image__frame" src={image_frame} alt="Casey Jardin"/>*/}
              <img className="profile-image__background" src={profile_image} alt="Casey Jardin"/>
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <ul className="address">
                  <li>{resumeData.name}</li>
                  <li>{resumeData.address}</li>
                  <li>{resumeData.email}</li>
                </ul>
              </div>
              <a href="/" className="button"><i className="fas fa-file-pdf"/>Download CV</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
