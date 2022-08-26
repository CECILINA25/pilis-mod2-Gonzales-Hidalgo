/* Async - Await 
async function getIp() {
  try {
    let response = await fetch("https://api.ipify.org/?format=json");
    let ipResponse = await response.json();
    console.log(ipResponse);

    let responseLocation = await fetch("http://ip-api.com/json/" + ipResponse.ip);
    let locationResponse = await responseLocation.json();
    console.log(locationResponse);
  } catch {
    console.log("Algo paso, no se pudo resolver...");
  }
}
getIp();*/


lat=-24.182810888471575,
lon=-65.33116915397865,
apiKey= "50903f8f85a93575ce4b731dc3c3d0cb",

fetch( "https://api.openweathermap.org/data/2.5/forecast?lat=" +
lat+"&lon=" +lon+"&appid=" + apiKey)


.then((response)=> response.json())
.then((data)=>{ this.displayWeather(data)
  console.log(data)

})    

 






  





 function displayWeather (data) {
  const name2  = data.city.name;
  console.log(name2);
  const  description2 = data.list[0].weather[0].description;
  const  icon2 = data.list[0].weather[0].icon;
  console.log(icon2);

  console.log(description2);

  const  temp2=data.list[0].main.temp;
  const humidity2  = data.list[0].main.humidity;
  const speed2 = data.list[0].wind;
  document.querySelector(".city2").innerText = "Clima en " + name2;
  document.querySelector(".icon2").src =
    "https://openweathermap.org/img/wn/" + icon2 + ".png";
  document.querySelector(".description").innerText = description2;
  document.querySelector(".temp2").innerText = temp2 + "°C";
  document.querySelector(".humidity2").innerText =
    "Humidity: " + humidity2 + "%";
  document.querySelector(".wind2").innerText =
    "Wind speed: " + speed2 + " km/h";
  document.querySelector(".weather").classList.remove("loading");
  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + name2 + "')";
}









let weather = {
    apiKey: "50903f8f85a93575ce4b731dc3c3d0cb",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          console.log(response)
          if (!response.ok) {
            alert("La ciudad no fue encontrada.");
            throw new Error("No se encontro el clima.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
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
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
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
