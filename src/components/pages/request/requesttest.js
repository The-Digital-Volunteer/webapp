import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Shopping from "../../../assets/img/shopping.png";
import Phone from "../../../assets/img/phone.png";
import Chat from "../../../assets/img/chat.png";
import pic from "../../../assets/img/volunteer.png";
import Vectorstar from "../../../assets/img/Vectorstar.png";
import Vector from "../../../assets/img/Vector.png";
import log from "../../../assets/img/log.png";
import Rec38 from "../../../assets/img/Rec38.png";
import pink from "../../../assets/img/pink.png";
import yellow from "../../../assets/img/yellow.png";
import heart from "../../../assets/img/heart.png";
class RequestTest extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="Request_type">
          <div className="abc">
		  <img src={pic} id="xyz"/>
		  <p id="profile">Profile</p>
		  </div>
		  <div className="webmenu">
		  <div className="aa">
			<img src={Chat} id="chatid"/>
			<p id="chat">Chat</p>
				<div className="line">
				</div>
			<img src={Vectorstar} id="starid"/>
			<p id="ratealooper">Rate a Looper</p>
				<div className="line1">
				</div>
			<img src={Vector} id="vectorid"/>
			<p id="halloffame">Hall of Fame</p>
				<div className="line2">
				</div>
			<img src={log} id="logid"/>
			<p id="myhero">My Hero Log</p>
		  </div>
		  
		  <div className="ab">
			<img src={Rec38} id="recid"/>
			<p id="mytask"><b>MY TASKS</b></p>
		  </div>
		  </div>
		  
		  <div className="ac">
			<img src={yellow} id="yellow"/>
			<p id="g"><b>Local Heroes</b></p>
			<p id="h"><b>Country Heroes</b></p>
			<p id="k"><b>International Heroes</b></p>
			<p id="i"><b>The Hero</b></p>
			<p id="j"><b>Tasks this month</b></p>
			<p id="l"><b>Rating</b></p>
		  </div>
		  
		  <div className="ad">
			<p id="r1">Jane Doe</p>
			<p id="p1">25 Tasks</p>
			<img src={pic} id="pic1"/>
			<p id="r2">Jane Doe</p>
			<p id="p2">18 Tasks</p>
			<img src={pic} id="pic2"/>
			<p id="r3">Jane Doe</p>
			<p id="p3">16 Tasks</p>
			<img src={pic} id="pic3"/>
			<p id="r4">Jane Doe</p>
			<p id="p4">12 Tasks</p>
			<img src={pic} id="pic4"/>
			<p id="r5">Jane Doe</p>
			<p id="p5">10 Tasks</p>
			<img src={pic} id="pic5"/>
			<p id="r6">jane Doe</p>
			<p id="p6">8 Tasks</p>
			<img src={pic} id="pic6"/>
			<p id="r7">Jane Doe</p>
			<p id="p7">7 Tasks</p>
			<img src={heart} id="pp1"/><img src={heart} id="p17"/>
			<img src={heart} id="pp2"/><img src={heart} id="p18"/>
			<img src={heart} id="pp3"/><img src={heart} id="p19"/>
			<img src={heart} id="pp4"/><img src={heart} id="p20"/>
			<img src={heart} id="pp5"/><img src={heart} id="p21"/>
			<img src={heart} id="pp6"/><img src={heart} id="p22"/>
			<img src={heart} id="pp7"/><img src={heart} id="p23"/>
			<img src={heart} id="p8"/><img src={heart} id="p24"/>
			<img src={heart} id="p9"/><img src={heart} id="p25"/>
			<img src={heart} id="p10"/><img src={heart} id="p26"/>
			<img src={heart} id="p11"/><img src={heart} id="p27"/>
			<img src={heart} id="p12"/><img src={heart} id="p28"/>
			<img src={heart} id="p13"/><img src={heart} id="p29"/>
			<img src={heart} id="p14"/><img src={heart} id="p30"/>
			<img src={heart} id="p15"/><img src={heart} id="p31"/>
			<img src={heart} id="p16"/>
			
			</div>
		
		
        </section>
      </div>
    );
  }
}

export default RequestTest;
