import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import close1 from "../../../assets/img/close1.png";
import top from "../../../assets/img/top.png";
import bottom from "../../../assets/img/bottom.png";
import header1 from "../../../assets/img/header1.png";



class LooperMyTasks extends React.Component {
  render() {
    return (
      <div >
        <section id="req_helptype">
		<br/><br/>
			<img src={header1} alt="" id="header1" />
			<img src={close1} alt="" id="close1" />
			<img src={top} alt="" id="top1" />
			<img src={bottom} alt="" id="bottom1" />

            
        </section>
      </div>
    );
  }
}

export default LooperMyTasks;