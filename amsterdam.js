import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import hero_log from "../../../assets/img/hero_log.png";
import martha2 from "../../../assets/img/martha2.png";
import Vector from "../../../assets/img/Vector.png";
import chat2 from "../../../assets/img/chat2.png";
import cloud from "../../../assets/img/cloud.png";
import map2 from "../../../assets/img/map2.png";
import loop from "../../../assets/img/loop.png";
import hall from "../../../assets/img/hall.png";
import volunteer from "../../../assets/img/volunteer.png";
import vector1 from "../../../assets/img/vector1.png";



class Amsterdam extends React.Component {
  render() {
    return (
      <div>
        <section id="Request_type">
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img alt="" src={volunteer} className={volunteer} align="center"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<img alt="" src={chat2} className={chat2} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<img alt="" src={vector1} className={vector1} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rate a Looper&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<img alt="" src={hall} className={hall} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hall of Fame&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<img alt="" src={cloud} className={cloud} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Hero Log&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<img alt="" src={loop} className={loop} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Task&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<img alt="" src={map2} className={map2} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Maps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
          <div className="text-box">
		  <h1>
              My Hero Log
            </h1>
	     <img alt="" src={hero_log} className={hero_log} />
		 	     <img alt="" src={martha2} className={martha2} />
          </div>

          
	  <div className="text-box">
           <p><h3>Thank you for your rating..!</h3></p>
		   <img alt="" src={Vector} className={Vector} /><img alt="" src={Vector} className={Vector} /><img alt="" src={Vector} className={Vector} /><img alt="" src={Vector} className={Vector} />
          </div>


          
	  
		  
	    </section>
      </div>
    );
  }
}

export default Amsterdam;
