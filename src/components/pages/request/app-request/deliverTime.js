import React, {Component} from 'react';
import {Button } from 'react-bootstrap';
import './request.css';
class DeliverTime extends Component{

        render(){
            return (
                <div className="wrapper">
                <section id="Time_lot">
                <div>
                    <p class="p1" >
                        Choose a deliver time: </p>
                    <p class="p2" >
                        You can select multiple options</p>
                        
                </div>
                    
                        
                <div className="req-time"   >
                    <Button class="anytime" s>
                        <p style={{width: '305.7px', height: '23.98px', top: '180.14px', fontSize: '16px', textAlign: 'center', color: '#000000' }} >
                        Anytime
                        </p>
                    </Button>
                </div>

                
                <div class="row" >
                    <Button  class="button1">
                        <p style={{ color: '#000000'}}>11:00  - 12:00 </p>
                    </Button>
                    <Button class="button2">
                        <p style={{color: '#000000'}}>12:00  - 13:00 </p>
                    </Button>
                </div>
                <div class="row">
                    <Button class="button3">
                        <p style={{color: '#000000'}}>13:00  - 14:00 </p>
                    </Button>
                    <Button class="button4">
                        <p style={{color: '#000000'}}>14:00  - 15:00 </p>
                    </Button>
                </div>
                <div class="row" >    
                    <Button class="button5">
                        <p style={{color: '#000000'}}>15:00 - 16:00 </p>
                    </Button>
                    <Button class="button6">
                        <p style={{color: '#000000'}}>16:00 - 17:00 </p>
                    </Button>
                </div>
                <div class="row">
                    <Button class="button7">
                        <p style={{color: '#000000'}}>17:00 - 18:00 </p>
                    </Button>
                    <Button class="button8">
                        <p style={{color: '#000000'}}>18:00 - 19:00 </p>
                    </Button>
                </div>
                <div class="row">
                    <Button class="button9">
                        <p style={{color: '#000000'}}>19:00 - 20:00 </p>
                    </Button>
                    <Button class="button10">
                        <p style={{color: '#000000'}}>20:00 - 21:00 </p>
                    </Button>
                </div>
                <Button class="submit" type="submit">

                <p class="final">
                    Next: Final confirmation
                </p></Button>
    
                </section>
            </div>

            );
            
        }


}

export default DeliverTime;
