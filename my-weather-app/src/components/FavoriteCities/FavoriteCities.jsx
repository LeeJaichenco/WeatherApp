import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FavoriteCities.css';
import DetailedWeatherCard from '../DetailedWeatherCard';

const FavoriteCities = () => {
  const [cities, setCities] = useState([]);
  const [newCityName, setNewCityName] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const fetchFavoriteCities = async () => {
    try {
      const response = await axios.get('http://localhost:5000/favorite_cities');
      const favoriteCities = response.data;

      // Fetch current weather data for each favorite city
      const updatedCities = await Promise.all(
        favoriteCities.map(async (city) => {
          try {
            const apiKey = '6c39b74035a3fa2b64c509d85e542bf0';
            const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}&units=metric`;
            const currentWeatherResponse = await axios.get(currentWeatherUrl);
            const currentWeatherData = currentWeatherResponse.data;
            const updatedCity = {
              ...city,
              main: currentWeatherData.main,
              weather: currentWeatherData.weather,
              wind: currentWeatherData.wind,
            };
            return updatedCity;
          } catch (error) {
            console.error(`Error fetching weather data for ${city.name}:`, error);
            return city;
          }
        })
      );

      setCities(updatedCities);
    } catch (error) {
      console.error('Error fetching favorite cities:', error);
    }
  };

  useEffect(() => {
    fetchFavoriteCities();
  }, []);

  const handleAddCity = async () => {
    if (!newCityName) return;

    // Check if the city already exists
    const isCityDuplicate = cities.some(
      (city) => city.name.toLowerCase() === newCityName.toLowerCase()
    );

    if (isCityDuplicate) {
      // City is already in favorites, show an alert
      setAlertMessage('City already in favorites.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/add_city', {
        name: newCityName,
      });

      if (response.status === 201) {
        setNewCityName('');
        fetchFavoriteCities();
        setAlertMessage('City added successfully.');
      }
    } catch (error) {
      console.error('Error adding city:', error);
    }
  };

  const handleRemoveCity = async (city) => {
    try {
      const response = await axios.delete('http://localhost:5000/remove_city', {
        data: { name: city.name },
      });

      if (response.status === 200) {
        fetchFavoriteCities();
        setAlertMessage('City removed successfully.');
      }
    } catch (error) {
      console.error('Error removing city:', error);
    }
  };

  return (
    <div className="favorite-main">
      <h2 className="header">Favorite Cities Weather</h2>
      <div className="add-city-form">
        <input
          type="text"
          placeholder="Enter city name"
          value={newCityName}
          onChange={(e) => setNewCityName(e.target.value)}
          className="input-field"
        />
        <button onClick={handleAddCity} className="add-button">
          Add City
        </button>
      </div>
      {alertMessage && <div className="alert">{alertMessage}</div>}
      <div className="city-cards">
        {cities.map((city, index) => (
          <DetailedWeatherCard
            key={index}
            city={city}
            onRemove={() => handleRemoveCity(city)}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );  
};

export default FavoriteCities;
