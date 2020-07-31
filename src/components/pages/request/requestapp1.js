import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Shopping from "../../../assets/img/shopping.png";
import Phone from "../../../assets/img/phone.png";
import Chat from "../../../assets/img/chat.png";
import Blue from "../../../assets/img/Blue.png";
import menu from "../../../assets/img/menu.png";
import pic from "../../../assets/img/volunteer.png";
import heart from "../../../assets/img/heart.png";

class RequestApp1 extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="Request_type">
        <div className="webapp">
		<img src={menu} id="menuid"/>
		<img src={Blue} id="yellowid"/>
		<p id="app1"><b>Local Heroes</b></p>
		<p id="app2"><b>Country Heroes</b></p>
		<p id="app3"><b>Intl Heroes</b></p>
		<p id="app4"><b>The Hero</b></p>
		<p id="app5"><b>Tasks This month</b></p>
		<p id="app6"><b>Rating</b></p>
		
		<p id="a1">Jane Doe</p>
		<p id="a2">16</p>
		<img src={pic} id="v1"/>
		<p id="a3">Jane Doe</p>
		<p id="a4">27</p>
		<img src={pic} id="v2"/>
		<p id="a5">Jane Doe</p>
		<p id="a6">12</p>
		<img src={pic} id="v3"/>
		<p id="a7">Jane Doe</p>
		<p id="a8">7</p>
		<img src={pic} id="v4"/>
		<p id="a9">Jane Doe</p>
		<p id="a10">10</p>
		<img src={pic} id="v5"/>
		<img src={heart} id="h1"/>
		<img src={heart} id="h2"/>
		<img src={heart} id="h3"/>
		<img src={heart} id="h4"/>
		<img src={heart} id="h5"/>
		<p id="h6">5</p>
		<p id="h7">4.9</p>
		<p id="h8">4.6</p>
		<p id="h9">4.5</p>
		<p id="h10">4.5</p>
		</div>
        </section>
      </div>
    );
  }
}

export default RequestApp1;
