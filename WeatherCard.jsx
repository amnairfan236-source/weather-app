import React from 'react';
import OutfitAdvice from './OutfitAdvice';

function WeatherCard({ weather }) {
  return (
    <div className="weather-info">
      <h3>{weather.name}, {weather.sys.country}</h3>
      <h1 className="temp">{Math.round(weather.main.temp)}°C</h1>
      <p className="condition">{weather.weather[0].description}</p>
      <OutfitAdvice temp={weather.main.temp} />
    </div>
  );
}

export default WeatherCard;