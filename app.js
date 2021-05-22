const weather = new Weather();

document.addEventListener("DOMContentLoaded", weather.getWeather());

document.querySelector("#change-weather").addEventListener("click", (e) => {
    console.log("inside Event function");

    let country = document.querySelector("#country").value;
    let city = document.querySelector("#city").value;
    console.log("App.js values picked", { country, city });
    weather.getWeather(city, country)
        .then(res => {
            console.log("From App.js api promise resolution", res);
            display(res);
        })
        .catch(error => console.log(error));

});

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
    // <h1 id="location"></h1>
    // <h3 id="temperature"></h3>
    // <h3 id="description"></h3>
    // <img id="image">
    // <ul id="weather-details" class="list-group">
    //     <li class="list-group-item" id="humidity"></li>
    //     <li class="list-group-item" id="feelsLike"></li>
    // </ul>
}
titleCase("HELLO tesTing sTuff");
function titleCase(text) {
    console.log("BEFORE", text);
    let result = text.split(" ")
        .map(x => { return (x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()) })
    console.log("AFTER", result);
    // for (let i = 0; i < text.length; i++) {
    //     let firstSpace = text.indexOf(" ")
    //     result = text.charAt(firstSpace).toUpperCase() + result.slice(firstSpace, text.indexOf(" "))
    // }
    return result
}
