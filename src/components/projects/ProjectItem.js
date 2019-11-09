import React from 'react';
import './Projects.css'
import WebsiteImage from './WebsiteImage.PNG'
import githubIcon from './githubIcon.png'

class ProjectItem extends React.Component {
    constructor(props) {
        console.log(props.content);
        super(props);
    }
    render() {
        return (
            <div className="projectItem-container">
                <div className="projectItem-header-container">
                    <h1 className="projectItem-header">{this.props.title}</h1>
                </div>
                <div className="projectItem-body-container">
                    <div className="projectItem-text-content">
                        <div className="content-top-container">
                            <p>{this.props.content}</p>
                        </div>
                        <div className="content-bottom-container">
                            <p className="icon-text">Zum Projekt:</p>
                            <img className="github-icon" src={githubIcon} alt="icon can´t be rendered"/>
                        </div>
                    </div>
                    <div className="projectItem-image-content">
                        <img className="projectItem-image" src={this.props.image} />
                    </div>
                </div>
                <div className="projectItem-footer-container">
                    <div className="deco-div" />
                    <h2 className="projectItem-header" />
                    <div className="deco-div" />
                </div>
            </div>
        );
    }
}

export default ProjectItem;