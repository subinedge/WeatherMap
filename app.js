const apiKey = 'bba5272131db559ecd76b60624abd8df';

let searchButton = document.getElementById('search-btn');
let searchInput = document.getElementById('search-txt');
let cityName = document.getElementById('city-name');
let icon = document.getElementById('icon');
let temperature = document.getElementById('temp');
let humidity = document.getElementById('humidity-div');
let description = document.querySelector('.description');

searchButton.addEventListener('click', findWeatherDetails);
searchInput.addEventListener('keyup', enterPressed);

function enterPressed(e) {
  if (event.key === 'Enter') {
    findWeatherDetails();
  }
}

function findWeatherDetails() {
  if (searchInput.value === '') {
    alert('enter something bitch');
  } else {
    let searchLink = `https://api.openweathermap.org/data/2.5/weather?q=${
      searchInput.value
    }&&APPID=${apiKey}`;
    fetch(searchLink)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);

        cityName.innerHTML = data.name;
        icon.src = `http://openweathermap.org/img/w/${
          data.weather[0].icon
        }.png`;
        description.innerHTML = data.weather[0].description;
        temperature.innerHTML = parseInt(data.main.temp - 273) + '°C';
        humidity.innerHTML = data.main.humidity + '%';
      });
  }
}
