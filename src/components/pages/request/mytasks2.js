import React from "react";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

import topitem2 from "../../../assets/img/mytasks2top.png";
import myloop from "../../../assets/img/loop.png";
import meditem2 from "../../../assets/img/mytasks2medium.png";
import bottomitem2 from "../../../assets/img/mytasks2bottom.png";



class MyTasks2 extends React.Component {

  render() {

    return (

      <div className="wrapper">

        <section id="registration_finish">
		<center><img src={ myloop } alt=" " className={myloop}/></center>
		<br></br>
        <center><img src={ topitem2 } alt=" " className={ topitem2 }/></center>
		<br></br>
		<center><img src={ meditem2 } alt=" " className={ meditem2 }/></center>
		<br></br>
		<center><img src={ bottomitem2 } alt=" " className={ bottomitem2 }/></center> 
        </section>

      </div>

    );

  }

}



export default MyTasks2;