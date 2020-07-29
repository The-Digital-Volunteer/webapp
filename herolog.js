import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import adobe from "../../../assets/img/adobe.png";
import bar2 from "../../../assets/img/bar2.png";



class MyHeroLog extends React.Component {
  render() {
    return (
      <div className="wrapper">
	  <center>
        <section id="Request_type">
          <div className="text-box">
		  <h1>
              My Hero Log
            </h1>
	     <img alt="" src={adobe} className={adobe} />
		 	     <img alt="" src={bar2}   className={bar2} />
          </div>
		  <div>
		  
            <Link to="#">
              <Button className="taskbtn" >
                Find a Task
              </Button>
            </Link>
	
          </div>

          
	 

          
	  
	

	
	    </section>
		</center>
      </div>
    );
  }
}

export default MyHeroLog;
