function updateData(response) {
  let tempElement = document.querySelector("#temp");
  let temp = response.data.temperature.current;
  tempElement.innerHTML = Math.round(temp);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  let conditionElement = document.querySelector("#condition");
  conditionElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${response.data.wind.speed}km/h`;

  let date = new Date(response.data.time * 1000);

  let timeElement = document.querySelector("#day-time");
  timeElement.innerHTML = formatDate(date);
}

function formatDate(date) {
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
  let minutes = date.getMinutes();
  let hours = date.getHours();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day}, ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "7ff3c5ef4330987abab23faeo62t9ee4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateData);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);

searchCity("Glasgow");
