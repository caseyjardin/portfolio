import React, {Component} from 'react';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="video-container">
    
          <video autoPlay loop muted width="1280" height="720">
            <source type="video/mp4" src="https://www.mbusa.com/vcm/MercedesMe/DigitalAssets/Homepage/UA-HOMEPAGE-HERO-VIDEO.mp4" />
          </video>
    
          <div className="overlay">
            <h2>Let’s Create Something Amazing!</h2>
            <p>
              I’m open to full-time Front-End Engineering opportunities with a company who wants to improve the world!
              I am also available for freelance work. Click the icons below to get in touch!
            </p>
            <div class="video-caption">
              <small>Like the background video? I helped create the app, and more!</small>
              <small><i className="fas fa-link" /> <a href="https://www.mbusa.com/mercedesme/" rel="noopener noreferrer" target="_blank">mbusa.com</a> | Mercedes-Benz USA, LLC, Senior Developer</small>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
}
