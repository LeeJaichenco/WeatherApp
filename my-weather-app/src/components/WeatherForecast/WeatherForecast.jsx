// WeatherForecast.jsx
import React, { useState } from "react";
import axios from "axios";
import ForecastCard from "./ForecastCard"; // Rename the ForecastCard component if needed
import './WeatherForecast.css'

const WeatherForecast = () => {
  const [city, setCity] = useState("");
  const [forecastData, setForecastData] = useState({});

  const apiKey = "6c39b74035a3fa2b64c509d85e542bf0"; // Replace with your OpenWeatherMap API key

  const fetchForecastData = async () => {
    try {
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      const forecastData = forecastResponse.data;

      // Group forecasts by date
      const groupedForecasts = groupForecastsByDate(forecastData.list);

      setForecastData(groupedForecasts);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };

  const groupForecastsByDate = (forecasts) => {
    const grouped = {};
    forecasts.forEach((forecast) => {
      const date = forecast.dt_txt.split(" ")[0];
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(forecast);
    });
    return grouped;
  };

  return (
    <div className="weather-forecast">
      <h2>5-Day Weather Forecast</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchForecastData}>Search</button>
      </div>
      <div className="forecast-list">
        {Object.keys(forecastData).map((date) => (
          <ForecastCard key={date} date={date} forecasts={forecastData[date]} />
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
