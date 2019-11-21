import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import MainPanel from './components/mainPanel/MainPanel';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
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
    </Router>
  );
}

export default App;
