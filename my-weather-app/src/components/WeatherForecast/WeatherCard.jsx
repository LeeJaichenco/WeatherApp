import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ time, temperature, description }) => {
  return (
    <div className="forecast-card">
      <div className="time">{time}</div>
      <div className="temperature">{temperature}°C</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default WeatherCard;
