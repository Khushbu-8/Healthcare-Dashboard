import React from 'react';
import './Sidebar.css';
import { generalNavigationLinks, toolsNavigationLinks, settingsNavigationLink } from '../../data/navigation';
import { CrossIcon } from 'lucide-react';
import { RxCross2 } from "react-icons/rx";


const Sidebar = ({ isOpen, onClose }) => {
  return (
    <aside className={`dashboard-sidebar ${isOpen ? 'open' : 'closed'}`}>
      <nav className="sidebar-nav">
        <div className="nav-section">
         <div className="logo">
           <h1><span>Health</span>care.</h1>
           <button className="close-btn" onClick={onClose}><RxCross2 size={25}/></button>
         </div>
          <h3 className="nav-heading">General</h3>
          <ul>
            {generalNavigationLinks.map(link => (
              <li key={link.id} className={`nav-item ${link.id === 'dashboard' ? 'active' : ''}`}>
                <span className="nav-icon">
                  <link.icon className="icon" width={20} />
                </span>
                <a href="#">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-section">
          <h3 className="nav-heading">Tools</h3>
          <ul>
            {toolsNavigationLinks.map(link => (
              <li key={link.id} className="nav-item">
                <span className="nav-icon">
                  <link.icon className="icon" />
                </span>
                <a href="#">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-section settings-section">
          <ul>
            <li key={settingsNavigationLink.id} className="nav-item">
              <span className="nav-icon">
                <settingsNavigationLink.icon className="icon" size={20} />
              </span>
              <a href="#">{settingsNavigationLink.label}</a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
