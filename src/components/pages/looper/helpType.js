import React from "react";
import Header from '../menu_dashboard/looper_header'
import { Link } from "react-router-dom";


import Profile from '../../../assets/img/hero-header/profile.svg'
import Chat from '../../../assets/img/hero-header/chat.svg'
import RateLooper from '../../../assets/img/hero-header/rateLooper.svg'
import HallofFame from '../../../assets/img/hero-header/hallOfFame.svg'
import HeroLog from '../../../assets/img/hero-header/heroLog.svg'
import Task from '../../../assets/img/hero-header/task.svg'
import Map from '../../../assets/img/hero-header/map.svg'

import Button from "react-bootstrap/Button";
import Food from "../../../assets/img/tasks/food.svg";
import Transport from "../../../assets/img/tasks/travel.svg";
import Pharmacy from "../../../assets/img/tasks/pharmacy.svg";
import Other from "../../../assets/img/tasks/other.svg";


class RequestHelpType extends React.Component {
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
        <section id="req_helptype">
          <div className="text-box">
            <h1>How can we help ?</h1>
            <p>
              click the buttons for food,transport or pharmacy trips help.User "other" for anything else
            </p>
          </div>

            <div className="helptype">
			 <div className="req_food">
			   <Link to="/looper/request/foodRequest">
                  <img align="center" alt="" src={Food} className={Food} />
		       </Link>
			 </div>
			 <div className="req_trans">
                <Link to="/looper/request/transRequest">
                   <img alt="" src={Transport} className={Transport} />
				   <p>Transport</p>
                </Link>
			  </div>
			  <div className="req_med">
				<Link to="/looper/request/medRequest">
                  <img align="center" alt="" src={Pharmacy} className={Pharmacy} />
				  <p style={{color:"black"}}>Pharmacy</p>

                </Link>
			  </div>
			  <div className="req_other">
				<Link to="/looper/request/othersRequest">
                  <img align="center" alt="" src={Other} className={Other} />
				  <p>Other</p>
                </Link>
			  </div>
            </div>
        </section>
      </div>
	  </>
    );
  }
}

export default RequestHelpType;
 