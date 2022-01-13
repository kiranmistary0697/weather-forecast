import moment from "moment";

function WeatherHour({ weatherHourData, key }) {
  console.log("weatherHourData : ", weatherHourData);
  return (
    <div key={key} className="hourly-data">
      <div>
        <div>{moment(weatherHourData.time).format("H A")}</div>
        <img src={weatherHourData.condition.icon} alt="weather" />
        <div>{weatherHourData.temp_c} C</div>
      </div>
    </div>
  );
}

export default function Weather({ location, forecast }) {
  console.log("Hours", forecast[0]);
  return (
    <div>
      <div className="location">
        <h1>{location.name}</h1>
        <h3>{location.region}</h3>
      </div>
      <div className="hours-container">
        {forecast[0].hour.map((h, index) => (
          <WeatherHour weatherHourData={h} key={index} />
        ))}
      </div>
    </div>
  );
}
