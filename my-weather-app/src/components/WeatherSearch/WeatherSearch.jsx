// WeatherSearch.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './WeatherSearch.css'; // Import the CSS file
import DetailedWeatherCard from '../DetailedWeatherCard'; // Import the new component

const WeatherSearch = () => {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiKey = '6c39b74035a3fa2b64c509d85e542bf0';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

      const response = await axios.get(apiUrl);
      const data = response.data;
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  return (
    <div className="weather-main">
      <h2>Weather Search</h2>
      <form className="weather-form" onSubmit={handleSubmit}>
        <label htmlFor="cityName" className="weather-form-label">
          Enter City Name:
        </label>
        <input
          type="text"
          id="cityName"
          className="weather-input"
          value={cityName}
          onChange={handleInputChange}
          placeholder="Example: Miami"
        />
        <button type="submit" className="weather-button">
          Search
        </button>
      </form>

      {weatherData && <DetailedWeatherCard city={weatherData} />}
    </div>
  );
};

export default WeatherSearch;