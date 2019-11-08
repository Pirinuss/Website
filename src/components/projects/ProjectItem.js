import React from 'react';
import './Projects.css'

class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="projectItem-container">
                <div className="projectItem-header-container">
                    <div className="deco-div" />
                    <h2 className="projectItem-header">{this.props.title}</h2>
                    <div className="deco-div" />
                </div>
            </div>
        );
    }
}

export default ProjectItem;