const apiKey = "f6f68e4a9df0c1ade2c8faaac2c6b03b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-img");

async function getWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if(response.status==404){
    document.querySelector(".error").style.display='block'
    document.querySelector(".weather-icon").style.display='none'
  }else{let data = await response.json();
  console.log(data);

  document.querySelector(".description").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML =
  Math.round(data.main.temp) + " °C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".wind2").innerHTML = data.wind.speed + " Km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "image/cloudy.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "image/cloudy rain.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "image/storm.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "image/cloudy.png";
  }else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "image/sunny.png";
  }
   
 document.querySelector(".weather-icon").style.display='block'
 document.querySelector(".error").style.display='none'
}}
searchBtn.addEventListener("click", () => {
  getWeather(searchBox.value);
});
