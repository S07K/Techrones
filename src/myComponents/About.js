import React from 'react'
import AboutMain from './aboutComponents/AboutMain';
import { Link } from 'react-router-dom';

function About() {

    return (
        <div className='about'>
            <h1>Techrones</h1>
            <div className='links' style={{padding: '0px'}}>
                <ul className='about-list' style={{justifyContent:'flex-start', padding: '0px', margin:'0'}}>
                    <li>About</li>
                    <div id='content'><AboutMain /></div>
                    <div>
                        <span><Link to='/about/when' className='a'>When</Link></span>
                        <span><Link to='/about/why' className='a'>Why</Link></span>
                        <span><Link to='/about/how' className='a'>How</Link></span>
                        <span><Link to='/about/goals' className='a'>Goals</Link></span>
                    </div>
                    
                </ul>
            </div>
        </div>
    )
}

export default About