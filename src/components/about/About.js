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
                        <div className="box other-container">
                            <div className="cell-header-container">
                                <h1 className="cell-header">Fakten</h1>
                            </div>
                        </div>
                    </Link>    
                    <Link to='/about/itskills'>
                        <div className="box it-skills-container">
                        <div className="cell-header-container">
                                <h1 className="cell-header">IT-Skills</h1>
                            </div>
                        </div>
                    </Link>
                    <Link to='/about/other'>
                        <div className="box sport-container">
                        <div className="cell-header-container">
                                <h1 className="cell-header">Hobbies</h1>
                            </div>
                        </div>
                    </Link>
                </div>
           </div>
        );
    }
}

export default About;