import React, { useState } from "react";
import "./DashboardMainContent.css";
import AnatomySection from "./AnatomySection/AnatomySection";
import HealthStatusCards from "./HealthStatusCards/HealthStatusCards";
import CalendarView from "./CalendarView/CalendarView";
import UpcomingSchedule from "./UpcomingSchedule/UpcomingSchedule";
import ActivityFeed from "./ActivityFeed/ActivityFeed";
import { SearchIcon } from "lucide-react";
import { HiBell } from "react-icons/hi";
import Usercons from "../../../public/boy.png";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";


const DashboardMainContent = ({toggleSidebar}) => {
   
  return (
    <main className="dashboard-main-content">
         {/* <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} /> */}

      <div className="dashboard-grid">
        <section className="main-panel-left">
          <div className="dashboard-header">
            <button className="bar-icon" onClick={toggleSidebar} ><FaBars size={18}/></button>
            <div className="searchbox">
              <SearchIcon className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search"
              />
            </div>
              <button className="user-profile user-profile-left">
              <img src={Usercons} alt="User Avatar" className="user-avatar" />
              {/* <span className="user-name">User Name</span> */}
            </button>
            {/* <button className='bell-icon'></></button> */}
            <button className="bell-icon">
              <HiBell className="bell" size={20} />
            </button>
          </div>
          <div className="dashboard-header-section">
            <h1 className="dashboard-title">Dashboard</h1>
            {/* Placeholder for "This Week" dropdown if needed */}
            <div className="time-filter">This Week <IoIosArrowDown size={10} /></div>
          </div>
          <div className="anatomy-and-cards-wrapper">
            <AnatomySection />
            <HealthStatusCards />
          </div>
          <ActivityFeed />
        </section>
        <section className="main-panel-right">
          <div className="right-header">
            <button className="user-profile user-profile-right">
              <img src={Usercons} alt="User Avatar" className="user-avatar" />
              {/* <span className="user-name">User Name</span> */}
            </button>
            <button className="add-button">+</button>
          </div>
         <div className="left-wraper">
           <CalendarView />
          <UpcomingSchedule />
         </div>
        </section>
      </div>
    </main>
  );
};

export default DashboardMainContent;
