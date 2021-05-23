const weather = new Weather();

document.addEventListener("DOMContentLoaded", getWeather);

document.querySelector("#change-weather").addEventListener("click", getWeather);

function getWeather() {

    let country = document.querySelector("#country").value || "India";
    let city = document.querySelector("#city").value || "Delhi";
    console.log("App.js values picked", { country, city });
    weather.getWeather(city, country)
        .then(res => {
            // console.log("From App.js api promise resolution", res);
            display(res);
        })
        .catch(error => console.log(error));
}

function display(weatherData) {
    const location = document.getElementById("location");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const image = document.getElementById("image");
    const humidity = document.getElementById("humidity");
    const feelsLike = document.getElementById("feelsLike");
    description.textContent = titleCase(weatherData.weather[0].description);
    location.textContent = weatherData.name;
    temperature.textContent = `Temperature: ${weatherData.main.temp}`;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}`;
    feelsLike.textContent = `Feels Like:${weatherData.main.feels_like}`;
}

titleCase("HELLO tesTing sTuff");
function titleCase(text) {
    console.log("BEFORE", text);
    let result = text.split(" ")
        .map(x => { return (x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()) }) // converts all words in pascal case
        .reduce((acc, item) => { //combines all the words into one string
            return acc + " " + item;
        });
    console.log("AFTER", text);
    return result;
}

function toCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(2);
}
