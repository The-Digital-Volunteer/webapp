import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import close from "../../../assets/img/close.png";
import map from "../../../assets/img/map.png";
import allow from "../../../assets/img/allow.png";


class MapPopup extends React.Component {
  render() {
    return (
      <div className="wrapper">
	  <center>
        <section id="Request_type">
          <div className="text-box">
	     <img alt="" src={close} className={"close"} />
		 	     <img alt="" src={map}   className={"map"} />
          </div>
		  <div>
		  <img alt="" src={allow}   className={"allow"} />
		  
            <Link to="#">
              <Button className="allowbtn" >
              Allow
              </Button>
            </Link>
			<Link to="#">
              <Button className="denybtn" >
              Deny
              </Button>
            </Link>
	
          </div>

          
	 

          
	  
	

	
	    </section>
		</center>
      </div>
    );
  }
}

export default MapPopup;
