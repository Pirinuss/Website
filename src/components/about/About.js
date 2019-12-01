import React, { useState } from 'react';
import './About.css';
import './it-skills/ITSkills.css'
import {
    Link
  } from "react-router-dom";
import ITSkills from './it-skills/ITSkills';
import {Animated} from "react-animated-css";

export function About() {

    const [inProp, setInProp] = useState(true);

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
            <Animated animationIn="fadeInDown" animationOut="fadeOutDown" animateOnMount={false} isVisible={inProp}>
                <div>
                <ITSkills closeMethod={setInProp}/>
                </div>
            </Animated>
        </div>
        );
}

export default About;