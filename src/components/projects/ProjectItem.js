import React from 'react';
import './Projects.css'
import githubIcon from './githubIcon.png'

class ProjectItem extends React.Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        const imageClassName = 'projectItem-image ' + this.props.imageClass;
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
                            <img className='github-icon' src={githubIcon} alt="Icon kann nicht angezeigt werden"/>
                        </div>
                    </div>
                    <div className="projectItem-image-content">
                        <img className={imageClassName} alt="Bild kann nicht angezeigt werden" src={this.props.image} />
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