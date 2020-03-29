import React from 'react';
import './ITSkills.css';
import collapseIcon from '../collapseIcon.png';

class ITSkills extends React.Component {

    render() {
        return (
            <div className="itskills">
                <div className="itskills-header">
                    <h1>IT-Skills</h1>
                </div>
                <div className="content">
                    <div className="categorie">
                        <h3 className="content-header">Grundlagen</h3>
                        <ul className="basics">
                            <li>Java</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <div className="categorie">
                        <h3 className="content-header">Webentwicklung</h3>
                        <ul className="webentwicklung">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Node</li>
                        </ul>
                    </div>
                    <div className="categorie ">
                        <h3 className="content-header">Projektmanagement</h3>
                        <ul className="projektmanagement">
                            <li>Scrum</li>
                            <li>Kanban</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ITSkills;