import React from 'react';
import {
    Link,
    NavLink
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
                        <NavLink to='/about' className="menu-link" activeClassName="selected">Über mich</NavLink>
                    </div>
                    <div className="link-container"> 
                        <NavLink to='/projects' className="menu-link" activeClassName="selected">Projekte</NavLink>
                    </div>
                    <div className="link-container">
                        <NavLink to='/contact' className="menu-link" activeClassName="selected">Kontakt</NavLink>
                    </div>
                </div>
                <div className="footer">
                    <div className="deco-bar bottom"></div>
                </div>
            </div>    
        );
    }
}

export default Sidebar;