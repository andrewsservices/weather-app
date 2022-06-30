import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./Home";

const Hourly = [3,6,9,12,15,18,21,24]

function App() {

const [weatherData,setWeatherData] = useState([])


useEffect(()=>{
  fetch('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json')
  .then(res=>res.json())
  .then(data=>{
    const newData = data.dataseries
    const filterdData = newData.filter(ticker=>{
      if(Hourly.includes(ticker.timepoint)){
        return true
      }
    })
    setWeatherData(filterdData)
  })
},[])




  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Home 
            weatherData={weatherData}
          />} />
      </Routes>
    </div>
  );
}

export default App;
