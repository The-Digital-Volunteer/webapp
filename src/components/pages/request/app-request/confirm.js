import React, { Component } from 'react';
import GreenCheck from '../../../../assets/img/green-check.png';

class Confirm extends Component{

    render(){
        return(
            <div>
                <img alt="" src={GreenCheck} className={GreenCheck} />
                <p>Jane is on it!</p>
                <p>Your Hero, Jane, will be in contact via phone or chat if any further information is needed</p>
            </div>
            
        );
    }
}

export default Confirm;