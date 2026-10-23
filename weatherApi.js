const API_KEY = '895284fb2d2c50a520ea537456963d9c';

export const fetchWeatherData = async (lahore) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('City not found!');
  }
  return await response.json();
};