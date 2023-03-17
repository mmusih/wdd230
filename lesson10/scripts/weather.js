// select HTML elements in the document

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captDescr = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=b8387367be40a1da1b3a1d71d535589d&units=imperial";

async function apiFetch(){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data); //this is for testing the call
            displayResults(data);
        }else{
            throw Error(await response.text());
        }

    }catch(error){
        console.log(error);
    }
}

function displayResults(weatherData){
   currentTemp.innerHTML=`<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description.toLowerCase();
    const capDesc = desc.split(" ").map(word => {
        let firstLetter = word.charAt(0).toUpperCase();
        return`${firstLetter}${word.slice(1)}`;
    }).join(" ");

    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',desc);
    captDescr.textContent=(capDesc);

}
apiFetch();