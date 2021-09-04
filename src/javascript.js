/**** Functions ****/

function displayCity(event) {
  event.preventDefault();
  let search = document.querySelector("#searchBar");
  let searchedCity = "Atlanta";
  if (search.value !== "") {
    searchedCity = search.value;
  }
 
  searchedCity = searchedCity.toLowerCase().trim();
  let unit = "imperial";
  let key = "326468886cdb97f0a6e01a8cc558a9e3";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${key}&units=${unit}`;
  
  axios.get(url).then(getCurrTemp);
 
}
function handlePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let unit = "imperial";
  let key = "326468886cdb97f0a6e01a8cc558a9e3";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unit}`;
  axios.get(url).then(getCurrTemp);
}
function getCurrTemp(response) {
  let currentTemp = document.querySelector("#currentTemp");
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  changeTime(response.data.dt, response.data.timezone);
  console.log(response);
  currentTemp.innerHTML = temperature;
  let locations = document.querySelector("#location");
  locations.innerHTML = city;
  changeDescription(response.data);
  getForecast(response.data.coord);
}
function getForecast(coordinates){
  console.log(coordinates);
  let key = "326468886cdb97f0a6e01a8cc558a9e3";
  let unit = "imperial"
  let forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${key}&units=${unit}`
  axios.get(forecastURL).then(displayForecast);
}
function changeCurrentLoc(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handlePosition);
}



function changeDescription (weather) {
  let currentDescription = document.querySelector("h1");
  currentDescription.innerHTML = weather.weather[0].main;
  let icon = weather.weather[0].icon;
  let iconElement = document.querySelector("#icon");
  let iconAddress =`http://openweathermap.org/img/wn/${icon}@2x.png`;

  iconElement.setAttribute("src",iconAddress);
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#windSpeed");
  wind.innerHTML=weather.wind.speed;
  humidity.innerHTML=weather.main.humidity;
}
function changeTime(timestamp, offset) {
  let dayTime = document.querySelector("div#date");
  let date = 0;
  if (offset === 0) {
    date = new Date(timestamp);
  } else {
    let now = new Date();
    let localOffset = -now.getTimezoneOffset();
    let offsetFinal = (offset / 3600 - localOffset / 60) * 3600;
    date = new Date((timestamp + offsetFinal) * 1000);
  }

  let hour = date.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = minutes.toString();
    minutes = "0" + minutes;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
 
  let dayOrNight = "";
  if (hour > 11) {
    dayOrNight = "pm";
    if (hour > 12) {
      hour = hour - 12;
    }
  } else {
    dayOrNight = "am";
  }
 
  let formattedDate = `${day} ${hour}:${minutes} ${dayOrNight}`;
 
  dayTime.innerHTML = formattedDate;
}
function formatDay(timestamp){
  let date = new Date(timestamp*1000);
  let day = date.getDay();
  let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  return days[day];
}
function displayForecast(response) {
  console.log(response.data.daily);
  let daily = response.data.daily.slice(0,5);
  
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="week">`;
  
  daily.forEach(function(day,i){
    
    let icon = day.weather[0].icon;
    
    unit = "F"
    
    
    forecastHTML = forecastHTML + `
      <span class="card" >
        <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="weatherIcons" width="50px" id = "icon"/>
            <h5 class="card-title">${formatDay(day.dt)}</h5>
              <p class="card-text">
                ${day.weather[0].main} <br />
                <strong>${Math.round(day.temp.max)}°${unit}/${Math.round(day.temp.min)}°${unit}</strong>
              </p>
      </span>`;
  })
  
    

  forecastHTML = forecastHTML +  `</div>`;
  forecastElement.innerHTML = forecastHTML;
}




/****everything else ****/
let now = new Date();
changeTime(now, 0);
document.addEventListener("DOMContentLoaded", displayCity);


let searchButton = document.querySelector("#searchForm");
searchButton.addEventListener("submit", displayCity);

let convertLink = document.querySelector("#otherUnit");
convertLink.addEventListener("click", changeUnits);

/*get current position*/
let currentLocButton = document.querySelector("a#currentLocButton");
currentLocButton.addEventListener("click", changeCurrentLoc);
