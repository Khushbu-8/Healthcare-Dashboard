import React, { useState } from 'react';
import './App.css'; // Main app styles
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="app-container">
      {/* <Header /> */}
      <div className="main-layout">
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <DashboardMainContent toggleSidebar = {toggleSidebar} />
      </div>
    </div>
  );
}

export default App;
