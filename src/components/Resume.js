import React, {Component} from 'react';
import SkillBar from 'react-skillbars';

const colors = {
  "bar": {
    "hue": 202,
    "saturation": 61,
    "level": {
      "minimum": 61,
      "maximum": 20
    }
  },
};

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
                  <div className="col-xs-12 col-md-7">
                    
                    {/* PRIMARY ROLE */}
                    <p className="lead">Primary Role</p>
                    <p>{item.description}</p>
                    
                    {/* SPECIALIZATION */}
                    <p className="lead">Specialization</p>
                    <SkillBar skills={item.skills} height={18} colors={colors} />
                    
                    {/* ACHIEVEMENTS */}
                    <p className="lead">Achievements</p>
                    <ul className="achievements">
                      {
                        item.achievements && item.achievements.map((skill, idx) => {
                          return (
                            <li key={`skill-${idx}`}><p>{skill}</p></li>
                          )
                        })
                      }
                    </ul>
                    
                  </div>
                  
                  {/* IMAGES COLUMN */}
                  <div className="col-xs-12 col-md-5">
                    <p className="lead">Sample Work</p>
                    {
                      item.samples && item.samples.map((img, idx) => {
                        return (
                          <img key={`img-${idx}`} src={`images/portfolio/${img}`} className="mb-1" alt={img}/>
                        )
                      })
                    }
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
    <div className="row">
      <div className="col-xs-12 col-md-3">
        <h2>Freelance</h2>
      </div>
      <div className="content col-xs">
        {
          resumeData.freelance.map((item, idx) => (
            <div key={`work-${idx}`} className="item">
              
              {/* COMPANY NAME + TITLE */}
              <div className="headline">
                <p>{item.title}</p>
                <h3>{item.company}</h3>
              </div>
              
              <div className="body">
                <div className="row">
                  <div className="col-xs-12 col-md-7">
                    
                    {/* PRIMARY ROLE */}
                    <p className="lead">Primary Role</p>
                    <p>{item.description}</p>
                    
                    {/* SPECIALIZATION */}
                    <p className="lead">Specialization</p>
                    <SkillBar skills={item.skills} height={18} />
                    
                    
                    {/*<ul className="stack">*/}
                    {/*{*/}
                    {/*item.skills && item.skills.map((achievement, idx) => {*/}
                    {/*return (*/}
                    {/*<li key={`skill-${idx}`} className="specialization"><i*/}
                    {/*className="far fa-check-square"/> {achievement}</li>*/}
                    {/*)*/}
                    {/*})*/}
                    {/*}*/}
                    {/*</ul>*/}
                    
                    {/* ACHIEVEMENTS */}
                    <p className="lead">Achievements</p>
                    <ul className="achievements">
                      {
                        item.achievements && item.achievements.map((skill, idx) => {
                          return (
                            <li key={`skill-${idx}`}><p>{skill}</p></li>
                          )
                        })
                      }
                    </ul>
                  
                  </div>
                  
                  {/* IMAGES COLUMN */}
                  <div className="col-xs-12 col-md-5">
                    <p className="lead">Sample Work</p>
                    
                    <div className="images">
                      {
                        item.samples && item.samples.map((img, idx) => {
                          return (
                            <img key={`img-${idx}`} src={`images/portfolio/${img}`} className="mb-1" alt={img}/>
                          )
                        })
                      }
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

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        { resumeData.work && <Work {...resumeData} /> }
        <Freelance {...resumeData} />
      </section>
    );
  }
}
