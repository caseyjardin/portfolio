import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    const { networks } = this.props.resumeData.header;
    return (
      <footer>
        <ul className="mt-3 social-links">
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
        {/*<ul className="copyright">*/}
          {/*<li>Created with react.js 2019</li>*/}
          {/*<li>Created with react.js 2019</li>*/}
          {/*<li>Created with react.js 2019</li>*/}
          {/*<li>Created with react.js 2019</li>*/}
        {/*</ul>*/}
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="fas fa-chevron-up"/>
          </a>
        </div>
      </footer>
    );
  }
}
