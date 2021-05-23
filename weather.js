class Weather {
    constructor() {
        this.api_key = "";
    }

    async getWeather(city, country) {
        console.log("GetWeather values", { city, country });
        return (await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${this.api_key}`)).json();
    }
}