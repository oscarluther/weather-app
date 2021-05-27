const weather = new Weather();

const storage = new Storage();

const locationData = storage.getStorage();
document.addEventListener("DOMContentLoaded", getWeather(locationData.city, locationData.country));

document.querySelector("#change-weather").addEventListener("click", changeLocation);

function changeLocation() {
    let country = document.querySelector("#country").value || "India";
    let city = document.querySelector("#city").value || "Delhi";
    console.log("App.js values picked", { country, city });

    storage.saveStorage(city, country);
    getWeather(city, country);
    $('#locationModal').modal('hide');
}


function getWeather(city, country) {
    weather.getWeather(city, country)
        .then(res => {
            display(res);
        })
        .catch(error => console.log(error));

}

function display(weatherData) {
    const location = document.getElementById("location");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const humidity = document.getElementById("humidity");
    const feelsLike = document.getElementById("feelsLike");
    description.textContent = titleCase(weatherData.weather[0].description);
    location.textContent = weatherData.name;
    temperature.textContent = `Temperature: ${toCelsius(weatherData.main.temp)}`;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
    feelsLike.textContent = `Feels Like: ${toCelsius(weatherData.main.feels_like)}`;
}

titleCase("HELLO tesTing sTuff");
function titleCase(text) {
    console.log("BEFORE titleCase:", text);
    let result = text.split(" ")
        .map(x => { return (x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()) }) // converts all words to pascal case
        .reduce((acc, item) => { //combines all the words into a string
            return acc + " " + item;
        });
    console.log("AFTER titleCase:", text);
    return result;
}

function toCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(2);
}
