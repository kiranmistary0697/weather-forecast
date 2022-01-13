// import axios from "axios";

// const WEATHER_API_URL = "http://api.weatherapi.com/v1/forecast.json?key=698dc13c77094cf187695058201212&q=London&days=1";

// export const getWeatherData = async () => {
//   return await axios.get(WEATHER_API_URL);
// }

import weatherData from './forecast.json';
export const getWeatherData = () => {
  return weatherData;
}