import React from "react";
import { Link } from "react-router-dom";
import Header from '../../menu_dashboard/looper_header'

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Shopping from "../../../../assets/img/shopping.png";
import Phone from "../../../../assets/img/phone.png";

import pic from "../../../../assets/img/volunteer.png";
import pic1 from "../../../../assets/img/Vector.png";
import pic2 from "../../../../assets/img/food2.png";
import pic3 from "../../../../assets/img/driving.png";
import pic4 from "../../../../assets/img/med2.png";
import pic5 from "../../../../assets/img/other2.png";
import pic6 from "../../../../assets/img/clock.png";
import pic7 from "../../../../assets/img/bell.png";
import pic8 from "../../../../assets/img/heart.png";
import pic9 from "../../../../assets/img/eheart.png";
import pic10 from "../../../../assets/img/chaticon.png";
import pic11 from "../../../../assets/img/star.png";
import pic12 from "../../../../assets/img/high.png";
import pic13 from "../../../../assets/img/cloud.png";
import pic14 from "../../../../assets/img/flat.png";
import pic15 from "../../../../assets/img/point.png";
import pic16 from "../../../../assets/img/live.png";
import pic17 from "../../../../assets/img/image.png";
import pic18 from "../../../../assets/img/Mon.png";
import pic19 from "../../../../assets/img/Tue.png";
import pic20 from "../../../../assets/img/wed.png";
import pic21 from "../../../../assets/img/thu.png";
import pic22 from "../../../../assets/img/timeslot1.png";
import pic23 from "../../../../assets/img/timeslot2.png";
import pic24 from "../../../../assets/img/timeslot3.png";
import pic25 from "../../../../assets/img/editbutton.png";

import Profile from '../../../../assets/img/hero-header/profile.svg'
import Chat from '../../../../assets/img/hero-header/chat.svg'
import RateLooper from '../../../../assets/img/hero-header/rateLooper.svg'
import HallofFame from '../../../../assets/img/hero-header/hallOfFame.svg'
import HeroLog from '../../../../assets/img/hero-header/heroLog.svg'
import Task from '../../../../assets/img/hero-header/task.svg'
import Map from '../../../../assets/img/hero-header/map.svg'


class ProfileWeb extends React.Component {
	 menus = [
    {
      img: Profile,
      to: '/hero/profile/myprofile',
      text: 'Profile',
    },
    {
      img: Chat,
      to: '/chat',
      text: 'Chat',
    },
    {
      img: RateLooper,
      to: '/ratings/ratelooper',
      text: 'Rate a Looper',
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
      to: '/hero/request/mytasks2',
      text: 'My Tasks',
    },
    {
      img: Map,
      to: '/helper/map',
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
        <section id="Request_type">
			
			<div className="s15">
				<img id="s16" src={pic} />
				<img id="s17" src={pic16} />
				<p id="s18">Jane Green</p>
				<img alt="" id="s46" src={pic8} />
				<img alt="" id="s47" src={pic8} />
				<img alt="" id="s48" src={pic8} />
				<img alt="" id="s49" src={pic8} />
				<img alt="" id="s50" src={pic9} />
				<p id="s19"> Who I am:<br></br>
				I’m an art student in NYU with lots of extra time. Looking to help my local community.</p>
			</div>
			<div className="s20">
				<p id="s21">3# Country Rank</p>
				<p id="s22">Past 30 days:</p>
				<p id="s23">8</p>
				<p id="s24">Total Tasks:</p>
				<p id="s25">34</p>
			</div>
			<div>
				<img src={pic17} id="s27"/>
				<p id="s28">Why I’m here: 
				<br></br>Helping the elderly in my neighborhood has been contributing a lot to my good mood and activity levels during this time. I love meeting my neighbors and hearing their stories!</p>
				<div className="s29">
					<img alt="" src={pic2} id="s30"/>
					<img alt="" src={pic3} id="s31"/>
					<img alt="" src={pic4} id="s32"/>
					<img alt="" src={pic5} id="s33"/>
				</div>
				<Link to="/request/mytaskswebhero" >
				<button id="s34">Find a Task</button>
				</Link>
				<p id="s35">Notification Settings</p>
				<img src={pic7} id="s36" />
			</div>
			<div className="s26">
				<p id="s37">Available to Hero on:</p>
				<img alt="" src={pic18} id="s38"/>
				<img alt="" src={pic19} id="s39"/>
				<img alt="" src={pic20} id="s40"/>
				<img alt="" src={pic21} id="s41"/>
				<img alt="" src={pic22} id="s42"/>
				<img alt="" src={pic23} id="s43"/>
				<img alt="" src={pic24} id="s44"/>
				<Link to="/request/availability">
				<img alt="" src={pic25} id="s45"/>
				</Link>
			</div>
		</section>
      </div>
	  </>
    );
  }
}

export default ProfileWeb;
