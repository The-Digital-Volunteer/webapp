import React from "react";
import { Link } from "react-router-dom";
import Header from '../../menu_dashboard/looper_header'

import Profile from '../../../../assets/img/hero-header/profile.svg'
import Chat from '../../../../assets/img/hero-header/chat.svg'
import RateLooper from '../../../../assets/img/hero-header/rateLooper.svg'
import HallofFame from '../../../../assets/img/hero-header/hallOfFame.svg'
import HeroLog from '../../../../assets/img/hero-header/heroLog.svg'
import Task from '../../../../assets/img/hero-header/task.svg'
import Map from '../../../../assets/img/hero-header/map.svg'


import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import food from "../../../../assets/img/tasks/food.svg";
import small_transport from "../../../../assets/img/small_transport.png";
import small_med from "../../../../assets/img/small_med.png";
import small_other from "../../../../assets/img/small_other.png";


class FoodRequest extends React.Component {
	menus = [
    {
      img: Profile,
      to: '/looper/profile/myprofile',
      text: 'Profile',
    },
    {
      img: Chat,
      to: '/chat',
      text: 'Chat',
    },
    {
      img: RateLooper,
      to: '/ratings/ratehero',
      text: 'Rate a Hero',
    },
    {
      img: HallofFame,
      to: '/hall-of-fame',
      text: 'Hall of Fame',
    },
    {
      img: HeroLog,
      to: '/ratings/myheroapp',
      text: 'My Hero Log',
    },
    {
      img: Task,
      to: '/hero/request/mytasks',
      text: 'My Tasks',
    },
    {
      img: Map,
      to: '/request/map',
      text: 'The Map',
    },
    {
      to: '/request',
      text: 'I need a Hero',
    },
  ]

  render() {
	  
    return (
	<>
	<Header menus={this.menus} />
    
      <div className="wrapper">
        <section id="request_food">
		<Link to="/looper/request/foodRequest">
		<img alt="" src={food}/><br/>
		</Link>
		<div className="Needtochange"><p>Need to change ?click here :</p> </div>
		<div>
		<Link to="/looper/request/transRequest">
		<img alt="" src={small_transport} id="i2" /><br/>
		</Link>
		<Link to="/looper/request/medRequest">
		 <img alt="" src={small_med} id="i4" /><br/>
		 </Link>
		 <Link to="/looper/request/othersRequest">
		 <img alt="" src={small_other} id="i3"/><br/>
		 </Link>
		 </div>
		 
          
            <div className="Food_reqtext"><p>
              Our Heros are here to help with Food Shopping.
            </p></div>
        
			
          <Form>
            <Form.Group>
              <Form.Label>Grocery Shopping List:</Form.Label>
              <Form.Control as="textarea" rows="5" placeholder="Type your request here.If you need multiple items,list everything here."/>
            </Form.Group>
          </Form>
		
         
          <div>
            <Link to="/looper/availability">
              <Button className="btn btn-block helper-btn">
                Next:Delivery Time
              </Button>
            </Link>
          </div>
        </section>
      </div>
	  </>
    );
  }
}

export default FoodRequest;
