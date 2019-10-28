import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    const {
      background,
      specialization,
      introduction,
      networks
    } = this.props.resumeData.header;
    const {
      name
    } = this.props.resumeData;
    return (
      <header id="home" style={{ backgroundImage: `url(${background})` }}>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          {/*<button className="mobile-btn" title="Hide navigation">Hide navigation</button>*/}
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav>
        
        <div className="row banner">
          <div className="banner-text container">
            <h1 className="responsive-headline">I am {name}.</h1>
            <h3>I am a {specialization}. {introduction}</h3>
            <ul className="mt-3 social">
              {
                networks && networks.map(item => {
                  return (
                    <li key={item.name}>
                      <a href={item.url} rel="noopener noreferrer" target="_blank"><i className={item.className} /></a>
                    </li>
                  )
                  }
                )
              }
            </ul>
          </div>
        </div>
        
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="fas fa-chevron-down"/>
          </a>
        </p>
        
      </header>
    );
  }
}
