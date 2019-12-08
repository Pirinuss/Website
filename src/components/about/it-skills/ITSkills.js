import React from 'react';
import './ITSkills.css';
import collapseIcon from '../collapseIcon.png';

class ITSkills extends React.Component {

    render() {
        return (
            <div className="itskills" id="itskills">
                <div className="basics">

                    <ul>
                        <li>Java</li>
                        <li>Git</li>
                    </ul>
                </div>
                <div className="webentwicklung">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Vue</li>
                    </ul>
                </div>
                <div className="projektmanagement">
                    <ul>
                        <li>Scrum</li>
                        <li>Kanban</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ITSkills;