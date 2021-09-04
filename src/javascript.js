/**** Functions ****/

function displayCity(event) {
  event.preventDefault();
  let search = document.querySelector("#searchBar");
  let searchedCity = "Atlanta";
  if (search.value !== "") {
    searchedCity = search.value;
  }
  console.log(searchedCity);
  searchedCity = searchedCity.toLowerCase().trim();
  let unit = getUnit();
  let key = "326468886cdb97f0a6e01a8cc558a9e3";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${key}&units=${unit}`;
  axios.get(url).then(getCurrTemp);
}
function handlePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  unit = getUnit();
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
}
function changeCurrentLoc(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handlePosition);
}
function celsiusToFarhrenheit(tempC) {
  let tempF = (tempC * 9) / 5 + 32;
  tempF = Math.round(tempF);
  return tempF;
}
function farhrenheitToCelsius(tempF) {
  let tempC = ((tempF - 32) * 5) / 9;
  tempC = Math.round(tempC);
  return tempC;
}
function changeUnits(event) {
  event.preventDefault();
  let otherUnit = document.querySelector("#otherUnit");
  let mainUnit = document.querySelector("#mainUnit");
  let temp = document.querySelector("#currentTemp");
  let newUnit = otherUnit.innerHTML;
  let oldUnit = mainUnit.innerHTML;
  let currTemp = temp.innerHTML;
  if (newUnit === "°C") {
    currTemp = farhrenheitToCelsius(currTemp);
    newUnit = "°C";
    oldUnit = "°F";
  } else {
    currTemp = celsiusToFarhrenheit(currTemp);
    newUnit = "°F";
    oldUnit = "°C";
  }

  otherUnit.innerHTML = oldUnit;
  mainUnit.innerHTML = newUnit;
  temp.innerHTML = currTemp;
}
function getUnit() {
  let mainUnit = document.querySelector("#mainUnit");
  if (mainUnit.innerHTML === "°C") {
    unit = "metric";
  } else {
    unit = "imperial";
  }
  return unit;
}
function changeDescription (weather) {
  let currentDescription = document.querySelector("h1");
  currentDescription.innerHTML = weather.weather[0].main;
  let icon = weather.weather[0].icon;
  let iconElement = document.querySelector("#icon");
  let iconAddress =`http://openweathermap.org/img/wn/${icon}@2x.png`;
  console.log(iconAddress);
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
  console.log(date.getDay());
  let dayOrNight = "";
  if (hour > 11) {
    dayOrNight = "pm";
    if (hour > 12) {
      hour = hour - 12;
    }
  } else {
    dayOrNight = "am";
  }
  console.log(day);
  console.log(hour);
  let formattedDate = `${day} ${hour}:${minutes} ${dayOrNight}`;
  console.log(formattedDate);
  dayTime.innerHTML = formattedDate;
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
