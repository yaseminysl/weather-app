import { useEffect } from "react";
import { useState } from "react";
import WeatherGrid from "./grid";

function Weather() {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("TR");

  function fetchWeather(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=ce8e0abf46f42fb75fbaaa848e84518a&units=metric`
    )
      .then((res) => res.json())
      .then((weather) => {
        let fiveDaysData = [];
        for (let i = 0; i < weather.list.length; i += 8) {
          fiveDaysData.push({
            tempMax: weather.list[i].main.temp_max,
            tempMin: weather.list[i].main.temp_min,
            date: weather.list[i].dt_txt,
            icon: `http://openweathermap.org/img/wn/${weather.list[i].weather[0].icon}@2x.png`,
            description: weather.list[i].weather.description,
          });
        }
        setWeatherData(fiveDaysData);
      });
  }
  return (
    <div
      style={{
        display: "-ms-inline-flexbox",
        alignItems: "center",
      }}
    >
      <h1>Weather App</h1>
      <br />
      <br />

      <br />
      <input
        type="text"
        placeholder="City..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && fetchWeather(city)}
      />
      <button onClick={() => fetchWeather(city)}>Search</button>
      <WeatherGrid fiveDaysData={weatherData} />
    </div>
  );
}

export default Weather;
