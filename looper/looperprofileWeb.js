import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Vector from "../../../assets/img/Vector.png";
import volunteer from "../../../assets/img/volunteer.png";
import Chat_icon from "../../../assets/img/Chat_icon.png";
import bar from "../../../assets/img/bar.png";
import map from "../../../assets/img/map.png";
import loop from "../../../assets/img/loop.png";
import cloud from "../../../assets/img/cloud.png";
import needHelp from "../../../assets/img/needHelp.png";
import notify from "../../../assets/img/notify.png";
import changepic from "../../../assets/img/changepic.png";
import profileinfo from "../../../assets/img/profileinfo.png";
import account_details from "../../../assets/img/account_details.png";

class LooperProfileWeb extends React.Component {
  render() {
    return (
      <div>
        <section id="request_med">
		
         <img alt="volunteer pic" src={ volunteer } id="pic1" align="center"/>&nbsp;&nbsp;&nbsp;Profile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<img alt="" src={Chat_icon}  />&nbsp;&nbsp;&nbsp;Chat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		 <img alt="" src={Vector} />&nbsp;&nbsp;&nbsp;Rate a Looper&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		 <img alt="" src={bar}  /> &nbsp;&nbsp;&nbsp;Hall Of Fame&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		 <img alt="" src={cloud}  /> &nbsp;&nbsp;&nbsp;My Hero Log&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		 <img alt="" src={loop}  />&nbsp;&nbsp;&nbsp; My Tasks&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		  <img alt="" src={map} />&nbsp;&nbsp;&nbsp;The Map&nbsp;&nbsp;&nbsp;&nbsp;
		 <br/><br/> 
		 <div>
		   <img alt="" src={needHelp} id="pic"/>
		   <img alt="" src={notify} id="pic2" />
		   <img alt="" src={changepic} id="pic3" />
		   <img alt="" src={profileinfo} id="pic5" align="right"/>
		</div>
		<div>
			<img alt="" src={account_details} id="pic4" />
		
		</div>

		
        </section>
      </div>
    );
  }
}

export default LooperProfileWeb;
