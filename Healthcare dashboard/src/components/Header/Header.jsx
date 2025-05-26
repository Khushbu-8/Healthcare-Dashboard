import React from 'react';
import './Header.css';
// import { Bell, User, Plus } from 'lucide-react'; // Example icons, will use appropriate ones

const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="logo-title">
        Healthcare.
      </div>
      <div className="search-bar-container">
        {/* <SearchIcon className="search-icon" /> */}
        <input type="text" placeholder="Search" className="search-input" readOnly />
      </div>
      <div className="header-actions">
        {/* <Bell size={24} className="action-icon" /> */}
        <div className="user-profile">
          <img src="https://via.placeholder.com/40" alt="User Avatar" className="user-avatar" />
          {/* <span className="user-name">User Name</span> */}
        </div>
        <button className="add-button">
          {/* <Plus size={20} /> */}
          +
        </button>
      </div>
    </header>
  );
};

export default Header;