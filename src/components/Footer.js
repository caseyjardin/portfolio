import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
        
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {
                resumeData.socialLinks && resumeData.socialLinks.map((item, idx) => {
                  return (
                    <li key={`link-${idx}`}>
                      <a href="/">
                        <i className={item.className}/>
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="fas fa-chevron-up"/>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
