import React, { useState } from 'react';
import './About.css';
import './it-skills/ITSkills.css'
import {
    Link
  } from "react-router-dom";
import ITSkills from './it-skills/ITSkills';
import { CSSTransition } from 'react-transition-group';

export function About() {

    const [inProp, setInProp] = useState(false);

    return (
        <div className="container"> 
            <div className="about">
                <div className="about-container">
                    <Link to='/about/facts'>
                        <div className="box other-container">
                            <div className="cell-header-container">
                                <h1 className="cell-header">Fakten</h1>
                            </div>
                        </div>
                    </Link>    
                    <div className="box it-skills-container" onClick={() => setInProp(true)}>
                        <div className="cell-header-container">
                            <h1 className="cell-header">IT-Skills</h1>
                        </div>
                    </div>
                    <div className="box sport-container" onClick={() => setInProp(false)}>
                        <div className="cell-header-container">
                            <h1 className="cell-header">Hobbies</h1>
                        </div>
                    </div>
                </div>
            </div>
            <CSSTransition in={inProp} timeout={999999999} classNames="itSkills2">
                <div className="transition-container">
                   <ITSkills />
                </div>
            </CSSTransition>
        </div>
        );
}

export default About;