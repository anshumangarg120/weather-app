/** @format */

const apiKey = "41ae1809c4ba02c6abe9058acf6a994c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiUrlL = "https://api.openweathermap.org/data/2.5/weather?";
const searchBox = document.querySelector(".search input");
const searchBtnC = document.querySelector("#celsius");
const searchBtnF = document.querySelector("#fahrenheit");
const temp = document.querySelector(".temp");
const weatherIcon = document.querySelector(".weather-icon");
const weatherDescription = document.querySelector("#description");
const useGeoLocation = document.querySelector(".toggle-slider");
// Function to get the user's geolocation
function getGeolocationAndFetchWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Fetch weather data using geolocation coordinates
      const response = await fetch(
        apiUrlL + `lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      );
      if (response.ok) {
        const data = await response.json();

        const cityName = data.name;
        searchBox.value = cityName;
        checkWeatherC(cityName);
      } else {
        console.error("Failed to fetch weather data for current location.");
      }
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

useGeoLocation.addEventListener("click", getGeolocationAndFetchWeather);
//// ---

// --- celsius
async function checkWeatherC(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (!response.ok) {
    document.querySelector(".city").innerHTML = "city not found";
    document.querySelector(".temp").innerHTML = "...";
    document.querySelector(".humidity").innerHTML = "..%";
    document.querySelector(".wind").innerHTML = "..km/h";
    return;
  }

  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  temp.innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
    weatherDescription.innerHTML =
      "The weather is currently cloudy in " + data.name;
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
    weatherDescription.innerHTML =
      "The weather is currently clear in " + data.name;
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
    weatherDescription.innerHTML =
      "The weather is currently rainy in " + data.name;
  } else if (data.weather[0].main == "Drzzle") {
    weatherIcon.src = "images/drzzle.png";
    weatherDescription.innerHTML =
      "The weather is currently drzzle in " + data.name;
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
    weatherDescription.innerHTML =
      "The weather is currently mist in " + data.name;
  }
  else {
    weatherDescription.innerHTML =
      "There is " + data.weather[0].main + " in " + data.name + " right now.";

  }
}

searchBtnC.addEventListener("click", () => {
  checkWeatherC(searchBox.value);
});

// --- fahrenheit
async function checkWeatherF(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (!response.ok) {
    document.querySelector(".city").innerHTML = "city not found";
    document.querySelector(".temp").innerHTML = "...";
    document.querySelector(".humidity").innerHTML = "..%";
    document.querySelector(".wind").innerHTML = "..km/h";
    return;
  }

  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  temp.innerHTML = Math.round((data.main.temp * 9) / 5 + 32) + "°F";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
    weatherDescription.innerHTML =
      "The weather is currently cloudy in " + data.name;
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
    weatherDescription.innerHTML =
      "The weather is currently clear in " + data.name;
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
    weatherDescription.innerHTML =
      "The weather is currently rainy in " + data.name;
  } else if (data.weather[0].main == "Drzzle") {
    weatherIcon.src = "images/drzzle.png";
    weatherDescription.innerHTML =
      "The weather is currently drzzle in " + data.name;
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
    weatherDescription.innerHTML =
      "The weather is currently mist in " + data.name;
  }
}

searchBtnF.addEventListener("click", () => {
  checkWeatherF(searchBox.value);
});
