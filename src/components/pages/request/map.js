import React from 'react'
import Header from '../helper/header'

import Profile from '../../../assets/img/hero-header/looper.svg'
import Chat from '../../../assets/img/hero-header/chat.svg'
import RateLooper from '../../../assets/img/hero-header/rateLooper.svg'
import HallofFame from '../../../assets/img/hero-header/hallOfFame.svg'
import HeroLog from '../../../assets/img/hero-header/heroLog.svg'
import Task from '../../../assets/img/hero-header/task.svg'

class RequestMap extends React.Component {
  menus = [
    {
      img: Profile,
      to: '/profile',
      text: 'Profile',
    },
    {
      img: Chat,
      to: '/chat',
      text: 'Chat',
    },
    {
      img: RateLooper,
      to: '/rate-looper',
      text: 'Rate a Hero',
    },
    {
      img: HallofFame,
      to: '/hall-of-fame',
      text: 'Hall of Fame',
    },
    {
      img: HeroLog,
      to: '/hero-log',
      text: 'My Hero Log',
    },
    {
      img: Task,
      to: '/tasks',
      text: 'My Requests',
    },
    {
      to: '/help',
      text: 'Offer help',
    },
  ]
  render() {
    return (
      <>
        <Header menus={this.menus} />
        <div className='wrapper'>
          <section id='registration_finish'>
            <div className='text-box'>
              <h3>Here you can see all people who can help</h3>
              <p>
                Here you can see where people who can help are
                located. Click on the pins to see information
                about the volunteers.
              </p>
            </div>

            <div>Filter pins and map...</div>
          </section>
        </div>
      </>
    )
  }
}

export default RequestMap
