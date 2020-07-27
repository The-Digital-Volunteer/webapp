import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Trans from '../../../../assets/img/trans-bus.png';
import Med from '../../../../assets/img/small_med.jpg';
import Other from '../../../../assets/img/small_other.jpg';
import Food from '../../../../assets/img/small_food.png';
import './request.css';
  


class DriveReq extends React.Component {
      render() {
        return (
          <div className="wrapper">
            <section id="Request_type">
              <div className="text-box">
               <img alt="" src={Trans} className={Trans} style={{position: 'absolute',  left: '11.35%',
                  right: '69.91%', top: '10.82%', bottom: '79.82%'}}/>
              
               <p style= {{position: 'absolute', width: '195px', height: '14px', left: '189px', top: '102px', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '500', fontSize: '12px', lineHeight: '18px', letterSpacing: '0.01em', color: '#8C8C8C'}}>
                 Need to change? Click here: </p>
               <img alt="" src={Food} className={Food} style={{position: 'absolute', left: '44.62%',
                  right: '44.36%', top: '14.52%', bottom: '80.5%'}}/>
               <img alt="" src={Med} className={Med} style={{position: 'absolute',  width:'3%', left: '52.65%',
                  right: '44.36%', top: '23.52%', bottom: '80.6%'}}/>
              <img alt="" src={Other} className={Other} style={{position: 'absolute', width: '3%', left: '61.79%',
                  right: '13.22%', top: '23.52%', bottom: '80.6%'}}/>
              <p style={{position: 'absolute', width: '302px', height: '104px', left: '49px', top: '211px', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '600', fontSize: '16px', lineHeight: '24px', letterSpacing: '0.01em', color: '#000000'}} >
                  Transportation is important! 
                  Our Heros are here to help with their cars. </p>
          </div>
              <Form>
                <Form.Group>
                
                <Form.Control as="textarea" rows="5" style={{position: 'absolute', width: '320px', height: '223.55px', left: '48px', top: '301.45px', background: '#FFFFFF', border: '1px solid #C4C4C4',boxSizing: 'border-box', borderRadius: '10px' }} />
                    <textarea style={{position: 'absolute', width: '271px', heigth: '124px', left: '72px', top: '319px', fontFamily: 'Poppins', fontSize: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '174%', color: '#212121'}}>
                      Enter the details of your request here. 
                </textarea>
              </Form.Group>
              </Form>
              <div >
                <Button type="submit" style={{position: 'absolute', width: '354px', height: '60px', top: '540px', left: '28%', right: '9%', background: '#68ADEC', borderRadius: '10px'}}>
                    Next: Pickup Time
                </Button>
              </div>
              
      
            </section>
          </div>
        );
      }
    }
    

export default DriveReq;