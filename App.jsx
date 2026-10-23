import React, { useState } from 'react';

const WeatherCard = () => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!city.trim()) {
      setError('Please enter a city name.');
      return;
    }
    
    // Call API here...
    // If city fails:
    // setError('City not found. Please check the spelling!');
  };

  return (
    <div className="weather-container">
      <div className="weather-card">
        <div className="card-header">
          <span className="weather-icon">🌧️</span>
          <h2>Weather & Outfit Companion</h2>
        </div>

        <div className="input-group">
          <input
            type="text"
            placeholder="lahore..."
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              setError('');
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {error && <p className="error-msg">{error}</p>}
      </div>
    </div>
  );
};

export default WeatherCard;