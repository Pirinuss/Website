import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import ITSkills from './components/about/it-skills/ITSkills';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar className="sideBar"></Sidebar>
        <div className="mainPanel">
          <Switch>
            <Route path="/about/itskills">
              <ITSkills />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch> 
        </div> 
      </div>
      <div className="disableMobile">
        <h1>The mobile version of this website is coming soon!</h1>
        <h1>The website is currently only available for screens with a maximum width of higher than 1024 pixels</h1>
      </div>
    </Router>
  );
}

export default App;
