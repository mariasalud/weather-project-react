import React from "react";
import "./Weather.css";


export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 12,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 20
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city"
              className="form-control"
              autoComplete="off"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-primary w-100"
              value="Search"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated:{weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              class="float-left"
            />
            <div className="float-left">
              <strong> {weatherData.temperature} </strong>
              <span className="units">
                <a href="/"> °C </a> | <a href="/"> °F </a>
              </span>
            </div>
          </div>
        </div>
        <div class="col-6">
          <ul>
            <li>Precipitation:16%</li>
            <li>Wind:{weatherData.wind} MPH</li>
            <li>Humidity:{weatherData.humidity} %</li>
          </ul>
        </div>
      </div>
    </div>
  );
}