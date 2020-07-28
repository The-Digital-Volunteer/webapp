import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Food from "../../../assets/img/mainfood.png";
import transport from "../../../assets/img/transport.png";
import Pharmacy from "../../../assets/img/med.png";
import Other from "../../../assets/img/other.png";

import Vector from "../../../assets/img/Vector.png";
import volunteer from "../../../assets/img/volunteer.png";
import Chat_icon from "../../../assets/img/Chat_icon.png";
import bar from "../../../assets/img/bar.png";
import map from "../../../assets/img/map.png";
import loop from "../../../assets/img/loop.png";
import cloud from "../../../assets/img/cloud.png";


class LooperMainView extends React.Component {
  render() {
    return (
      <div >
        <section id="req_helptype">
		
		<img alt="volunteer pic" src={ volunteer } id="pic1" align="center"/>&nbsp;&nbsp;&nbsp;Profile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<img alt="" src={Chat_icon}  />&nbsp;&nbsp;&nbsp;Chat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		 <img alt="" src={Vector} />&nbsp;&nbsp;&nbsp;Rate a Looper&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		 <img alt="" src={bar}  /> &nbsp;&nbsp;&nbsp;Hall Of Fame&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		 <img alt="" src={cloud}  /> &nbsp;&nbsp;&nbsp;My Hero Log&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		 <img alt="" src={loop}  />&nbsp;&nbsp;&nbsp; My Tasks&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		  <img alt="" src={map} />&nbsp;&nbsp;&nbsp;The Map&nbsp;&nbsp;&nbsp;&nbsp;
		 <br/><br/>
		
          <div className="text-box">
            <b>How can we help ?</b>
            <p>
              click the buttons for food,transport or pharmacy trips help.User "other" for anything else
            </p>
          </div>

            <div className="selecttype">
			 <div className="food1">
			   <Link to="/request/foodRequest">
                  <img align="center" alt="" src={Food} className={Food} />
                </Link>
			 </div>
			 <div className="trans">
                <Link to="/request/transRequest">
                   <img align="center" alt="" src={transport} className={transport} /><br/>Transport
                </Link>
			  </div>
			  <div className="med">
				<Link to="/request/medRequest">
                  <img align="center" alt="" src={Pharmacy} className={Pharmacy} /><br/>Pharmacy
                </Link>
			  </div>
			  <div className="other">
				<Link to="/request/othersRequest">
                  <img align="center" alt="" src={Other} className={Other} /><br/>Other
                </Link>
			  </div>
            </div>
        </section>
      </div>
    );
  }
}

export default LooperMainView;