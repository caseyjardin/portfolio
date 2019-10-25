import React, {Component} from 'react';
import profile_image from '../styles/images/profilepic.png';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            {/* LEFT COLUMN */}
            <div className="col-lg-3">
              <img src={profile_image} alt="Casey Jardin"/>
            </div>
            {/* RIGHT COLUMN */}
            <div className="col-lg-9">
              <h2>About Me</h2>
              <p>{resumeData.aboutme}</p>
              <h2>Contact Details</h2>
              <ul className="address">
                <li>{resumeData.name}</li>
                <li>{resumeData.address}</li>
                <li>{resumeData.email}</li>
              </ul>
              <div className="col-xs contact-details">
                <a href="/" className="btn btn-block btn-lg btn-primary">
                  <i className="fas fa-file-pdf"/>
                  Generic Button
                </a>
                <a href="/" className="btn btn-block btn-lg btn-secondary">
                  <i className="fas fa-file-pdf"/>
                  Generic Button
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
