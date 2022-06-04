import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  const btnStyle = {
    width: "140px !important",
    border: '1px solid #fff',
    color: "#fff",
    borderRadius: '4px',
    padding: '6px 20px',
    "&:hover": {
      backgroundColor: '#fff',
      color: '#000'
    }
  }
  return (
    <div className="header">
      <div className="brand"><Link to="/">Techrone</Link></div>
      <div className="links">
          <ul className="link-list">
              <li><Link to="/about">About</Link></li>                    
              <li>
                <Link to="/signin" style={btnStyle}>
                  Sign In
                </Link>
              </li>                                      
          </ul>
      </div>
    </div>
  )
}

export default Header