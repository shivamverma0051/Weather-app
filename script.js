const apikey = "0f255e781e92e30a39bf742b6c80ae34";
const apiUrl = " https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city){
const response = await fetch(apiUrl + city + `&appid=${apikey}`);



var data = await response.json();



document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML =Math.round(data.main.temp)  + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

const weatherCondition = data.weather[0].main.toLowerCase();
    
    if (weatherCondition == "clouds") {
        weathericon.src = "images/clouds.png";
    } else if (weatherCondition == "clear") {
        weathericon.src = "images/clear.png";
    } else if (weatherCondition == "rain") {
        weathericon.src = "images/rain.png";
    } else if (weatherCondition == "drizzle") {
        weathericon.src = "images/drizzle.png";
    } else if (weatherCondition == "mist") {
        weathericon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}

searchbtn.addEventListener("click", ()=>{
checkweather(searchbox.value);
});