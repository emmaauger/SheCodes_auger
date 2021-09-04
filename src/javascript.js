/**** Functions ****/

function formatDate() {
  let dayTime = document.querySelector("div#date");
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hour = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = minutes.toString();
    minutes = "0" + minutes;
  }
  let dayOrNight = "";
  if (hour > 12) {
    dayOrNight = "pm";
    hour = hour - 12;
  } else {
    dayOrNight = "am";
  }
  let date = `${day} ${hour}:${minutes} ${dayOrNight}`;
  dayTime.innerHTML = date;
}
function displayCity(event) {
  event.preventDefault();
  let search = document.querySelector("#searchBar");
  let searchedCity = search.value;
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
  console.log(city);
  currentTemp.innerHTML = temperature;
  let locations = document.querySelector("#location");
  locations.innerHTML = city;
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
  console.log(unit);
  return unit;
}

/****everything else ****/
formatDate();

let searchButton = document.querySelector("#searchForm");
searchButton.addEventListener("submit", displayCity);

let convertLink = document.querySelector("#otherUnit");
convertLink.addEventListener("click", changeUnits);

/*get current position*/
let currentLocButton = document.querySelector("a#currentLocButton");
currentLocButton.addEventListener("click", changeCurrentLoc);

Qualtrics.SurveyEngine.addOnload(function () {
  /*Place your JavaScript here to run when the page loads*/
});

Qualtrics.SurveyEngine.addOnReady(function () {
  /*Place your JavaScript here to run when the page is fully displayed*/
});

Qualtrics.SurveyEngine.addOnUnload(function () {
  /*Place your JavaScript here to run when the page is unloaded*/

  /*Place Your Javascript Below This Line*/

  // hide next button
  $("NextButton") && $("NextButton").hide();

  // store rank in first column, description in second column of array "choice"
  //Do this for each rank question
  var choice21 = [
    [
      "${q://QID45/ChoiceNumericEntryValue/1}",
      "${q://QID45/ChoiceDescription/1}",
    ],
    [
      "${q://QID45/ChoiceNumericEntryValue/2}",
      "${q://QID45/ChoiceDescription/2}",
    ],
    [
      "${q://QID45/ChoiceNumericEntryValue/3}",
      "${q://QID45/ChoiceDescription/3}",
    ],
    [
      "${q://QID45/ChoiceNumericEntryValue/4}",
      "${q://QID45/ChoiceDescription/4}",
    ],
  ];
  var choice22 = [
    [
      "${q://QID46/ChoiceNumericEntryValue/1}",
      "${q://QID46/ChoiceDescription/1}",
    ],
    [
      "${q://QID46/ChoiceNumericEntryValue/2}",
      "${q://QID46/ChoiceDescription/2}",
    ],
    [
      "${q://QID46/ChoiceNumericEntryValue/3}",
      "${q://QID46/ChoiceDescription/3}",
    ],
    [
      "${q://QID46/ChoiceNumericEntryValue/4}",
      "${q://QID46/ChoiceDescription/4}",
    ],
  ];
  var choice23 = [
    [
      "${q://QID47/ChoiceNumericEntryValue/1}",
      "${q://QID47/ChoiceDescription/1}",
    ],
    [
      "${q://QID47/ChoiceNumericEntryValue/2}",
      "${q://QID47/ChoiceDescription/2}",
    ],
    [
      "${q://QID47/ChoiceNumericEntryValue/3}",
      "${q://QID47/ChoiceDescription/3}",
    ],
    [
      "${q://QID47/ChoiceNumericEntryValue/4}",
      "${q://QID47/ChoiceDescription/4}",
    ],
  ];
  var choice24 = [
    [
      "${q://QID48/ChoiceNumericEntryValue/1}",
      "${q://QID48/ChoiceDescription/1}",
    ],
    [
      "${q://QID48/ChoiceNumericEntryValue/2}",
      "${q://QID48/ChoiceDescription/2}",
    ],
    [
      "${q://QID48/ChoiceNumericEntryValue/3}",
      "${q://QID48/ChoiceDescription/3}",
    ],
    [
      "${q://QID48/ChoiceNumericEntryValue/4}",
      "${q://QID48/ChoiceDescription/4}",
    ],
  ];
  var choice25 = [
    [
      "${q://QID49/ChoiceNumericEntryValue/1}",
      "${q://QID49/ChoiceDescription/1}",
    ],
    [
      "${q://QID49/ChoiceNumericEntryValue/2}",
      "${q://QID49/ChoiceDescription/2}",
    ],
    [
      "${q://QID49/ChoiceNumericEntryValue/3}",
      "${q://QID49/ChoiceDescription/3}",
    ],
    [
      "${q://QID49/ChoiceNumericEntryValue/4}",
      "${q://QID49/ChoiceDescription/4}",
    ],
  ];
  var choice26 = [
    [
      "${q://QID50/ChoiceNumericEntryValue/1}",
      "${q://QID50/ChoiceDescription/1}",
    ],
    [
      "${q://QID50/ChoiceNumericEntryValue/2}",
      "${q://QID50/ChoiceDescription/2}",
    ],
    [
      "${q://QID50/ChoiceNumericEntryValue/3}",
      "${q://QID50/ChoiceDescription/3}",
    ],
    [
      "${q://QID50/ChoiceNumericEntryValue/4}",
      "${q://QID50/ChoiceDescription/4}",
    ],
  ];

  // sort choice
  // Note: alphabetic sort, so will give problems if >9 items ranked
  choice21.sort();
  choice22.sort();
  choice23.sort();
  choice24.sort();
  choice25.sort();
  choice26.sort();

  //

  //
  //Create object to hold values and their ratings
  var values2 = [
    { value: "Connection", rating: 0 },
    { value: "Creativity", rating: 0 },
    { value: "Experience", rating: 0 },
    { value: "Humor", rating: 0 },
    { value: "Optimism", rating: 0 },
    { value: "Artistry", rating: 0 },
    { value: "Empathy", rating: 0 },
    { value: "Faith", rating: 0 },
    { value: "Generosity", rating: 0 },
    { value: "Gratitude", rating: 0 },
    { value: "Wisdom", rating: 0 },
    { value: "Courage", rating: 0 },
    { value: "Achievement", rating: 0 },
    { value: "Determination", rating: 0 },
    { value: "Health", rating: 0 },
    { value: "Knowledge", rating: 0 },
    { value: "Strength", rating: 0 },
    { value: "Independence", rating: 0 },
    { value: "Forgiveness", rating: 0 },
    { value: "Integrity", rating: 0 },
    { value: "Loyalty", rating: 0 },
    { value: "Respect", rating: 0 },
    { value: "Responsibility", rating: 0 },
    { value: "Justice", rating: 0 },
  ];

  console.log(values2);

  //get ratings and add to values object
  for (let i = 0; i < 24; i++) {
    for (let n = 0; n < 4; n++) {
      if (choice21[n][1] == values2[i].value) {
        if (choice21[n][0] == "1") {
          values2[i].rating = 4;
        }
        if (choice21[n][0] == "2") {
          values2[i].rating = 3;
        }
        if (choice21[n][0] == "3") {
          values2[i].rating = 2;
        }
        if (choice21[n][0] == "4") {
          values2[i].rating = 1;
        }
      }
      if (choice22[n][1] == values2[i].value) {
        if (choice21[n][0] == "1") {
          values2[i].rating = 4;
        }
        if (choice21[n][0] == "2") {
          values2[i].rating = 3;
        }
        if (choice21[n][0] == "3") {
          values2[i].rating = 2;
        }
        if (choice21[n][0] == "4") {
          values2[i].rating = 1;
        }
      }
      if (choice23[n][1] == values2[i].value) {
        if (choice21[n][0] == "1") {
          values2[i].rating = values2[i].rating + 4;
        }
        if (choice21[n][0] == "2") {
          values2[i].rating = values2[i].rating + 3;
        }
        if (choice21[n][0] == "3") {
          values2[i].rating = values2[i].rating + 2;
        }
        if (choice21[n][0] == "4") {
          values2[i].rating = values2[i].rating + 1;
        }
      }
      if (choice24[n][1] == values2[i].value) {
        if (choice21[n][0] == "1") {
          values2[i].rating = values2[i].rating + 4;
        }
        if (choice21[n][0] == "2") {
          values2[i].rating = values2[i].rating + 3;
        }
        if (choice21[n][0] == "3") {
          values2[i].rating = values2[i].rating + 2;
        }
        if (choice21[n][0] == "4") {
          values2[i].rating = values2[i].rating + 1;
        }
      }
      if (choice25[n][1] == values2[i].value) {
        if (choice21[n][0] == "1") {
          values2[i].rating = values2[i].rating + 4;
        }
        if (choice21[n][0] == "2") {
          values2[i].rating = values2[i].rating + 3;
        }
        if (choice21[n][0] == "3") {
          values2[i].rating = values2[i].rating + 2;
        }
        if (choice21[n][0] == "4") {
          values2[i].rating = values2[i].rating + 1;
        }
      }
      if (choice26[n][1] == values2[i].value) {
        if (choice21[n][0] == "1") {
          values2[i].rating = values2[i].rating + 4;
        }
        if (choice21[n][0] == "2") {
          values2[i].rating = values2[i].rating + 3;
        }
        if (choice21[n][0] == "3") {
          values2[i].rating = values2[i].rating + 2;
        }
        if (choice21[n][0] == "4") {
          values2[i].rating = values2[i].rating + 1;
        }
      }
    }
  }

  //loop through values to create an array of top 12 variables
  values2.sort(function (a, b) {
    return b.rating - a.rating;
  });
  console.log(values2);

  // save description of first and second choice as embedded data
  // Note: you must create these embedded data fields in survey flow for this to work
  // Note: javascript arrays begin at zero, so choice[0][1]
  //       is the first row, second column of array "choice"

  Qualtrics.SurveyEngine.setEmbeddedData("first2", values2[0].value);
  Qualtrics.SurveyEngine.setEmbeddedData("second2", values2[1].value);
  Qualtrics.SurveyEngine.setEmbeddedData("third2", values2[2].value);
  Qualtrics.SurveyEngine.setEmbeddedData("fourth2", values2[3].value);
  Qualtrics.SurveyEngine.setEmbeddedData("fifth2", values2[4].value);
  Qualtrics.SurveyEngine.setEmbeddedData("sixth2", values2[5].value);

  // advance to next screen
  this.clickNextButton();
});
