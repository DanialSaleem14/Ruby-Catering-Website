import React, { useState, useEffect } from "react";

function WeatherPage() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("Lahore");
  const [inputCity, setInputCity] = useState("");

  const fetchWeather = async () => {
    try {
      setError(null); // Reset error
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},PK&appid=f2336559808080b0ea9307e03f96614d&units=metric`
      );
      if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(errorDetails.message || "City not found");
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setWeather(null); // Clear previous weather data
      setError(err.message);
    }
  };

  const handleCitySearch = (e) => {
    e.preventDefault();
    if (inputCity.trim() === "") {
      setError("Please enter a valid city name.");
      return;
    }
    setCity(inputCity.trim()); // Update city for fetching weather
  };

  useEffect(() => {
    fetchWeather();
  }, [city]); // Fetch weather whenever `city` changes

  return (
    <div className="weather-container">
      <h1 className="weather-title">Weather App</h1>
      {/* Input Field and Search Button */}
      <form onSubmit={handleCitySearch} className="weather-form">
        <input
          type="text"
          placeholder="Enter city name"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          className="weather-input"
        />
        <button type="submit" className="weather-button">
          Search
        </button>
      </form>

      {/* Display Weather Data or Error */}
      {weather && (
        <h2 className="weather-title">Weather in {weather.name}, Pakistan</h2>
      )}
      {error && <p className="weather-error">Error: {error}</p>}
      {weather ? (
        <div className="weather-info">
          <p>
            <strong>City:</strong> {weather.name}
          </p>
          <p>
            <strong>Temperature:</strong> {weather.main.temp}°C
          </p>
          <p>
            <strong>Feels Like:</strong> {weather.main.feels_like}°C
          </p>
          <p>
            <strong>Humidity:</strong> {weather.main.humidity}%
          </p>
          <p>
            <strong>Weather:</strong> {weather.weather[0].description}
          </p>
        </div>
      ) : (
        !error && <p className="weather-loading">Loading weather data...</p>
      )}
    </div>
  );
}

export default WeatherPage;
