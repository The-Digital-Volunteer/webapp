import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import other from "../../../assets/img/other.png";
import small_food from "../../../assets/img/small_food.png";
import small_transport from "../../../assets/img/small_transport.png";
import small_med from "../../../assets/img/small_med.png";

class OthersRequest extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="request_others">
		<img alt="" src={other}/><br/>
		 <img alt="" src={small_food} id="i2" /><br/>
		 <img alt="" src={small_transport} id="i4" /><br/>
		  <img alt="" src={small_med} id="i3"/><br/>
          <div className="text-box">
            <h3>
              Our Heros can help with everything you might need.
            </h3>
          </div>
			<br/><br/>
          <Form>
            <Form.Group>
              <Form.Control as="textarea" rows="5" placeholder="Type your detailed request here."/>
            </Form.Group>
          </Form>
			<br/><br/>
          <div>
            <Link to="/request/confirmation">
              <Button className="btn btn-block helper-btn">
                Next:Delivery time
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default OthersRequest;
