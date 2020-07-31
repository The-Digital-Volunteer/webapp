import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import handsColorReceiver from "../../assets/img/hands_orange.svg";
import { useConnect } from '@blockstack/connect';

import Button from "react-bootstrap/Button";

class Welcome extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="intro">
          <div>
            <img src={handsColorReceiver} className="hands" alt="hands" />
          </div>
          <div>
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div className="text-box">
            <h3>Welcome to the digital voluntary app</h3>
          </div>

          <div>
            <Link to="/registration/terms">
              <Button className="btn btn-block helper-btn">
                Join The Loop
              </Button>
            </Link>
          </div>

          <Link onClick={() => this.props.doOpenAuth(true)}>
            Already have an account? Click here to sign in
          </Link>
        </section>
      </div>
    );
  }
}


export default () => {
  const { doOpenAuth } = useConnect();

  return (
      <Welcome doOpenAuth={doOpenAuth}/>
  )
}
