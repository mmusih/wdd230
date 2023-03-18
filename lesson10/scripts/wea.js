const windchill = (temp, wind) => {
    const windDegree = document.querySelector("#chillUnits");
  
    if (temp <= 10 && wind >= 4.8) {
      let chill = Math.round(
        35.74 +
          0.6215 * temp -
          35.75 * Math.pow(wind, 0.16) +
          0.4275 * temp * Math.pow(wind, 0.16)
      );
      chillUnits.innerHTML = "°C";
      return chill.toFixed(0);
    } else {
      return "N/A";
    }
  };

  
  const temperature = parseFloat(document.querySelector("#current-temp").textContent);
  const windSpeed = parseFloat(document.querySelector("#windspeed").textContent);
  windchill(temperature, windSpeed);
  
  const url = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=b8387367be40a1da1b3a1d71d535589d&units=metric";
  
  async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  apiFetch();
  
  function displayResults(weatherData) {
    // selecting elements
    const temp = document.querySelector("#current-temp");
    const wind = document.querySelector("#windspeed");
    const weatherIcon = document.querySelector("#weathericon");
    const figcaption = document.querySelector("#figcaption");
    const windChill = document.querySelector("#windchill");
  
    const temperature = weatherData.main.temp.toFixed(1);
    const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description.toLowerCase();
    const capDesc = desc.split(" ").map(word => {
        let firstLetter = word.charAt(0).toUpperCase();
        return`${firstLetter}${word.slice(1)}`;
    }).join(" ");
    const windSpeed = weatherData.wind.speed;
  
    // Setting the values
    temp.textContent = temperature;
    wind.textContent = windSpeed;
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    figcaption.textContent = capDesc;
    windChill.textContent = windchill(temperature, windSpeed);
  }