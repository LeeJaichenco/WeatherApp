# Weather App

## Overview

This Weather App is a web application that allows users to check the current weather and the 5-day forecast for their favorite cities. Users can add and remove cities to/from their favorites list for quick access.

## Features

- **Current Weather:** Get real-time information about the temperature, description, humidity, and wind speed for a specific city.

- **5-Day Forecast:** Check the upcoming weather forecast for the next 5 days, including temperature, description, and other relevant details.

- **Favorite Cities:** Save your favorite cities to the list for quick access to their weather information.

## Technologies Used

- **Frontend:** React
- **Backend:** Flask (Python)
- **Database:** MongoDB

## How to Use

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies:**
   ```bash
   # Frontend (React)
   cd frontend
   npm install

   # Backend (Flask)
   cd backend
   pip install -r requirements.txt
   ```

3. **Start the Application:**
   ```bash
   # Frontend (React)
   cd frontend
   npm start

   # Backend (Flask)
   cd backend
   flask run
   ```

4. **Open in Browser:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to use the Weather App.

## Adding Your API Key and MongoDB URL

### OpenWeatherMap API Key

To fetch weather data, you need to obtain an API key from [OpenWeatherMap](https://openweathermap.org/api). Once you have the key:

1. Navigate to the `backend` folder in the project.
2. Open the `.env` file.
3. Replace the placeholder `YOUR_OPENWEATHERMAP_API_KEY` with your actual API key.

```plaintext
OPENWEATHERMAP_API_KEY=YOUR_OPENWEATHERMAP_API_KEY
```

### MongoDB URL

To store and retrieve favorite cities, the app uses MongoDB. Follow these steps to set up your MongoDB connection:

1. Create a MongoDB Atlas account or use your existing one.
2. Create a new cluster and obtain the connection URL.
3. Navigate to the `backend` folder in the project.
4. Open the `.env` file.
5. Replace the placeholder `YOUR_MONGODB_URL` with your actual MongoDB connection URL.

```plaintext
MONGODB_URL=YOUR_MONGODB_URL
```

With both keys added, your Weather App is ready to use!

---

This section guides users through the process of obtaining and adding both the OpenWeatherMap API key and the MongoDB connection URL. Adjust the instructions based on your specific setup and preferences.

## Screenshots

![Screenshot 1](/screenshots/screenshot1.png)
*Add a description here.*

![Screenshot 2](/screenshots/screenshot2.png)
*Add a description here.*

## Acknowledgments

- This Weather App was created as a project for learning React, Flask, and MongoDB.
- Weather data is powered by [OpenWeatherMap](https://openweathermap.org/).
