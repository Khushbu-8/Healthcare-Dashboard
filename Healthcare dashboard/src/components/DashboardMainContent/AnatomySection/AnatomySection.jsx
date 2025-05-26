import React from 'react';
import './AnatomySection.css';
import { anatomicalIndicators } from '../../../data/healthData';

// Placeholder for anatomical image - replace with actual path or import
import anatomyImage from  '../../../../public/human-body-frontal.png' // Replace with actual image

const AnatomySection = () => {
  return (
    <div className="anatomy-section-card">
      <div className="anatomy-image-container">
        <img src={anatomyImage} alt="Anatomical Illustration" className="anatomy-image" />
        {anatomicalIndicators.map(indicator => (
          <div
            key={indicator.id}
            className={`health-indicator ${indicator.status}`}
            style={{ top: indicator.position.top, left: indicator.position.left }}
          >
            {/* Placeholder for icon if needed */}
             <img src={indicator.icon } width={15} alt="" />
            <span style={{color: indicator.status === 'healthy' ? 'white' : 'black'}}>
              {indicator.label}</span>
          </div>
        ))}
      </div>
      {/* Optional: Zoom controls or other interactive elements if depicted */}
      <div className="anatomy-controls">
        <button>+</button>
        
      </div>
    </div>
  );
};

export default AnatomySection;