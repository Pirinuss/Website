import React from 'react';
import './Sidebar.css';
import profilpic from './profilpic.jpg';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: 'Willkommen!'};
    }

    changeInfoText(text) {
        this.setState({text: text});
    }

    render() {
        return (
            <div className="sidebar">
                <div className="header">
                    <div className="deco-bar"></div>
                </div>
                <div className="info-container">
                    <h2 className="name-label">Marc Wendelborn</h2>  
                </div>
                <div className="menu">
                <div className="link-container">
                        <a onMouseOver={() => {this.changeInfoText('Willkommen!')}} className="menu-link" href="/">Home</a>
                    </div>
                    <div className="link-container">
                        <a onMouseOver={() => {this.changeInfoText('Wer ist dieser Marc eigentlich?')}} className="menu-link" href="/">Über mich</a>
                    </div>
                    <div className="link-container">
                        <a className="menu-link" href="/">Projekte</a>
                    </div>
                    <div className="link-container">
                        <a className="menu-link" href="/">Kontakt</a>
                    </div>
                </div>
                <div className="deco-bar bottom"></div>
                <div className="footer">
                    <p>Copyright @2019</p>
                </div>
            </div>    
        );
    }
}

export default Sidebar;