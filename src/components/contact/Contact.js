import React from 'react';
import './Contact.css';
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
                    </div>
                </BouncyDiv>
            </div>
        );
    }
}

export default Contact;