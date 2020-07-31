import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Shopping from "../../../assets/img/shopping.png";
import Phone from "../../../assets/img/phone.png";
import clock from "../../../assets/img/clock.png";
import Box from "../../../assets/img/Box.png";

class RequestDrivingTime extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="Request_type">
          <div className="text-box">
			<img alt="" src={clock} className={clock} style={{marginLeft:'250px'}}/>	
		<br/><br/>
			<h1>
              What time should the Hero arrive?
            </h1>
          </div>
		<br/>
		
		<div id="communication">
          <div className="wrapper">
            <div className="communication-list">
              <div className="communication_info">
                <p>if you're flexible:</p>
	    	 <div>
	    	    <div className="req-actions1" id="but1">
	      <Link to="">
             <Button className="btn btn-block req-btn">Anytime</Button>
           </Link>
          </div>
	    	</div>
              </div>
			  
         <div className="communication_info">
                <p>or select a specific time?</p>
	    	<div >
	    	 <input type="text" id="t1"placeholder="12"/>&nbsp;
			 <bold>:</bold>&nbsp;
			 <input type="text" id="t1"placeholder="30" />
	        </div>
              </div>
	    </div>
          </div>
        </div>
		
		
		<br/><br/>
		<div>
          <div className="req-actions1">
	      <Link to="">
             <Button className="btn btn-block req-btn1">Send Request</Button>
           </Link>
          </div>
		</div>
      
	
        </section>
      </div>
    );
  }
}

export default RequestDrivingTime;