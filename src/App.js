import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import MainPanel from './components/mainPanel/MainPanel';

function App() {
  return (
    <div className="App">
      <Sidebar className="sidebar"></Sidebar>
      <MainPanel className="mainPanel"></MainPanel>
    </div>
  );
}

export default App;
