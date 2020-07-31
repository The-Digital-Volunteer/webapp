import React from "react";
import {Link} from "react-router-dom";

import Footer from "../footer";
import Button from "react-bootstrap/Button";
import ReactPlayer from "react-player";

import personHeart from "../../assets/img/person-heart.svg";
import handHeart from "../../assets/img/hand-heart.svg";
import lockHeart from "../../assets/img/lock-heart.svg";
import chat from "../../assets/img/chat.png"

class Home extends React.Component {

  render() {

    return (
        <section id="home">
          <div id="hero">
            <div id="vertical-separator"></div>
            <div id="hero-cta">
              <h1>Help has arrived!</h1>
              <p>
                
COVID-19 has disrupted billions of lives and endangered the global economy, 
<br/>creating an unprecedented human crisis. TheHeroLoop is a socio-economic <br/>
recovery and response ecosystem to COVID-19, to support countries’paths to <br/>social  
and economic recovery. Worldwide.
<br/><br/>
Millions of people are isolated within their homes, unable to shop for food, pickup
<br/> up medications, or travel to doctorappointments. TheHeroLoop hopes to solve <br/>
that problem by connecting Loopers with Heros in local communities to help each other.

              </p>
              <Button href="#claim" className="helper-btn">Learn more</Button>
            </div>
          </div>
          <div id="claim">
            <div className="claim-overlay"></div>
            <div className="wrapper">
              <h1>TheHeroLoop</h1>
              <p>
                HeroLoop is a tool that connects volunteers with people who need
                help with getting food, medication and similar tasks. Click on
                whether you want to help or be helped
              </p>
              <div className="claim-actions">
                <Link to="/welcome">
                  <Button className="helper-btn">I want to help others</Button>
                </Link>
                <Link to="/welcome">
                  <Button className="receiver-btn">I need help</Button>
                </Link>
              </div>
            </div>
          </div>

          <div id="home-video">
            <div className="play">
              <ReactPlayer id="video-player" url="https://www.youtube-nocookie.com/embed/x2y6PHHsJio" />
            </div>
          </div>

          <div className="wrapper">
            <h1>What is TheHeroLoop?</h1>
            <p>
              TheHeroLoop is a digital ecosystem that connects Heros with people in need of help - Loopers, 
			                      with getting food, picking up medications, transportation, and other tasks.
            </p>
            <div className="separator"></div>
          </div>

          <div id="home-info">
            <div className="wrapper">
              <h1>How does TheHeroLoop work?</h1>
              <div className="home-feature-list">
                <div className="home-feature">
                  <img alt="" src={personHeart} />
                  <p>
                    Ask For Help<br/>
					The Looper sends a request for help to Hero’s 
					within a 20 km radius in your area.

                  </p>
                </div>
                <div className="home-feature">
                  <img alt="" src={handHeart} />
                  <p>
                    Provide Help<br/>
					Local Hero’s review and accept the requests 
					they can help with.

                  </p>
                </div>
                <div className="home-feature">
                  <img alt="" src={lockHeart} />
                  <p>
                    Digital Security<br/>
					Your personal information is protected by 
					blockchain encryption.

                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="roadmap">
            <div className="wrapper">
              <h2>Roadmap</h2>
              <div className="roadmap-feature-list">
                <div className="roadmap-feature">
                  <img alt ="" className="roadmap-icon" src={chat}/>
                  <h5>Milestone</h5>
                  <h6 className="roadmap-date" >
					AI/ML NLTK libraries forfiltering toxic use is now implemented
					30 July 2020
				  </h6>
                  <div className="separator"></div>
                </div>
                <div className="roadmap-feature">
                  <img alt ="" className="roadmap-icon" src={chat}/>
                  <h5>Milestone</h5>
                  <h6 className="roadmap-date" >Landline voicenotes are now converted to requests on the map
					27 July 2020</h6>
                  <div className="separator"></div>
                </div>
                <div className="roadmap-feature">
                  <img alt ="" className="roadmap-icon" src={chat}/>
                  <h5>Milestone</h5>
                  <h6 className="roadmap-date" >Encrypted DID login generating a hash id by Blockstack 
					25 July 2020</h6>
                  <div className="separator"></div>
                </div>
                <div  className="roadmap-feature">
                  <img alt ="" className="roadmap-icon" src={chat}/>
                  <h5>Milestone</h5>
                  <h6 className="roadmap-date" >
						Looper requests are now showing on the Hero map  
						20 July 2020
				   </h6>
                  <div className="separator"></div>
                </div>
              </div>
            </div>
          </div>

          <Footer />

        </section>
    );
  }
}

export default Home;
