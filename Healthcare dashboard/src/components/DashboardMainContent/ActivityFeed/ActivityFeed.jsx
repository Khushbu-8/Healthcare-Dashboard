import React from 'react';
import './ActivityFeed.css'; // Ensure you have the correct CSS for styling
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import { activityData } from '../../../data/appointments'; // 

const ActivityFeed = () => {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  
  // Combine your data for Recharts
  const chartData = days.map((day, index) => ({
    day,
    primary: activityData.dailyActivity[index],
    secondary: Math.floor(activityData.dailyActivity[index] * 0.6), // adjust for visual appeal
  }));

  return (
    <div className="activity-feed-card">
      <div className="activity-header">
        <h3 className="activity-title">Activity</h3>
        <p className="activity-summary">{activityData.appointmentsThisWeek} appointments on this week</p>
      </div>

      <ResponsiveContainer width="100%" height={100}>
        <BarChart data={chartData} barCategoryGap="30%">
          <XAxis dataKey="day" />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey="primary" fill="#00D1FF" barSize={2} radius={[10, 10, 0, 0]} />
          <Bar dataKey="secondary" fill="#7F8BFF" barSize={2} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityFeed;
