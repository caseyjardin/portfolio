import React, {Component, Fragment} from 'react';
import SkillBar from 'react-skillbars';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
              <div className="content__header">
                <img className="content__logo" src={item.logo} alt={item.company} />
                <div className="content__headline">
                  <p>{item.title}</p>
                  <h3>{item.company}</h3>
                </div>
              </div>
              <div className="body">
                <div className="row">
                  <div className={`col-xs-12 ${item.samples ? "col-md-7" : "col-md-12" }`}>
                    
                    { item.description &&
                      <Fragment>
                        <ul className="description mb-5">{
                          item.description.map( (data,idx) => <li key={`description-${idx}`}>
                            {
                              item.description[idx]
                            }
                          </li> )
                        }</ul>
                      </Fragment>
                    }
  
                    { item.skills &&
                      <section className="skills mb-3">
                        <p className="lead">Specialization</p>
                        <SkillBar skills={item.skills} height={18} colors={colors} animationDelay={250} animationDuration={1000} />
                      </section>
                    }
                    
                    { item.achievements &&
                      <section className="achievements">
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
                      </section>
                    }
                  </div>
                  
                  { item.samples &&
                    <div className="col-xs-12 col-md-5">
                      <p className="lead">Sample Work</p>
                      <Carousel showThumbs={true} showIndicators={false} dynamicHeight emulateTouch infiniteLoop autoPlay>
                        { item.samples.map((img, idx) => {
                          return (
                            <div>
                              <img key={`img-${idx}`} src={`images/portfolio/${img}`} className="mb-1" alt={img}/>
                            </div>
                          )
                        })
                        }
                      </Carousel>
                    </div>
                  }
                  
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
              <div className="content__header">
                <img className="content__logo" src={item.logo} alt={item.company} />
                <div className="content__headline">
                  <p>{item.title}</p>
                  <h3>{item.company}</h3>
                </div>
              </div>
              <div className="body">
                <div className="row">
                  <div className="col-xs-12">
                    { item.description &&
                      <ul className="description mb-5">{
                        item.description.map( (data,idx) => <li key={`description-${idx}`}>
                          {
                            item.description[idx]
                          }
                        </li> )
                      }</ul>
                    }
                  </div>
                  <div className="col-xs-12 col-md-7">
  
                    { item.skills &&
                      <section className="skills mb-3">
                        <p className="lead">Specialization</p>
                        <SkillBar skills={item.skills} height={18} colors={colors} animationDelay={250} animationDuration={1000} />
                      </section>
                    }
  
                    { item.achievements &&
                    <section className="achievements">
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
                    </section>
                    }
                  </div>
                  
                  { item.samples &&
                    <div className="col-xs-12 col-md-5">
                      <p className="lead">Sample Work</p>
                      { item.samples.map((img, idx) => {
                        return (
                          <img key={`img-${idx}`} src={`images/portfolio/${img}`} className="mb-1" alt={img}/>
                        )
                      })
                      }
                    </div>
                  }
                  
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
        {/*<Freelance {...resumeData} />*/}
      </section>
    );
  }
}
