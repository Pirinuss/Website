import React from 'react';
import './ITSkills.css';
import collapseIcon from '../collapseIcon.png';

class ITSkills extends React.Component {

    render() {
        return (
            <div className="itskills">
                <div className="itskills-container">
                    <div className="itskills-header">
                        <div className="header-box">
                            <h3>Basics</h3>
                        </div>
                        <div className="header-box">
                            <h3>Webentwicklung</h3>
                        </div>
                        <div className="header-box">
                            <h3>Projektmanagement</h3>
                        </div>
                    </div>   
                    <div className="itskills-body">
                        <div className="body-box basics">
                            <ul>
                                <li>Java</li>
                                <li>Git</li>
                            </ul>
                        </div>
                        <div className="body-box webentwicklung">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Vue</li>
                            </ul>
                        </div>
                        <div className="body-box projektmanagement">
                            <ul>
                                <li>Scrum</li>
                                <li>Kanban</li>
                            </ul>
                        </div>
                    </div>
                    <div id="footer" className="itskills-footer">
                        <img className="backIcon" src={collapseIcon} alt="Bald kann nicht dargestellt werden" onClick={() => this.props.closeMethod(false)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ITSkills;