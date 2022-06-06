import dimage from './Assets/dimage.png';

import React from 'react'

function Product() {
  return (
    <div className="product">
      <div className="dimage">
          <img src={dimage} alt="The limitless Drone" />
      </div>
      <div className="dinfo">
          <h1>The limitless</h1>
          <p>
          This is our limitless drone functionality demo. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem nisl, gravida eget quam et, convallis venenatis turpis. Aenean bibendum luctus molestie.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem nisl, gravida eget quam et, convallis venenatis turpis. Aenean bibendum luctus molestie.
          </p>
          <div className='btn'>
            <a href='_'>View all</a>
        </div>
      </div>
    </div>
  )
}

export default Product
