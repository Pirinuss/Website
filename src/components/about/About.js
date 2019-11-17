import React from 'react';
import './About.css';
import {
    Link
  } from "react-router-dom";
export class About extends React.Component {
    render() {
        return (
           <div className="about">
                <div className="about-container">
                    <Link to='/about/sport'>
                        <div className="box sport-container">
                            <h1 className="cell-header">SPORT</h1>
                        </div>
                    </Link>    
                    <Link to='/about/itskills'>
                        <div className="box it-skills-container">
                            <h1 className="cell-header">IT-SKILLS</h1>
                        </div>
                    </Link>
                    <Link to='/about/other'>
                        <div className="box other-container">
                            <h1 className="cell-header">PLACEHOLDER</h1>
                        </div>
                    </Link>
                    <Link to='/about/other'>
                        <div className="box other-container">
                            <h1 className="cell-header">SONSTIGES</h1>
                        </div>
                    </Link>
                </div>
           </div>
        );
    }
}

export default About;