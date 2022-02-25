import dvid from './Assets/dvid.mp4';

import React from 'react'

function Welcome() {
  return (
    <div className = 'welcome'>
      <video autoPlay muted loop id="myVideo">
          <source src={dvid} type="video/mp4" />
      </video>
      <div className='layer'>
          <h1>Hola!</h1>
          <p className='p1'>Sky Drivers</p>
          <p className='p2'>
              You can be the next to drive our fully-automatic <b>Drones</b> with AI functionality.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Donec sem nisl, gravida eget quam et, convallis venenatis turpis. 
              Aenean bibendum luctus molestie.
          </p>
      </div>
    </div>
  )
}

export default Welcome
