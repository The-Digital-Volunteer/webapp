import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Food from '../../../../assets/img/foodReq.png';
import MedBlack from '../../../../assets/img/small_med.png';
import Other from '../../../../assets/img/small_other.png';
import Car from '../../../../assets/img/small_transport.png';
import './request.css';

class FoodReq extends React.Component {
    render() {
      return (
        <div className="wrapper">
          <section id="Request_type">
            <div className="text-box">
             <img alt="" src={Food} className={Food} style={{position: 'absolute', left: '11.35%',
                 right: '69.91%', top: '10.82%', bottom: '79.82%'}}/>
             <p style= {{position: 'absolute', width: '195px', height: '14px', left: '189px', top: '102px', fontWeight: '500', fontSize: '12px', lineHeight: '18px', letterSpacing: '0.01em', color: '#8C8C8C'}}>
               Need to change? Click here: </p>
              <img alt="" src={Car} className={Car} style={{position: 'absolute',   left: '46.65%',
                right: '36%', top: '25.6%', bottom: '80.5%'}}/>
              <img alt="" src={MedBlack} className={MedBlack} style={{position: 'absolute',  left: '62.4%',
                right: '28.61%', top: '14.42%', bottom: '80.6%'}}/>
             <img alt="" src={Other} className={Other} style={{position: 'absolute',  left: '77.79%',
                right: '13.22%', top: '14.42%', bottom: '80.6%'}}/>
              <p style={{position: 'absolute', textAlign: 'left', width: '302px', height: '104px', left: '49px', top: '211px', fontSize: '16px', lineHeight: '24px', letterSpacing: '0.01em', color: '#000000'}} >
                Our Heros are here to help with food shopping. </p>
        </div>
            <Form>
              <Form.Group>
                <Form.Control as="textarea" rows="5" style={{position: 'absolute', width: '320px', height: '223.55px', left: '48px', top: '302.45px', background: '#FFFFFF', border: '1px solid #C4C4C4',boxSizing: 'border-box', borderRadius: '10px' }} />
                <Form.Label><h3 style={{ position: 'absolute', width: '194.35px', height: '16.59px', left: '48px', top: '278px', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 'normal', fontSize: '12px', lineHeight: '174%', color: '#212121'}}>
                  Groceries Shopping List:</h3></Form.Label>
                <textarea style={{position: 'absolute', width: '271px', heigth: '124px', left: '72px', top: '320px', fontFamily: 'Poppins', fontSize: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '174%', color: '#212121'}}>
                  Type your request here. 
                  If you need multiple items, list everything here. 
                </textarea>
              </Form.Group>
            </Form>
            <div>
              <Link to="">
              <Button type="submit" style={{position: 'absolute', width: '354px', height: '60px', top: '540px', left: '28%', right: '9%', background: '#68ADEC', borderRadius: '10px'}}>
                  Next: Delivery Time
              </Button>
              </Link>

            </div>
            
          </section>
        </div>
      );
    }
  }
  
  export default FoodReq;