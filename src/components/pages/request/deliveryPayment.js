import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import cash from "../../../assets/img/cash.png";
import building from "../../../assets/img/building.png";
import house from "../../../assets/img/house.png";
import purch from "../../../assets/img/purch.png";
import epay from "../../../assets/img/epay.png";

class DeliveryPayment extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="Request_type">
          <div className="text-box"></div>
		  <br/><br/>
			<h5>Delivery Method:</h5><img alt="" src={house} align="right" id="img2"/><img alt="" src={building} align="right" id="img3"/>
			<p>Do you live in a house or a building?</p>
			<br/><br/>
	
	  <div>
	  <br/><br/>
	  <a id="t3">On the porch</a>
	  <p id="t4">Outside my door</p>
	  </div>
		  <br/><br/>
	
            <h5>Payment Method:</h5><img alt="" src={cash} align="right" id="img4"/><img alt="" src={epay} align="right" id="img5"/><img alt="" src={purch} align="right" id="img6"/>
			<p>How will you pay for the purchase?</p>
			<br/><br/><br/><br/>
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



export default DeliveryPayment;
