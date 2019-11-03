import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import MainPanel from './components/mainPanel/MainPanel';

function App() {
  return (
    <div className="App">
      <Sidebar className="sidebar"></Sidebar>
      <MainPanel className="mainPanelContainer"></MainPanel>
    </div>
  );
}

export default App;
