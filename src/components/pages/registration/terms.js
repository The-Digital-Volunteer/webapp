import { inject, observer } from "mobx-react"
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Progress from "./progress";
import SplashScreen from "./splashScreen"

import { UserSession } from 'blockstack';
import { useConnect } from '@blockstack/connect';
import {appConfig} from '../../../constants'

const userSession = new UserSession({ appConfig });


const BlockstackRegistration = (disabled) => {
  //Consider using disable

  const { doOpenAuth } = useConnect();

  return(
      <Button className="btn btn-block helper-btn"
      onClick={() => {
          console.log("Registration started")
          doOpenAuth(true)
        }}
      >
        Create My Account
      </Button>
  )
}

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
    const current = 1;

    return (
      <div className="wrapper">
        <SplashScreen/>
        <Progress current={current}/>
        <section id="registration_terms">
          <div className="text-box">
            <h3>Terms and conditions</h3>
          </div>

          <h2>What will we collect?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>

          <h2>Do you want to know more?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. <a href="#more">Read More ></a>
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
            <BlockstackRegistration disabled={ !registration.termsOfServiceAccepted }/>
            
          </div>
        </section>
      </div>
    );
  }
}

export default inject('registration')( observer(RegistrationTerms) );
