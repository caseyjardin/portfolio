import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
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
        <ul className="copyright">
          <li>Created with react.js 2019</li>
          <li>Created with react.js 2019</li>
          <li>Created with react.js 2019</li>
          <li>Created with react.js 2019</li>
        </ul>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="fas fa-chevron-up"/>
          </a>
        </div>
      </footer>
    );
  }
}
