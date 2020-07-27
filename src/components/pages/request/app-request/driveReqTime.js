import React, {Component} from 'react';
import {Button } from 'react-bootstrap';
import Clock from '../../../../assets/img/clock.svg';
import './request.css';

class DriveReqTime extends Component{

    render(){
        return (
            <div >
                <section >
                    <p class="req-p1">What time should the Hero arrive?</p>
                    
                    <div class="clock">
                        <img  alt="" src={Clock} className={Clock} />
                    </div>
                    
                    <div class="drive-anytime" style={{ position: 'absolute', left: '10%', right: '10%',
                            top: '10%', bottom: '10%', }}>
                        <Link to="">
                            <Button  type="submit" >
                                Anytime
                            </Button>
                        </Link>
                        
                    </div>
                    <p  >You can select a specfic time:</p>
                    <textarea class="t-left">12</textarea>
                    : <textarea class="t-right">30</textarea>
                    <div>
                        <Button type="submit" class="time-submit" >
                            SEND REQUEST
                        </Button>
                    </div>
                    
                </section>
            </div>
            
        );
    }

}

export default DriveReqTime;