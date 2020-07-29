import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import mapdoodle from "../../../assets/img/mapdoodle.png";
import text from "../../../assets/img/text.png";



class LocationDoodle extends React.Component {
  render() {
    return (
      <div className="wrapper">
	  <center>
        <section id="Request_type">
          <div className="text-box">
	     <img alt="" src={mapdoodle} className={mapdoodle} /><img alt="" src={text} width="200" height="70" className={text} />
          </div>
		  <div>
	
          </div>

          
	 

          
	  
	

	
	    </section>
		</center>
      </div>
    );
  }
}

export default LocationDoodle;
