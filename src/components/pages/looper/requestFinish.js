import React from "react";
import { Link } from "react-router-dom";


import Button from "react-bootstrap/Button";
import check from "../../../assets/img/green-check.png";


class RequestFinish extends React.Component {
  render() {
    const current = 6;

    return (
      <div className="wrapper">
	  <reqSplashScreen/>
        <section id="registration-finish">
          <img alt="" src={check} />
          <div className="text-box">
            <h3>Jane is on it!</h3>
            <p>
              Your Hero Jane will be in connect            </p>
          </div>

          <div className="mt-4">
            <Link to="/request/helpType">
              <Button className="btn btn-block helper-btn">
                Start your first request
              </Button>
            </Link>
            <Link to="/helper/map">
              <Button className="btn btn-block btn-secondary">
                Offer your help
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default RequestFinish;
