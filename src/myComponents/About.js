import React from 'react'
import ReactDOM from 'react-dom';
import AboutMain from './aboutComponents/AboutMain';
import When from './aboutComponents/When';
import Why from './aboutComponents/Why';
import How from './aboutComponents/How';
import Goals from './aboutComponents/Goals';

function About() {
    (function() {
        const content = document.getElementById("content");
        var links = document.querySelectorAll(".a");
        links.forEach(text => {
            switch(text.innerHTML){
                case 'About' : text.addEventListener("click", function(){
                                        ReactDOM.render(<AboutMain />, content)
                                        console.log("About clicked !")
                                    });
                                break;
                case 'When' : text.addEventListener("click", function(){
                                        ReactDOM.render(<When />, content)
                                        console.log("When clicked !")
                                    });
                                break;
                case 'Why' : text.addEventListener("click", function(){
                                        ReactDOM.render(<Why />, content)
                                        console.log("Why clicked !")
                                    });
                                break;
                case 'How' : text.addEventListener("click", function(){
                                        ReactDOM.render(<How />, content)
                                        console.log("How clicked !")
                                    });
                                break;
                case 'Goals' : text.addEventListener("click", function(){
                                        ReactDOM.render(<Goals />, content)
                                        console.log("Goals clicked !")
                                    });
                                break;
                default : ReactDOM.render(<AboutMain />, content);
            }
        });
    })();
  return (
    <div className='about'>
        <h1>Techrones</h1>
        <div className='links' style={{padding: '0px'}}>
            <ul className='link-list' style={{justifyContent:'flex-start', padding: '0px', margin:'0'}}>
                <li className="a">About</li>
                <li className="a">When</li>
                <li className="a">Why</li>
                <li className="a">How</li>
                <li className="a">Goals</li>
            </ul>
        </div>
        <div id='content'></div>
    </div>
  )
}

export default About