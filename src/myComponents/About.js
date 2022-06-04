import React from 'react'
import AboutMain from './aboutComponents/AboutMain';
import When from './aboutComponents/When';
import Why from './aboutComponents/Why';
import How from './aboutComponents/How';
import Goals from './aboutComponents/Goals';

function About() {

    return (
        <div className='about'>
            <h1>Techrones</h1>
            <div className='links' style={{padding: '0px'}}>
                <ul className='about-list' style={{justifyContent:'flex-start', padding: '0px', margin:'0'}}>
                    <li className="about-list">About</li>
                    <div id='content'><AboutMain /></div>
                    <li className="about-list" id='when'>When</li>
                    <div id='content'><When /></div>
                    <li className="about-list" id='why'>Why</li>
                    <div id='content'><Why /></div>
                    <li className="about-list" id='how'>How</li>
                    <div id='content'><How /></div>
                    <li className="about-list" id='goals'>Goals</li>
                    <div id='content'><Goals /></div>
                </ul>
            </div>
        </div>
    )
}

export default About