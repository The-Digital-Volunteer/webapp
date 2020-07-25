import React from 'react'
import MapContainer from '../shared/googlemap'
import Header from './header'
import { Link } from 'react-router-dom'
import Profile from '../../../assets/img/hero-header/profile.svg'
import Chat from '../../../assets/img/hero-header/chat.svg'
import RateLooper from '../../../assets/img/hero-header/rateLooper.svg'
import HallofFame from '../../../assets/img/hero-header/hallOfFame.svg'
import HeroLog from '../../../assets/img/hero-header/heroLog.svg'
import Task from '../../../assets/img/hero-header/task.svg'
import Map from '../../../assets/img/hero-header/map.svg'
class RequestMap extends React.Component {
  state = {
    apiKey: '',
  }

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
      text: 'Rate a Looper',
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
      text: 'My Tasks',
    },
    {
      img: Map,
      to: '/map',
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
        <div className='wrapper'>
          <section id='map-wrapper'>
            <div className='text-box'>
              <p className='title'>Who need help?</p>
              <p className='subtitle'>
                Click on the pins to see the task details
                <Link
                  className='subtitle-right'
                  to='/request/map'
                >
                  I need help
                </Link>
              </p>
            </div>
            <MapContainer apiKey={this.state.apiKey} />
          </section>
        </div>
      </>
    )
  }
}

export default RequestMap
