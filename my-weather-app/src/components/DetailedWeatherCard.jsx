import React from 'react';
import './DetailedWeatherCard.css';

const DetailedWeatherCard = ({ city, onRemove, isFavorite = false }) => {
  return (
    <div className="card">
      <div className="card-header">
        {city.name}
        {isFavorite && (<button onClick={() => onRemove(city.name)} className="remove-button">
          Remove
        </button>
        )}
      </div>
      <div className="card-body">
        <p className="card-text">
          Temperature: {city.main.temp}°C
        </p>
        <p className="card-text">
          Description: {city.weather[0].description}
        </p>
        <p className="card-text">
          Humidity: {city.main.humidity}%
        </p>
        <p className="card-text">
          Wind Speed: {city.wind.speed} m/s
        </p>
      </div>
    </div>
  );
};

export default DetailedWeatherCard;