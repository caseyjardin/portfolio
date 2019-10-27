import React, {Component} from 'react';

const Work = (resumeData) => (
  <div className="work container">
    <div className="row">
      <div className="col-xs-12 col-md-3">
        <h2>Agency Life</h2>
      </div>
      <div className="content col-xs">
        {
          resumeData.work.map((item, idx) => (
            <div key={`work-${idx}`} className="item">
              
              {/* COMPANY NAME + TITLE */}
              <div className="headline">
                <p>{item.title}</p>
                <h3>{item.company}</h3>
              </div>
              
              <div className="body">
                <div className="row">
                  <div className="col-xs-7">
                    
                    {/* PRIMARY ROLE */}
                    <p className="lead">Primary Role</p>
                    <p>{item.description}</p>
                    
                    {/* SPECIALIZATION */}
                    <p className="lead">Specialization</p>
                    <ul className="stack">
                      {
                        item.skills && item.skills.map((achievement, idx) => {
                          return (
                            <li key={`skill-${idx}`} className="specialization"><i
                              className="far fa-check-square"/> {achievement}</li>
                          )
                        })
                      }
                    </ul>
                    
                    {/* ACHIEVEMENTS */}
                    <p className="lead">Achievements</p>
                    <ul className="achievements">
                      {
                        item.achievements && item.achievements.map((skill, idx) => {
                          return (
                            <li key={`skill-${idx}`} className="specialization"> {skill}</li>
                          )
                        })
                      }
                    </ul>
                    
                  </div>
                  
                  {/* IMAGES COLUMN */}
                  <div className="col-xs-5">
                    <div className="images">
                      <small>Michelin Tire Comparator Kiosk</small>
                      <img src="images/portfolio/tire-compare/1.jpg" alt=""/>
                      <img src="images/portfolio/tire-compare/2.jpg" alt=""/>
                      <img src="images/portfolio/tire-compare/3.jpg" alt=""/>
                      <img src="images/portfolio/tire-compare/4.jpg" alt=""/>
                      <img src="images/portfolio/tire-compare/5.jpg" alt=""/>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
);

const Freelance = (resumeData) => (
  <div className="freelance container">
    
    <div className="three columns header-col">
      <h1><span>Freelance</span></h1>
    </div>
    
    <div className="nine columns main-col">
      {
        resumeData.freelance && resumeData.freelance.map((item) => {
          return (
            <div className=" item">
              <div className="twelve columns">
                <h3>{item.company}</h3>
                <p className="info">
                  {item.title}
                  <span>&bull;</span> <em className="date">{item.startDate} {item.endDate}</em></p>
                <p>{item.description}</p>
                <ul className="achievements">
                  {
                    item.achievements && item.achievements.map((skill, idx) => {
                      return (
                        <li key={`skill-${idx}`} className="specialization"><i
                          className="far fa-check-square"/> {skill}</li>
                      )
                    })
                  }
                </ul>
                <ul className="stack">
                  {
                    item.skills && item.skills.map((achievement, idx) => {
                      return (
                        <li key={`skill-${idx}`} className="specialization"><i
                          className="far fa-check-square"/> {achievement}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          )
        })
      }
    </div>
  </div>
);

const Skills = (resumeData) => (
  <div className="skill container">
    
    <div className="three columns header-col">
      <h1><span>Skills</span></h1>
    </div>
    
    <div className="nine columns main-col">
      
      <p>
        {resumeData.skillsDescription}
      </p>
      
      <div className="bars">
        
        <ul className="skills">
          {
            resumeData.skills && resumeData.skills.map((item, idx) => {
              return (
                <li key={`skill-${idx}`}>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                </li>
              )
            })
          }
        
        </ul>
      
      </div>
    
    </div>
  
  </div>
);

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        { resumeData.work && <Work {...resumeData} /> }
        {/*<Freelance {...resumeData} />*/}
        {/*<Skills {...resumeData} />*/}
      </section>
    );
  }
}
