import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import small_med from "../../../assets/img/small_med.png";
import small_other from "../../../assets/img/small_other.png";
import small_transport from "../../../assets/img/small_transport.png";
import food from "../../../assets/img/food.png";

class FoodRequest extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="request_food">
		<img alt="" src={food}/><br/>
		<img alt="" src={small_transport} id="i2" /><br/>
		 <img alt="" src={small_med} id="i4" /><br/>
		 <img alt="" src={small_other} id="i3"/><br/>
		 
          <div className="text-box">
            <h3>
              Our Heros are here to help with Food Shopping.
            </h3>
          </div>
			<br/><br/>
          <Form>
            <Form.Group>
              <Form.Label>Grocery Shopping List:</Form.Label>
              <Form.Control as="textarea" rows="5" placeholder="Type your request here.If you need multiple items,list everything here."/>
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

export default FoodRequest;
