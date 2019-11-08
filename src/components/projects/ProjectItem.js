import React from 'react';
import './Projects.css'
import WebsiteImage from './WebsiteImage.PNG'

class ProjectItem extends React.Component {
    constructor(props) {
        console.log(props.content);
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
                <div className="projectItem-body-container">
                    <div className="projectItem-text-content">
                        <p>{this.props.content}</p>
                    </div>
                    <div className="projectItem-image-content">
                        <img src={WebsiteImage} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectItem;