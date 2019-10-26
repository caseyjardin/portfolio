import React, {Component} from 'react';
import profile_image from '../styles/images/profilepic.png';
import fox from '../styles/images/fox.png';

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
              <h2>Let's Be Friends!</h2>
              
              {/* CONTACT DETAILS */}
              <ul className="contact-info">
                <li>
                  <a href="mailto:caseyjardin@gmail.com">
                    <h3><i className="fab fa-google" /></h3>
                    <p>gmail</p>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/12345678900" rel="noopener noreferrer" target="_blank">
                    <h3><i className="fab fa-whatsapp" /></h3>
                    <p>WhatsApp</p>
                  </a>
                </li>
                <li>
                  <h3><i className="fab fa-discord" /></h3>
                  <p>ForFoxSake#7077</p>
                </li>
                <li>
                  <h3><i className="fab fa-playstation" /></h3>
                  <p>funkopoprox</p>
                </li>
                <li>
                  <h3><i className="fab fa-battle-net" /></h3>
                  <p>alpha1337#1197</p>
                </li>
              </ul>
              
              <div className="col-xs contact-details">
                <a href="/" className="btn btn-lg btn-block btn-primary">
                  <i className="fas fa-file-pdf"/>
                  Download Resume
                </a>
                <img className='cave-fox' src={fox} alt="cave fox" />
              </div>
            </div>
          </div>
  
          
          
          {/*<div className="overlay" />*/}
        </div>
      </section>
    );
  }
}
