import React from 'react';
import './Projects.css';

class ProjectWelcomePage extends React.Component {
    render() {
        return (
            <div className="projectItem-container">
                    <div className="welcome-container">
                        <p className="project-welcome-text">Klicke nach rechts um meine bisherigen Software Projekte zu sehen!</p>
                    </div>
            </div>
        );
    }
}

export default ProjectWelcomePage;