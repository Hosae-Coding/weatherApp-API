let cityName = document.querySelector('.city-name');
let temperature = document.querySelector('.temperature');
let discription = document.querySelector('.weather-discription');
let inputValue = document.querySelector('.text-field');

inputValue.addEventListener('keyup', function (e) {
   if (e.key === 'Enter') {
      let value = e.target.value;
      api(value);
   }
});

const api = (name) => {
   let inFo = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=483f8f3e5cfd4194fed12bef0c9ae3c6&units=metric`;
   fetch(inFo)
      .then((Response) => Response.json())
      .then((data) => updateWeatherInfo(data));
};

function updateWeatherInfo(data) {
   cityName.innerHTML = data.name;
   temperature.innerHTML = Math.floor(data.main.temp);
   discription.innerHTML = `${data.weather[0].description}, huminity =${data.main.humidity} % `;
}
