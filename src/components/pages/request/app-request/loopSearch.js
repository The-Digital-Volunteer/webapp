import React, { Component } from 'react';
import Loop from '../../../../assets/img/Blueinf.svg';

class LoopSearch extends Component{

    render(){

        return (
            <div>
                <img alt="" src={Loop} className={Loop} />
                <p>Calling up all the local Heros...</p>
                <p>It shouldn't take more than 90 seconds</p>
            </div>
        );
    }
}

export default LoopSearch;