import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import hero_log from "../../../assets/img/hero_log.png";
import martha from "../../../assets/img/martha.png";
import Vector from "../../../assets/img/Vector.png";
import menu from "../../../assets/img/menu.png";


class MyHeroWeb extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="Request_type">
		<img alt="" src={menu} align="left" width="1000" className={menu} />
          <div className="text-box">
		  <h1>
              My Hero Log
            </h1>
	     <img alt="" src={hero_log} className={hero_log} />
		 	     <img alt="" src={martha}  className={martha} />
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

export default MyHeroWeb;
