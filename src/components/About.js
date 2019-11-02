import React from 'react';
import profile_image from '../styles/images/profilepic.png';
import CaveFox from '../styles/images/fox.png';

export const About = props => {
  const {
    description,
    networks,
  } = props.resumeData.about;
  const {
    name
  } = props.resumeData;
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <img src={profile_image} alt={name} className="hidden-xs" />
          </div>
          <div className="col-lg-9">
            <h2>About Me</h2>
            <p>{description}</p>
            {/*<h2>Let's Be Friends!</h2>*/}
            {/*<ul className="contact-info">*/}
              {/*{ networks && networks.map( (item, idx) => item.url !== null ?*/}
              {/*// ICON WITH A LINK*/}
              {/*<li key={`item-${idx}`}>*/}
                {/*<a href={item.url} rel="noopener noreferrer" target="_blank">*/}
                  {/*<h3><i className={item.icon} /></h3>*/}
                  {/*<p>{item.name}</p>*/}
                {/*</a>*/}
              {/*</li> :*/}
              {/*// ICON WITHOUT A LINK*/}
              {/*<li key={`item-${idx}`}>*/}
                {/*<h3><i className={item.icon} /></h3>*/}
                {/*<p>{item.name}</p>*/}
              {/*</li>*/}
              {/*)}*/}
            {/*</ul>*/}
            <div className="col-xs contact-details">
              <a href="http://www.caseyjardin.com/resume_casey-jardin.pdf" rel="noopener noreferrer" target="_blank" className="btn btn-lg btn-block btn-primary">
                <i className="fas fa-file-pdf"/>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <img className='cave-fox' src={CaveFox} alt="cave fox"/>
    </section>
  )
};

// TODO: refactor contact-details
// TODO: Move cavefox to API
// TODO: Make background dynamic from URL

