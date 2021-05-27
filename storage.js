class Storage {

    getStorage() {

        let city = localStorage.getItem("city") || "Delhi";
        let country = localStorage.getItem("country") || "India";

        return {
            city,
            country
        }
    }

    saveStorage(city, country) {
        console.log("Saved to local storage", { city, country });
        localStorage.setItem("city", city);
        localStorage.setItem("country", country);
    }
}