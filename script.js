let weather ={
    apiKey: "b9ee5b0470fbf2a7bdab2e932a32e487",
    fetchWeather: function (city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q= "
            + city 
            + "&units=metric&appid="
            + this.apiKey
        )
        .then ((response) => response.json())
        .then (( data) =>console.log(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
          "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity:" + humidity +"%";
        document.querySelector(".wind speed").innerText = "Wind speed" + speed + "km/h";
    
    },
};





