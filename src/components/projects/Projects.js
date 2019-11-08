import React from 'react';
import ProjectItem from './ProjectItem.js';
import './Projects.css'

class Projects extends React.Component {
    render() {
        return (
            <div className="projects">
                <div className="header-container">
                    <h2>PROJEKTE</h2>
                </div>
                <div className="projects-container">
                    <ProjectItem title="Website"></ProjectItem>
                    <ProjectItem title="Password Manager"></ProjectItem>
                    <ProjectItem title="Workload Generator"></ProjectItem>
                    <ProjectItem title="WEBSITE"></ProjectItem>
                </div>
            </div>
        );
    }
}

export default Projects;