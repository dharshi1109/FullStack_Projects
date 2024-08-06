import React, { useState } from 'react';


function Weather() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = 'f8aa214cacd9fb1deb8e29cdbacaee19';

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${API_KEY}`);
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="container">
      <div className="weather-app">
        <h1>Weather App</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {weatherData ? (
          <div className="weather-data">
            <h2>Current Weather for {weatherData.name}</h2>
            <p>Temperature: {weatherData.main?.temp}°C</p>
            <p>Humidity: {weatherData.main?.humidity}%</p>
            <p>Wind Speed: {weatherData.wind?.speed} m/s</p>
            {weatherData.weather && (
              <p>Precipitation: {weatherData.weather[0]?.description}</p>
            )}
          </div>
        ) : (
          <p>No weather data available</p>
        )}
      </div>
    </div>
  );
}

export default Weather;
