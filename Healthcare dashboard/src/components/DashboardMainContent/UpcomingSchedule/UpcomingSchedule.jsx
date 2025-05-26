import React from 'react';
import './UpcomingSchedule.css';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';
import { upcomingSchedule } from '../../../data/appointments';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule-card">
      <h3 className="upcoming-schedule-title">The Upcoming Schedule</h3>
      <div className="schedule-days-container">
        {Object.entries(upcomingSchedule).map(([day, appointments]) => (
          <div key={day} className="schedule-day-section">
            <h4 className="schedule-day-heading">On {day.charAt(0).toUpperCase() + day.slice(1)}</h4>
            <div className="appointments-grid">
              {appointments.map(appointment => (
                <SimpleAppointmentCard
                  key={appointment.id}
                  title={appointment.title}
                  time={appointment.time}
                  icon={appointment.icon} // Pass icon placeholder
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;