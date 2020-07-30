import { inject, observer } from "mobx-react"
import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import Progress from "./progress";

class RegistrationTerms extends React.Component {
  pageId;

  constructor( props ) {
    super( props )
    this.pageId = 1;
    this.changeTermsOfServiceFlag = this.changeTermsOfServiceFlag.bind( this )
  }

  changeTermsOfServiceFlag(event) {
    const { registration } = this.props;

    registration.termsOfServiceAccepted = event.target.checked
  }

  render() {
    const { registration } = this.props;

    return (
      <div className="wrapper">
        <section id="registration_terms">
           <div className="text-box">
            <b>First let's align on the legal stuff</b>
          </div>
		  <br/> <br/>
		  
		  <div className="text-box">
            <h3>Terms and conditions</h3>
          </div>

          <h>What will we collect?</h>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>

          <h>Do you want to know more?</h>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>

          <Form>
            <Form.Group>
              <Form.Check type="checkbox" name="termsOfService"
                label="I agree to the terms and conditions"
                checked={ registration.termsOfServiceAccepted }
                onClick={ this.changeTermsOfServiceFlag }
              />
            </Form.Group>
          </Form>

          <div className="mt-4">
            <Link to="/registration/alternatives">
              <Button className="btn btn-block helper-btn"
                disabled={ !registration.termsOfServiceAccepted }
              >
                Create My Account
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default inject('registration')( observer(RegistrationTerms) );
