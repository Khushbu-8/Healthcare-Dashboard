import React from "react";
import "./CalendarView.css";
import {
  calendarAppointments,
  appointmentDetails,
} from "../../../data/appointments";
// import { ChevronLeft, ChevronRight } from 'lucide-react'; // Example icons
import { RiArrowLeftFill } from "react-icons/ri";
import { RiArrowRightFill } from "react-icons/ri";
const CalendarView = () => {
  // Static data for October 2021
  const monthName = "October 2021";
  const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  // Simplified static grid of days for one week. A full calendar would be more complex.
  // This example focuses on the days shown in the image: 25-31
  const calendarDays = [
    {
      day: "Mon",
      date: 25,
      appointments: calendarAppointments["2021-10-25"] || [],
    },
    {
      day: "Tues",
      date: 26,
      appointments: calendarAppointments["2021-10-26"] || [],
    },
    {
      day: "Wed",
      date: 27,
      appointments: calendarAppointments["2021-10-27"] || [],
    },
    {
      day: "Thurs",
      date: 28,
      appointments: calendarAppointments["2021-10-28"] || [],
    },
    {
      day: "Fri",
      date: 29,
      appointments: calendarAppointments["2021-10-29"] || [],
    },
    {
      day: "Sat",
      date: 30,
      appointments: calendarAppointments["2021-10-30"] || [],
    },
    {
      day: "Sun",
      date: 31,
      appointments: calendarAppointments["2021-10-31"] || [],
    },
  ];

  return (
    <div className="calendar-view-card">
      <div className="calendar-header">
        <h3 className="calendar-month">{monthName}</h3>
        <div className="calendar-navigation">
          {/* Navigation arrows */}
          <RiArrowLeftFill size={20} />

          <RiArrowRightFill size={20} />
        </div>
      </div>
      <div className="calendar-grid">
       
        {calendarDays.map((dayObj) => (
          <div key={dayObj.day} className="calendar-day-cell">
            {/* <div className="day-label">{dayObj.day}</div> */}
            <span className="calendar-day-label">{dayObj.day}</span>
            <span className="day-number">{dayObj.date}</span>

            <div className="appointments-on-day">
              {dayObj.appointments.map((app, index) => (
                <div key={index} className="calendar-appointment-time">
                  {app.time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="appointment-details-section">
        {appointmentDetails.map((detail) => (
          <div key={detail.id} className="appointment-detail-card">
            {/* Icon placeholder: <div className="appointment-icon">{detail.icon}</div> */}
            <div className="appointment-info">
              <h5 className="appointment-title">{detail.title}</h5>
            <img src={detail.icon} alt="" width={20} />

              </div>
              <p className="appointment-time">{detail.time}</p>
              <p className="appointment-doctor">{detail.doctor}</p>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
