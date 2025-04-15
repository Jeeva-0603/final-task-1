import React, { useEffect, useState } from 'react';

const DashboardPage = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const apiKey = 'bb3104e5fe4c939ee6f95df13d32b093';
    const city = 'Pollachi';
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(data => setWeather(data));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Dashboard</h2>
      {weather ? (
        <div>
          <p>City: {weather.name}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default DashboardPage;
