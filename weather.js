class Weather {
    constructor(city, state) {
        this.apiKey = '6f2101531c3a4e3f';
        this.city = city,
        this.state = state;
    }

    // Fecth weather from API
    async getWeather() {
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

        const responseData = await response.json();

        return responseData.current_observation;
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}
