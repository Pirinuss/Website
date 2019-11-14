import React from 'react';
import './Contact.css';
import githubImage from '../projects/githubIcon.png';
import facebookImage from './facebookIcon.png';
import linkedInIcon from './linkedInIcon.png';
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const animation = keyframes`${zoomIn}`;
 
const BouncyDiv = styled.div`
  animation: 1s ${animation};
`;
class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <BouncyDiv>
                    <div className="contact-container">
                        <h1 className="test">Kontakt</h1>
                        <div className="contact-image-container">
                            <img className="contact-images" src={githubImage} alt="Das Bild kann nicht dargestellt werden" />
                            <img className="contact-images" src={facebookImage} alt="Das Bild kann nicht dargestellt werden" />
                            <img className="contact-images" src={linkedInIcon} alt="Das Bild kann nicht dargestellt werden" />
                        </div>    
                    </div>
                </BouncyDiv>
            </div>
        );
    }
}

export default Contact;