import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import small_food from "../../../assets/img/small_food.png";
import small_other from "../../../assets/img/small_other.png";
import small_transport from "../../../assets/img/small_transport.png";
import med from "../../../assets/img/med.png";

class MedRequest extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="request_med">
		 <img alt="" src={med} id="i1" /><br/>
		 <img alt="" src={small_food} id="i2" /><br/>
		 <img alt="" src={small_other} id="i3"/><br/>
		 <img alt="" src={small_transport} id="i4" /><br/>
          <div className="text-box">
            <h3>
              Our Heros are here to help with Pharmacy trips.
            </h3>
          </div>
		
          <Form>
            <Form.Group>
              <Form.Control as="textarea" rows="5" placeholder="Type your request here.If you need multiple items,list everything here. PLEASE SPECIFY THE PHARMACY NAME AND ADDRESS"/>
            </Form.Group>
          </Form>

         <br/><br/>
          <div>
            <Link to="/request/confirmation">
              <Button className="btn btn-block helper-btn">
                Next:Delivery Time
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default MedRequest;
