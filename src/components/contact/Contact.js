import React from 'react';
import './Contact.css';
import mailIcon from './mailIcon.png';
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
                        <h1 className="test">Hier bin ich zu erreichen:</h1>
                        <div className="contact-image-container">
                            <a href="mailto:marcwendelborn@web.de" target="_blank" rel="noopener noreferrer">
                                <img className="contact-images mail" src={mailIcon} alt="Das Bild kann nicht dargestellt werden" />
                            </a>
                            <a href="https://www.facebook.com/marc.wendelborn.1?ref=bookmarks" target="_blank" rel="noopener noreferrer">    
                                <img className="contact-images" src={facebookImage} alt="Das Bild kann nicht dargestellt werden" />
                            </a>
                            <a href="https://www.linkedin.com/in/marc-wendelborn-a36088191/" target="_blank" rel="noopener noreferrer">    
                                <img className="contact-images" src={linkedInIcon} alt="Das Bild kann nicht dargestellt werden" />
                            </a>    
                        </div>    
                    </div>
                </BouncyDiv>
            </div>
        );
    }
}

export default Contact;