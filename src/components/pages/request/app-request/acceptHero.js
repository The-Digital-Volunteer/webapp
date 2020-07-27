import React, {Component } from 'react';
import Jane from '../../../../assets/img/voluteer.png';

class AcceptHero extends Component{

    render(){

        return(
            <div>
                <div style={{ position: 'absolute', width: '414px', height: '219px', left: '0px', top: '0px', background: '#68ADEC'}}>
                    <img alt="" src={Jane} className={Jane} style={{ position: 'absolute', width: '196.18px',  height: '244.13px', left: '23px',
                    top: '59.82px', background: 'url(IMG_3748.jpg)'}}/>
                    <p >Jane Green</p>
                    <p>3# Rank in Sweden</p>
                </div>
                <p >"Helping the elderly in my neighborhood has been contributing a lot to my good mood and activity levels 
                    during this time. I love meeting my neighbors and hearing their stories!""
                </p>

                <div>
                    <p>Accept this Hero:</p>
                    <Link to="">
                        <Button className="btn btn-block yes">Yes</Button>
                    </Link>
                    <Button className="btn btn-block yes">KeepLooking</Button>
                </div>
            </div>

        );
    }
}

export default AcceptHero;
