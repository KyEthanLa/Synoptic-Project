const weekday = 
["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

var now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1; // Months are zero-based, so add 1
const day = now.getDate();

let weather = {
    apiKey: "63b96358f3c2c5f0c6aec408caa99842",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, feels_like, temp_min, temp_max, pressure, humidity, sea_level, grnd_level } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Today in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".feels-like").innerText =
        "Feels Like: " + feels_like + "°C";
      document.querySelector(".temp-min").innerText =
      "Minimum Temperature: " + temp_min + "°C";
      document.querySelector(".temp-max").innerText =
      "Maximum Temperature: " + temp_max +"°C";
      document.querySelector(".pressure").innerText =
      "Pressure: " + pressure;
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity;
        document.querySelector(".sea-level").innerText =
        "Sea Level: " + sea_level;
        document.querySelector(".grnd-level").innerText =
        "Ground Level: " + grnd_level;
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.querySelector(".friday-title").innerText =
        (day + 1)+ "/" + month + "/" + year;
      document.querySelector(".saturday-title").innerText =
      (day + 2)+ "/" + month + "/" + year;
      document.querySelector(".sunday-title").innerText =
      (day + 3)+ "/" + month + "/" + year;
      document.querySelector(".monday-title").innerText =
      (day + 4)+ "/" + month + "/" + year;
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
  
  weather.fetchWeather("Ratanakiri");

  let popup = document.getElementById("status-popup");

  function openStatusPopup() {
      popup.classList.add("openstatus-popup");
  }
  
  function closeStatusPopup() {
      popup.classList.remove("openstatus-popup");
  }
  
  
  
  let deletePopup = document.getElementById("delete-popup");
  
  function openDeletePopup() {
      deletePopup.classList.add("opendelete-popup");
  }
  
  function closeDeletePopup() {
      deletePopup.classList.remove("opendelete-popup");
  }
  
  
  
  let blockPopup = document.getElementById("block-popup");
  
  function openBlockPopup() {
      blockPopup.classList.add("openblock-popup");
  }
  
  function closeBlockPopup() {
      blockPopup.classList.remove("openblock-popup");
  }
  
  let reservePopup = document.getElementById("reserve-popup");
  
  function openReservePopup() {
      reservePopup.classList.add("openreserve-popup");
  }
  
  function closeReservePopup() {
      reservePopup.classList.remove("openreserve-popup");
  }
  
  