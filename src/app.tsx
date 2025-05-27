import React, { useState, useEffect } from 'react';

export const App = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // ⚠️ Replace with your valid OpenWeatherMap API key
  const API_KEY = 'YOUR_API_KEY_HERE';

  const fetchWeather = async () => {
    if (!location.trim()) {
      setError('Please enter a location');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const currentResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );
      const currentData = await currentResponse.json();

      if (currentResponse.ok) {
        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`
        );
        const forecastData = await forecastResponse.json();

        if (forecastResponse.ok) {
          setWeather({
            current: currentData,
            forecast: forecastData.list.slice(0, 3), // 3-day forecast
          });
        } else {
          setError('Failed to fetch forecast data');
        }
      } else {
        setError(currentData.message || 'Location not found');
      }
    } catch (err) {
      setError('An error occurred while fetching weather data');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeather();
  };

  const getDay = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const getIcon = (iconCode: string) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-red-200 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4 sm:p-6 border-b border-red-200">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-red-700 italic tracking-widest">🔥 Talent</h1>
            <p className="text-sm sm:text-base text-red-600 mt-1">Current weather and 3-day forecast</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row max-w-6xl mx-auto px-4 py-6">
        {/* Search Card */}
        <div className="w-full md:w-64 md:sticky md:top-24 space-y-6 mb-6 md:mb-0">
          <div className="bg-white rounded-xl shadow p-4 border border-red-100 hover:shadow-md transition-shadow">
            <h3 className="text-sm font-medium text-red-700 mb-3">Search Weather</h3>
            <form onSubmit={handleSearch} className="space-y-3">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter city or ZIP"
                className="w-full px-3 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 rounded-lg font-medium transition-all transform active:scale-98 ${
                  loading
                    ? 'bg-red-400 text-white cursor-not-allowed opacity-50'
                    : 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700'
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-7 w-7 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Loading...
                  </span>
                ) : (
                  'Get Weather'
                )}
              </button>
            </form>
            {error && (
              <p className="text-red-600 text-sm mt-2 flex items-center bg-red-50 px-2 py-1 rounded border border-red-200">
                <svg
                  className="w-4 h-4 mr-1 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {error}
              </p>
            )}
          </div>
        </div>

        {/* Weather Display */}
        <div className="w-full md:pl-6 space-y-6">
          {weather ? (
            <>
              {/* Current Weather */}
              <div className="bg-white rounded-xl shadow p-5 border border-red-100 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-semibold text-red-700 mb-4">Current Weather in {weather.current.name}</h2>
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex items-center mb-4 md:mb-0">
                    <img
                      src={getIcon(weather.current.weather[0].icon)}
                      alt={weather.current.weather[0].description}
                      className="w-16 h-16"
                    />
                    <div className="ml-4">
                      <p className="text-3xl font-bold text-red-800">{Math.round(weather.current.main.temp)}°C</p>
                      <p className="text-red-600">{weather.current.weather[0].description}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-red-600">Feels like {Math.round(weather.current.main.feels_like)}°C</p>
                    <p className="text-red-600">Humidity: {weather.current.main.humidity}%</p>
                    <p className="text-red-600">Wind: {weather.current.wind.speed} m/s</p>
                  </div>
                </div>
              </div>

              {/* 3-Day Forecast */}
              <div className="bg-white rounded-xl shadow p-5 border border-red-100 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-semibold text-red-700 mb-4">3-Day Forecast</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {weather.forecast.map((item, index) => (
                    <div
                      key={index}
                      className="bg-red-50 p-3 rounded-lg border border-red-200 text-center hover:shadow-sm transition-shadow"
                    >
                      <p className="text-sm font-medium text-red-700">{getDay(item.dt)}</p>
                      <img
                        src={getIcon(item.weather[0].icon)}
                        alt={item.weather[0].description}
                        className="w-12 h-12 mx-auto"
                      />
                      <p className="text-lg font-bold text-red-800">{Math.round(item.main.temp)}°C</p>
                      <p className="text-red-600">{item.weather[0].description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white rounded-xl shadow p-5 border border-red-100 text-center">
              <p className="text-red-500">Enter a location to get the weather</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4 px-4 text-center text-red-500 text-sm border-t border-red-200">
        <p className="mb-1 font-medium">Powered by OpenWeatherMap API</p>
        <p className="font-medium">© 2025 Talent. All rights reserved.</p>
      </footer>
    </div>
  );
};
