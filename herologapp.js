import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import adobe2 from "../../../assets/img/adobe2.png";
import bar from "../../../assets/img/bar.png";



class MyHeroLogApp extends React.Component {
  render() {
    return (
      <div className="wrapper">
	  <center>
        <section id="Request_type">
          <div className="text-box">
		  <h1>
              My Hero Log
            </h1>
	     <img alt="" src={adobe2} className={adobe2} />
		 	     <img alt="" src={bar}   className={bar} />
          </div>
		  <div>
		  
            <Link to="#">
              <Button className="taskbtn2" >
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

export default MyHeroLogApp;
