// MainPage.js
import React, { useState } from 'react';
import './MainPage.css';
import FavoriteCities from '../FavoriteCities/FavoriteCities';
import WeatherSearch from '../WeatherSearch/WeatherSearch';
import WeatherForecast from '../WeatherForecast/WeatherForecast';

const MainPage = () => {
  const [isFavoriteCitiesVisible, setFavoriteCitiesVisible] = useState(false);
  const [isWeatherSearchVisible, setWeatherSearchVisible] = useState(false);
  const [isWeatherForecastVisible, setWeatherForecastVisible] = useState(false);

  const handleButtonClick = (component) => {
    switch (component) {
      case 'favoriteCities':
        setFavoriteCitiesVisible((prev) => !prev);
        setWeatherSearchVisible(false);
        setWeatherForecastVisible(false);
        break;
      case 'weatherSearch':
        setWeatherSearchVisible((prev) => !prev);
        setFavoriteCitiesVisible(false);
        setWeatherForecastVisible(false);
        break;
      case 'weatherForecast':
        setWeatherForecastVisible((prev) => !prev);
        setFavoriteCitiesVisible(false);
        setWeatherSearchVisible(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="buttonContainer">
        <button
          className="button"
          onClick={() => handleButtonClick('favoriteCities')}
        >
          Favorite Cities
        </button>
        <button
          className="button"
          onClick={() => handleButtonClick('weatherSearch')}
        >
          Weather Search
        </button>
        <button
          className="button"
          onClick={() => handleButtonClick('weatherForecast')}
        >
          Weather Forecast
        </button>
      </div>
      {isFavoriteCitiesVisible && <FavoriteCities />}
      {isWeatherSearchVisible && <WeatherSearch />}
      {isWeatherForecastVisible && <WeatherForecast />}
    </div>
  );
};

export default MainPage;
