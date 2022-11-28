const locate = document.querySelector('.location');
const temp = document.querySelector('.weather-temp');
const weatherDescription = document.querySelector('.weather-desc');
const pressure = document.querySelector('.pressure>.value');
const humidity = document.querySelector('.humidity>.value');
const wind = document.querySelector('.wind>.value');
const weatherImg = document.querySelector('.weather-icon');


fetch(`http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19`)
.then((res) => res.json())
.then((data) => {
    locate.innerHTML = `${data.name}, ${data.sys.country}`;
    temp.innerHTML = `${Math.round(data.main.temp)}°C`;
    weatherDescription.innerHTML = `${data.weather[0].description}`;
    pressure.innerHTML = `${data.main.pressure} hPa`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed} m/sec, ${data.wind.deg}°`;
    weatherImg.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
})