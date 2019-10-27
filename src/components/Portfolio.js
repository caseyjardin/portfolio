import React, {Component, Fragment} from 'react';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      
      
      <Fragment>
  
        <section id="aig">
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
  
  
        {/*<section id="portfolio">*/}
          {/*<div className="row">*/}
            {/*<div className="twelve columns collapsed">*/}
              {/*<h1>Check Out Some of My Works.</h1>*/}
              {/*<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">*/}
                {/*{*/}
                  {/*resumeData.portfolio && resumeData.portfolio.map((item, idx) => {*/}
                    {/*return (*/}
                      {/*<div key={`item-${idx}`} className="columns portfolio-item">*/}
                        {/*<div className="item-wrap">*/}
                          {/*<a href={`#modal-${idx}`}>*/}
                            {/*<img src={`${item.imgurl}`} className="item-img" alt="img description"/>*/}
                            {/*<div className="overlay">*/}
                              {/*<div className="portfolio-item-meta">*/}
                                {/*<h5>{item.name}</h5>*/}
                                {/*<p>{item.description}</p>*/}
                              {/*</div>*/}
                            {/*</div>*/}
                          {/*</a>*/}
                        {/*</div>*/}
                      {/*</div>*/}
                    {/*)*/}
                  {/*})*/}
                {/*}*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</section>*/}
      </Fragment>
      
      
    );
  }
}
