import React from 'react';
import './SimpleAppointmentCard.css';
// Placeholder for icons, e.g., import { Syringe, Eye, Heart, Brain } from 'lucide-react';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-appointment-card">
      <div className="card-content">
        <h5 className="appointment-card-title">{title}</h5>
        <p className="appointment-card-time">{time}</p>
      </div>
      {/* Placeholder for actual icon */}
      <div className="appointment-card-icon"><img src={icon} alt={title} /></div>
    </div>
  );
};

export default SimpleAppointmentCard;