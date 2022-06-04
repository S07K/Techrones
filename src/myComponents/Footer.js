import React from 'react'

function Footer() {
  return (
    <>
        <div className="footer">
            <div className="brand footer-brand">Tecrones</div>
            <div className="footer-links">
                <div className="about-links">
                    <p>About</p>
                    <ul>
                        <li><a href="/about#when">When</a></li>
                        <li><a href="/about#why">Why</a></li>
                        <li><a href="/about#how">How</a></li>
                        <li><a href="/about#goals">Goals</a></li>
                    </ul>
                </div>
                <div className="connect">
                    <p>Connect</p>
                    <ul>
                        <li><a href="_">twitter</a></li>
                        <li><a href="_">facebook</a></li>
                        <li><a href="_">instagram</a></li>
                    </ul>
                </div>
                <div className="other-links">
                    <p>Other links</p>
                    <ul>
                        <li><a href="_">Blogs</a></li>
                        <li><a href="_">Privacy</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="credits">© Shubham Kumar 2022</div>
    </>
  )
}

export default Footer