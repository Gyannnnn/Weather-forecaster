console.log("Hello From GYanranjan PAtra !!")

const apikey = "e8dc68a709733f5550970bee768aaf8b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.getElementById("searchButton");
const weatherIcon = document.getElementById("weatherIcon");




async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "clear.png";
    } else if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "mk.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "mist.png";
    }

}
searchBox.addEventListener("keydown", function (event) {
   
    if (event.keyCode === 13) {

        checkWeather(searchBox.value);
    }
});
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


