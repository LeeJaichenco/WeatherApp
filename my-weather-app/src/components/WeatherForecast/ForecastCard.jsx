import React from "react";
import WeatherCard from "./WeatherCard";
import './ForecastCard.css'

const ForecastCard = ({ date, forecasts }) => {
  return (
    <div className="forecast-card">
      <h3 className="date">{date}</h3>
      {forecasts.map((forecast, index) => (
        <WeatherCard
          key={index}
          time={forecast.dt_txt.split(" ")[1]}
          temperature={forecast.main.temp}
          description={forecast.weather[0].description}
        />
      ))}
    </div>
  );
};

export default ForecastCard;
