// Wait for document to load
document.addEventListener("DOMContentLoaded", () => {
  const url = "https://api.openweathermap.org/data/2.5/weather?id=4361109&appid=b8387367be40a1da1b3a1d71d535589d&units=metric";
  apiFetch(url).then(data => {
      console.log(data);
      document.querySelector("#temperature").innerText = data.main.temp;
      document.querySelector("#humidity").innerText = data.main.humidity;
      const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      const img = document.querySelector("#weather-icon");
      img.setAttribute("src", iconSrc);
      const desc = data.weather[0].description;
      img.setAttribute("alt", desc);
      document.querySelector("#weather-description span").innerText = desc.capitalize();
  });

  ////////

});

async function apiFetch(url) {
  let data;

  try {
      const response = await fetch(url);
      if (response.ok) {
      data = await response.json();
      } else {
          throw Error(await response.text());
      }
  } catch (error) {
      console.log(error);
      return null;
  }
  return data;
}

String.prototype.capitalize = function() {
  let arr = this.split(" ");
  let capArr = [];
  arr.forEach(word => {
      capArr.push(`${word.slice(0, 1).toUpperCase()}${word.slice(1)}`);
  });
  return capArr.join(" ");
}