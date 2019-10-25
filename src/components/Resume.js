import React, {Component} from 'react';

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        
        
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Agency Life</span></h1>
          </div>
          
          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item, idx) => {
                return (
                  <div key={`work-${idx}`} className="row item">
                    <div className="twelve columns">
                      <h3>{item.company}</h3>
                      <p className="info">
                        {item.title}
                        <span>&bull;</span>
                        <em className="date">{item.startDate} &mdash; {item.endDate}</em>
                      </p>
                      <p>{item.description}</p>
                      <ul className="achievements">
                        {
                          item.achievements && item.achievements.map((skill, idx) => {
                            return (
                              <li key={`skill-${idx}`} className="specialization"> {skill}</li>
                            )
                          })
                        }
                      </ul>
                      
                      <p className="info">Specialization</p>
                      
                      
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
        
        {/* FREELANCE */}
        <div className="row freelance">
          
          <div className="three columns header-col">
            <h1><span>Freelance</span></h1>
          </div>
          
          <div className="nine columns main-col">
            {
              resumeData.freelance && resumeData.freelance.map((item) => {
                return (
                  <div className="row item">
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
        
        
        <div className="row skill">
          
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
      
      </section>
    );
  }
}
