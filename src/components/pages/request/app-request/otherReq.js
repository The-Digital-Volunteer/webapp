import React, {Component } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Medblack from '../../../../assets/img/medblack.png';
import transblack from '../../../../assets/img/transblack.png';
import Fork from '../../../../assets/img/fork.png';
import OtherTag from '../../../../assets/img/Other.png';
  


class OtherReq extends Component {
  render() {
    return (
      <div className="wrapper">
        <section id="Request_type">
          <div className="text-box">
           <img alt="" src={OtherTag} className={OtherTag} style={{position: 'absolute',  left: '8.94%',
              right: '72.33%', top: '10.82%', bottom: '79.82%'}}/>
            <p style= {{position: 'absolute', width: '195px', height: '14px', left: '179px', top: '102px', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '500', fontSize: '12px', lineHeight: '18px', letterSpacing: '0.01em', color: '#8C8C8C'}}>Need to change? Click here: </p>
         
            <img alt="" src={Fork} className={Fork} style={{position: 'absolute',  left: '43.83%',
            right: '47.98%', top: '14.52%', bottom: '80.5%'}}/>
            <img alt="" src={transblack} className={transblack} style={{position: 'absolute',  left: '59.7%',
                right: '31.32%', top: '14.52%', bottom: '80.5%'}}/>
           <img alt="" src={Medblack  } className={Medblack} style={{position: 'absolute', left: '7.45%',
              right: '15.57%', top: '14.42%', bottom: '80.6%'}}/>
          <p style={{position: 'absolute', textAlign: 'left', width: '302px', height: '104px', left: '40px', top: '221px', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '600', fontSize: '16px', lineHeight: '24px', letterSpacing: '0.01em', color: '#000000'}} >
              Our Heroses can help with everything you might need</p>
      </div>
          <Form>
            <Form.Group>
            
            <Form.Control as="textarea" rows="5" style={{position: 'absolute', width: '320px', height: '223.55px', left: '38px', top: '301.45px', background: '#FFFFFF', border: '1px solid #C4C4C4',boxSizing: 'border-box', borderRadius: '10px' }} />
                <textarea style={{position: 'absolute', width: '271px', heigth: '124px', left: '62px', top: '319px', fontFamily: 'Poppins', fontSize: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '174%', color: '#212121'}}>
                Type your detailed request here. 
            </textarea>
          </Form.Group>
          </Form>
          <div>
            <Button type="submit" className="req-btn" style={{position: 'absolute', width: '354px', height: '60px', top: '540px', left: '27%', right: '9%', background: '#68ADEC', borderRadius: '10px'}}>
              Next: Delivery Time</Button>
  
          </div>
         
        </section>
      </div>
    );
  }
}


export default OtherReq;