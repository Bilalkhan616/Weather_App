import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [city, setCity] = useState({});
  const [search, setSearch] = useState('');

  const weatherApi = async (data) => {
    console.log(data)
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=71584c0ba104dde82413be284692fee7&units=metric`;
    try {
      let response = await axios.get(api, data);
      console.log(response);
      setCity(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="app">
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="btn-container">
        <button
          type="submit"
          className="search-btn"
          onClick={weatherApi}
        >
          Submit
        </button>
        </div>
      </div>
      {(typeof city.main != "undefined") ? (
        <div>
          <div className="main-container">
            <div className="city-box">
              <div className="city">{city.name},{city.sys.country}</div>
            </div>
            <div className="weather-container">
              <div className="temp-container">{city.main.temp}°c</div>
              {/* <img src= {`http://openweathermap.org/img/wn/${city.weather[0].icon}/@2x.png`} alt={"city.weather[0].icon"}/> */}
              <div className="condition-box">{city.weather[0].main}</div>
            </div>
          </div>
        </div>
      )
        :
        ("")
      }

    </div>
  );
}

export default App;
