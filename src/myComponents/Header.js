import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  const btnStyle = {
    width: "140px !important",
    border: '2px solid #fff',
    color: "#fff",
    borderRadius: '8px',
    padding: '6px 20px',
  }
  return (
    <div className="header">
      <div className="brand"><Link to="/">Techrones</Link></div>
      <div className="links">
          <ul className="link-list">
              <li><Link to="/about">About</Link></li>                    
              <li>
                <Link to="/signin" style={btnStyle} className='hover-btn'>
                  Sign In
                </Link>
              </li>                                      
          </ul>
      </div>
    </div>
  )
}

export default Header