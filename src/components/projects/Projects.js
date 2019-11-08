import React from 'react';
import ProjectItem from './ProjectItem.js';
import InfiniteCarousel from 'react-leaf-carousel';
import './Projects.css'

const WebsiteContent = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
const WorkloadGeneratorContent = 'empty';
const PasswordGeneratorContent = 'empty2';

class Projects extends React.Component {
    render() {
        return (
            <div className="projects">
                <div className="header-container">
                </div>
                <div className="projects-container">
                    <InfiniteCarousel
                        breakpoints={[
                            {
                              breakpoint: 100,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 4,
                              },
                            },
                          ]} 
                        dots={true}
                        slidesToScroll={1}
                        slidesToShow={1}
                        scrollOnDevice={true}>
                        <ProjectItem title="Website" content={WebsiteContent}></ProjectItem>
                        <ProjectItem title="Password Manager" content={PasswordGeneratorContent}></ProjectItem>
                        <ProjectItem title="Workload Generator" content={WorkloadGeneratorContent}></ProjectItem>
                        <ProjectItem title="WEBSITE"></ProjectItem>
                    </InfiniteCarousel>    
                </div>
            </div>
        );
    }
}

export default Projects;