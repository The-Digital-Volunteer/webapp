import React, { Component } from 'react';
import {Button } from 'react-bootstrap';
import House from '../../../../assets/img/house.png';
import Building from '../../../../assets/img/building.png';
import Dollar from '../../../../assets/img/dollar.png';

class DeliverPayment extends Component{

    render(){

        return (
            <div>
                <section>
                    <p >Deliver method: </p>
                    <p >Do you live in a house or in a building? </p>

                    <div>
                        <img alt="" src={House} className={House} />
                        <img alt="" src={Building} className={Building} />
                    </div>

                    <p style={{fontSize: '18px'}}>Payment method:</p>
                    <p >How will you pay for the purchase?</p>
                    <Button > Cash</Button>
                    <Button ><img src={Dollar} ></img>Electronic payment </Button>
                    <Button>No purchase needed</Button>

                    <Button><p>SEND REQUEST</p></Button>
                </section>
            </div>

        );
    }
}

export default DeliverPayment;