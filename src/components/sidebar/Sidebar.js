import React from 'react';
import {
    Link
  } from "react-router-dom";
import './Sidebar.css';

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
                        <Link to='/' className="menu-link" onMouseOver={() => {this.changeInfoText('Willkommen!')}}>Home</Link>
                    </div>
                    <div className="link-container">
                        <Link to='/about' className="menu-link">Über mich</Link>
                    </div>
                    <div className="link-container"> 
                        <Link to='/projects' className="menu-link">Projekte</Link>
                    </div>
                    <div className="link-container">
                        <Link to='/contact' className="menu-link">Kontakt</Link>
                    </div>
                </div>
                <div className="footer">
                    <div className="deco-bar bottom"></div>
                </div>
                <div className="copyright">
                    <p>Copyright @2019</p>
                </div>
            </div>    
        );
    }
}

export default Sidebar;