let weather = {
    const :lat=-24.182810888471575,
    const :lon=-65.33116915397865,
  
    
      apiKey: "50903f8f85a93575ce4b731dc3c3d0cb",
      fetchWeather: function () {
        fetch(
          "https://api.openweathermap.org/data/2.5/forecast?lat=" +
            lat+
            "&lon=" +lon+
            "&appid=" + 
            this.apiKey
        
        )
  
          .then((response) => {
            console.log(response);
            if (!response.ok) {
              alert("La ciudad no fue encontrada.");
              throw new Error("No se encontro el clima.");
            }
            return response.json();
           
          
            
          })
          .then((data) => this.displayWeather(data));
          console.log(data);
      },
  
  
      displayWeather: function (data) {
        const { name } = data;
       
        const { icon, description } = data.weather;
      
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
          "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
          "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
          "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/1600x900/?" + name + "')";
      },
      search: function () {
        this.fetchWeather();
      },
    };
    
    document.querySelector(".search button").addEventListener("click", function () {
      weather.search();
    });
    
    document
      .querySelector(".search-bar")
      .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
          weather.search();
        }
      });
    
    weather.fetchWeather("Denver");
  
    
  
  