import React from 'react';
import ProjectItem from './ProjectItem.js';
import ProjectWelcomePage from './ProjectWelcomePage.js'
import InfiniteCarousel from 'react-leaf-carousel';
import WebsiteImage from './WebsiteImage.PNG';
import WorkloadGeneratorImage from './WorkloadGeneratorImage.PNG';
import PasswortManagerImage from './PasswortManagerImage.png';
import './Projects.css'
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const animation = keyframes`${zoomIn}`;
 
const BouncyDiv = styled.div`
  animation: 1s ${animation};
`;

const WebsiteContent = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
const WorkloadGeneratorContent = 'Meine Bachelorarbeit! Mit diesem in Java geschriebenem Tool können spielend leicht HTTP- und FTP-Request erzeugt werden. Somit eignet sich das Tool hervorragend, um Lasttests für Netzwerkapplikationen aufzusetzen. Darüber hinaus können auch mit Hilfe von speziellen Requests, die auf dem BFT-SMaRt Protokoll aufbauen, sicherheitskritische, verteile Systeme getestet werden.';
const PasswordGeneratorContent = 'Mit diesem Projekt habe ich erste Erfahrungen im Designen von Nutzeroberflächen gesammelt. Dieses einfache Tool ermöglicht das anlegen von Passwortkategorien, auf die einzelne Passwörter aufgeteilt und abgespeichert werden können. ';

class Projects extends React.Component {
    render() {
        return (
            <div className="projects">
                <div className="header-container">
                </div>
                <div className="projects-container">
                    <div>
                    <InfiniteCarousel
                        breakpoints={[
                            {
                              breakpoint: 100,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 3,
                              },
                            },
                          ]} 
                        dots={true}
                        slidesToScroll={1}
                        slidesToShow={1}
                        scrollOnDevice={true}>
                        <ProjectWelcomePage />
                        <ProjectItem title="Website" content={WebsiteContent} image={WebsiteImage}></ProjectItem>
                        <ProjectItem title="Passwort Manager" content={PasswordGeneratorContent} image={PasswortManagerImage} imageClass='website-image'></ProjectItem>
                        <ProjectItem title="Workload Generator" content={WorkloadGeneratorContent} image={WorkloadGeneratorImage}></ProjectItem>
                    </InfiniteCarousel>   
                    </div> 
                </div>
            </div>
        );
    }
}

export default Projects;