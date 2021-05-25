import React from 'react';
import ProjectItem from './ProjectItem.js';
import ProjectWelcomePage from './ProjectWelcomePage.js'
import InfiniteCarousel from 'react-leaf-carousel';
import WebsiteImage from './WebsiteImage.PNG';
import WorkloadGeneratorImage from './WorkloadGeneratorImage.PNG';
import PasswortManagerImage from './PasswortManagerImage.png';
import QoodsImage from './qoods.PNG'
import './Projects.css'
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const animation = keyframes`${zoomIn}`;
 
const BouncyDiv = styled.div`
  animation: 1s ${animation};
`;

const WebsiteContent = 'Als Entwickler kann ich meine eigene Website ja nicht einfach mit einem Tool erstellen - deswegen habe ich sie von Grund auf selbst entwickelt. Dadurch konnte ich das Zusammenspiel von HTML, Javascript und CSS sowie den Umgang mit verschiedenen Javascript Frameworks wie React und Node üben. Aktuell ist die Ansicht der Website für mobile Geräte zwar noch deaktiviert, allerdings ist eine mobile Version bereits in Arbeit.';
const WorkloadGeneratorContent = 'Meine Bachelorarbeit! Mit diesem in Java geschriebenem Tool können spielend leicht HTTP- und FTP-Request erzeugt werden. Somit eignet sich das Tool hervorragend, um Lasttests für Netzwerkapplikationen aufzusetzen. Darüber hinaus können auch mit Hilfe von speziellen Requests, die auf dem BFT-SMaRt Protokoll aufbauen, sicherheitskritische, verteile Systeme getestet werden.';
const PasswordGeneratorContent = 'Auch wenn noch lange nicht fertig bietet die App zumindest die wichtigsten Funktionen eines Passwortmanagers. Passwörter anlegen, kategorisieren und somit stets das benötigte Passwort schnell zur Stelle zu haben. Die Passwörter werden mit eines Hash-Funktion verschlüsselt und auf der Festplatte gespeichert. Die App habe ich mit Java Swing entwickelt und damit erste praktische Erfahrung im Designen von Nutzeroberflächen erhalten. Am Design muss eventuell noch geschraubt werden, aber das wird sicher noch… ;) ';
const QoodsContent = 'Im Rahmen des Hackathons der Bundesregierung zur Corona-Krise entwickelte ich mit einem interdisziplären Team aus Gesellschaftsforschern und Entwicklern eine Slotverwaltungssystem für Supermärkte. Ziel dieser App ist es, die Besucherzahlen von Supermärkten zu steuern und somit zu verhindern, dass sich zu viele Leute zeitgleich im Supermarkt aufhalten bzw. vor dem Supermarkt Schlange stehen. Dadurch soll die Gefahr einer weiteren Ausbreitung des Virus durch einkaufende Menschen reduziert werden.'

class Projects extends React.Component {
    render() {
        return (
            <div className="projects">
                <div className="projects-container">
                    <div className="test">
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
                        <ProjectItem title="QOODS" content={QoodsContent} image={QoodsImage}></ProjectItem>
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