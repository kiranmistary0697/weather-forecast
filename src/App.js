import { useEffect, useState } from "react";
import { getWeatherData } from "./services";
import "./styles.css";
import Weather from "./Weather";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    setWeatherData(getWeatherData());
  }, []);
  console.log("weatherData", weatherData);
  return (
    <div className="App">
      {weatherData ? (
        <Weather
          location={weatherData.location}
          forecast={weatherData.forecast.forecastday}
        />
      ) : (
        "Loading Weather Data"
      )}
    </div>
  );
}
