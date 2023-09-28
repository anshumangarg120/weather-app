/** @format */

const apiKey = "41ae1809c4ba02c6abe9058acf6a994c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiUrlL = "https://api.openweathermap.org/data/2.5/weather?"
const searchBox = document.querySelector(".search input");
const searchBtnC = document.querySelector("#celsius");

const searchBtnF = document.querySelector("#fahrenheit");
var temp = document.querySelector(".temp");
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

window.addEventListener("load", getGeolocationAndFetchWeather);
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
  temp.innerHTML = Math.round((data.main.temp * 9 ) / 5 + 32) + "°F";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtnF.addEventListener("click", () => {
  checkWeatherF(searchBox.value);
});


