import React from 'react';
import './HealthStatusCards.css';
import { healthStatusCardsData } from '../../../data/healthData';

const HealthStatusCard = ({ icon, title, date, status, progress }) => {
  // Determine color based on status for progress bar
  let progressBarColorClass = '';
  if (status === 'healthy') progressBarColorClass = 'progress-healthy';
  else if (status === 'warning') progressBarColorClass = 'progress-warning';
  else if (status === 'critical') progressBarColorClass = 'progress-critical';

  return (
    <div className="health-status-card">
      <div className="card-header">
        {/* Placeholder for actual icon */}
        <div className="card-icon"><img src={icon} alt={title} /></div>
        <h4 className="card-title">{title}</h4>
      </div>
      <p className="card-date">{date}</p>
      <div className="progress-bar-container">
        <div
          className={`progress-bar-fill ${progressBarColorClass}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards-container">
      {healthStatusCardsData.map(card => (
        <HealthStatusCard
          key={card.id}
          icon={card.icon}
          title={card.title}
          date={card.date}
          status={card.status}
          progress={card.progress}
        />
      ))}
      <a href="#" className="details-link">Details &rarr;</a>
    </div>
  );
};

export default HealthStatusCards;