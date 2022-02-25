import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="brand">Tecrones</div>
      <div className="links">
          <ul className="link-list">
              <li><Link to="/">Home</Link></li>                    
              <li><Link to="/about">About</Link></li>                    
              <li><Link to="/contact">Contact Us</Link></li>                    
          </ul>
      </div>
    </div>
  )
}

export default Header
 