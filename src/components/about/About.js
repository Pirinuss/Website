import React, { useState } from 'react';
import './About.css';
import './it-skills/ITSkills.css'
import ITSkills from './it-skills/ITSkills';
import {Animated} from "react-animated-css";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export function About() {

    function showElement(elementId) {
        var element = document.getElementById(elementId);
        element.classList.add("display");
        setInProp(true);
    }

    const [inProp, setInProp] = useState(false);

    return (
        <div className="container"> 
            <div className="about">
                <div className="about-container">
                    <div className="box">
                        <Flippy flipOnClick={true} flipDirection="horizontal">
                            <FrontSide>
                                <div className="flip-card facts-front">
                                    <div className="cell-header-container">
                                        <h1 className="cell-header">Fakten</h1>
                                    </div>
                                </div>
                            </FrontSide>
                            <BackSide>
                                <div className="flip-card back">
                                    <h1>Fakten</h1>
                                </div>
                            </BackSide>
                        </Flippy>
                    </div>
                    <div className="box">
                    <Flippy flipOnClick={true} flipDirection="horizontal">
                            <FrontSide>
                                <div className="flip-card it-skills-front">
                                    <div className="cell-header-container">
                                        <h1 className="cell-header">IT-Skills</h1>
                                    </div>
                                </div>
                            </FrontSide>
                            <BackSide>
                                <ITSkills />
                            </BackSide>
                        </Flippy>
                    </div>
                    <div className="box" >
                        <Flippy flipOnClick={true} flipDirection="horizontal">
                            <FrontSide>
                                <div className="flip-card sport-front">
                                    <div className="cell-header-container">
                                        <h1 className="cell-header">Hobbies</h1>
                                    </div>
                                </div>
                            </FrontSide>
                            <BackSide>
                                <div  className="flip-card back">
                                    <h1>Hobbies</h1>
                                </div>
                            </BackSide>
                        </Flippy>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default About;