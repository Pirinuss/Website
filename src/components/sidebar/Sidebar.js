import React from 'react';
import './Sidebar.css';
import profilpic from './profilpic.jpg';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div className="logo-container">
                    <img className="logo" src={profilpic}></img>
                </div>
                <div className="info-container">
                    <h2>Marc Wendelborn</h2>  
                </div>
                <div className="menu">
                <div className="link-container">
                        <a className="menu-link" href="/">Home</a>
                    </div>
                    <div className="link-container">
                        <a className="menu-link" href="/">Über mich</a>
                    </div>
                    <div className="link-container">
                        <a className="menu-link" href="/">Projekte</a>
                    </div>
                    <div className="link-container">
                        <a className="menu-link" href="/">Kontakt</a>
                    </div>
                </div>
                <div className="footer">
                    <p>Copyright @2019</p>
                </div>
            </div>    
        );
    }
}

export default Sidebar;