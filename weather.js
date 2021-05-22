class Weather {
    constructor() {
        this.api_key = "";
    }

    async getWeather(city = "Mumbai", country = "India") {
        console.log("Get weather run");
        console.log({ city, country });
        return (await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${this.api_key}`)).json();
    }
}