import React from "react";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

import topitem from "../../../assets/img/mytaskstop.png";
import myloop from "../../../assets/img/loop.png";
import meditem from "../../../assets/img/mytasksmedium.png";
import bottomitem from "../../../assets/img/mytasksbottom.png";



class MyTasks extends React.Component {

  render() {

    return (

      <div className="wrapper">

        <section id="registration_finish">
		<center><img src={ myloop } alt=" " className={myloop}/></center>
		<br></br>
        <center><img src={ topitem } alt=" " className={ topitem }/></center>
		<br></br>
		<center><img src={ meditem } alt=" " className={ meditem }/></center>
		<br></br>
		<center><img src={ bottomitem } alt=" " className={ bottomitem }/></center>
        </section>

      </div>

    );

  }

}



export default MyTasks;


