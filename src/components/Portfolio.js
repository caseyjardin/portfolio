import React, {Component} from 'react';

export default class Porfolio extends Component {
  render() {
    return (
      <section id="aig" className="hidden-mobile">
        
        <div className="video-container">
          <video autoPlay loop muted width="1280" height="720">
            <source type="video/mp4" src="http://www.caseyjardin.com/video-aig.mp4"/>
          </video>
          <div className="overlay">
            <h2>AIG Retirement Services</h2>
            <p>I’m open to full-time Front-End Engineering opportunities with a company who wants to improve the world! I am also available for freelance work. Click the icons below to get in touch!</p>
            <div className="video-caption">
              <small>Like the background video? I helped create the app, and more!</small>
              <small><i className="fas fa-link"/> <a href="https://www.valic.com" rel="noopener noreferrer" target="_blank">valic.com</a> | American International Group, Inc, Senior Track Lead of Development</small>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
