import React, {Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import OtherTag from '../../../../assets/img/other.png';
import Food from '../../../../assets/img/food.png';
import Trans from '../../../../assets/img/trans-bus.png';
import Pharmacy from '../../../../assets/img/med.png';
import './request.css';



class TypeReq extends Component {
    render() {
      return (
        <div className="wrapper">
            <div class="type-p1">
                <p >How can we help?</p>
            </div>
            
            <div class="type-p2">
                <p>
                Click the buttons for food, transport or pharmacy trips help.
                User "other" for anything else.
                </p> 
            </div>
            
            <div class="row"  >
                <div class="column" >
                    <img alt="orange" src={Food} className={Food}  style={{position: 'absolute', width: '155px',
                    height: '144.05px', left: '47px', top: '365px', background: '#F7AF69', borderRadius: '10px'}}/>
                </div>
                <div class="column" >
                    <img alt="" src={Trans} className={Trans} style={{position: 'absolute', left: '270px',
                     top: '388px' }}/>
                    <p class="type-trans" style={{ position: 'absolute', width: '91px', height: '24px', left: '264px', top: '473px', fontSize: '18px'}}>
                        Transport</p> 
                </div>
            </div>
            <div class="row" >
                <div className="column" >
                    <img alt="" src={Pharmacy} className={Pharmacy} style={{position: 'absolute', width: '69.96px', height: '84.68px', left: '89px', top: '568.2px'}} />
                     <p style={{position: 'absolute', width: '97px',  height: '23px', left: '78px', top: '657px', fontSize: '18px'}}>Pharmacy</p>
                </div>
                <div className="column" >
                    <img alt="" src={OtherTag} className={OtherTag} style={{position: 'absolute',  left: '270px',  top: '577px'}} />
                    <p style={{position: 'absolute', width: '53px', height: '23px', left: '283px', top: '657px'}}>Other</p>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default TypeReq;
  
