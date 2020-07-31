import React from "react";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";



class DeliverRequestTime extends React.Component {

  render() {

    return (

      <div className="wrapper">

        <section id="registration_finish">

          <div className="text-box">

            <h id="head">

              Choose the delivery time:

            </h>

	       

          </div>
		  
		  <button id="any">    Anytime    </button><br/><br/><br/><br/>

           <p>

              You Can Select Multiple Options
			  

           </p>

          



          <Form>

             <button name="button" id="b">11:00 - 12:00 </button>
             <button name="button" id="c">12:00 - 13:00 </button>
             <button name="button" id="d" >13:00 - 14:00 </button><br/>
             <button name="button" id="e">14:00 - 15:00 </button>
             <button name="button" id="f">15:00 - 16:00 </button>
             <button name="button" id="g">16:00 - 17:00 </button><br/>
             <button name="button" id="h">17:00 - 18:00 </button>
             <button name="button" id="i">18:00 - 19:00 </button>
             <button name="button" id="j">19:00 - 20:00 </button><br/><br/>
             <button name="button" id="k" >20:00 - 21:00 </button>
			 


          </Form>



          



          <div>

            <Link to="/looper/deliveryPayment">

              <Button name="button" id="l" >

                Next : Final Confirmation

              </Button>

            </Link>

          </div>

        </section>

      </div>

    );

  }

}



export default DeliverRequestTime;