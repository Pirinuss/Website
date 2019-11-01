import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div className="logo"></div>
                <div className="personal-infos"></div>
                <div className="menu">
                    <a className="menu-link" href="/">Über mich</a>
                    <a className="menu-link" href="/">Projekte</a>
                </div>
            </div>    
        );
    }
}

export default Sidebar;