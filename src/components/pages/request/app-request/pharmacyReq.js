import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Pharmacy from '../../../../assets/img/med.png';
import Other from '../../../../assets/img/small_other.png';
import Foodblack from '../../../../assets/img/small_food.png';
import transblack from '../../../../assets/img/small_transport.png';
  


class PharmacyReq extends React.Component {
      render() {
        return (
          <div className="wrapper">
            <section id="Request_type">
              <div className="text-box">
               <img alt="" src={Pharmacy} className={Pharmacy} style={{position: 'absolute',  left: '11.35%',
                  right: '69.91%', top: '10.82%', bottom: '79.82%'}}/>
                <p style= {{position: 'absolute', width: '195px', height: '14px', left: '189px', top: '102px', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '500', fontSize: '12px', lineHeight: '18px', letterSpacing: '0.01em', color: '#8C8C8C'}}>
                  Need to change? Click here: </p>
             
                <img alt="" src={Foodblack} className={Foodblack} style={{position: 'absolute',   left: '45.45%',
                right: '45.57%', top: '14.52%', bottom: '80.5%'}}/>
                <img alt="" src={transblack} className={Car} style={{position: 'absolute',  left: '62.11%',
                right: '28.9%', top: '14.41%', bottom: '80.61%'}}/>
               <img alt="" src={Other} className={Other} style={{position: 'absolute',  left: '77.79%',
                  right: '13.22%', top: '14.42%', bottom: '80.6%'}}/>
              <p style={{position: 'absolute', textAlign: 'left', width: '302px', height: '49px', left: '30%', top: '211px', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '600', fontSize: '16px', lineHeight: '24px', letterSpacing: '0.01em', color: '#000000'}} >
                  Our Heroses are here to help with pharmacy trips</p>
          </div>
              <Form>
                <Form.Group>
                
                <Form.Control as="textarea" rows="5" style={{position: 'absolute', width: '320px', height: '223.55px', left: '48px', top: '301.45px', background: '#FFFFFF', border: '1px solid #C4C4C4',boxSizing: 'border-box', borderRadius: '10px' }} />
                    <textarea style={{position: 'absolute', width: '271px', heigth: '155px', left: '72px', top: '319px', fontFamily: 'Poppins', fontSize: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '174%', color: '#212121'}}>
                    Type your request here.
                    If you need multiple items, list everything here.
                    
                    PLEASE SPECIFY THE PHARMACY NAME AND ADDRESS 
                </textarea>
              </Form.Group>
              </Form>
              <div >
                <Link to="">
                <Button type="submit" className="req-btn" style={{position: 'absolute', width: '354px', height: '60px', top: '540px', left: '27%', right: '9%', background: '#68ADEC', borderRadius: '10px'}}>
                  Next: Delivery Time</Button>
                </Link>
              </div>
              
            </section>
          </div>
        );
      }
    }
    

export default PharmacyReq;