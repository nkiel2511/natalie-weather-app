function updateData(response) {
  let tempElement = document.querySelector("#temp");
  let temp = response.data.temperature.current;
  tempElement.innerHTML = Math.round(temp);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
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
