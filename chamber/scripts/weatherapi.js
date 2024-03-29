// // select HTML elements in the document
const currentTemp = document.querySelector('current-temp');
const weatherIcon = document.querySelector('weather-icon');
const windSpeed = document.querySelector('wind-speed');
const captionDesc = document.querySelector('figcaption');
const wind = document.querySelector('.wind')
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=8.9167&lon=8.3833&appid=8688add078badf05b39995d00843883d&units=metric&'
const weather = document.querySelector('.weatherInfo')


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

/*------temperature ------****/

/*display the temp obtained, the icon and the description*/
  function  displayResults(weatherData) {

    let card = document.createElement('section');
    let currentTemp = document.createElement('p');
    let windSpeed = document.createElement('p');
    let weatherIcon = document.createElement('img');
    let captionDesc = document.createElement('figcaption');
    let wind = document.createElement('p')
 
    const tF = weatherData.main.temp.toFixed(0);
    currentTemp.innerHTML = `<strong>${tF}&degC</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
        
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = capital_letter(desc);

  
    const smH = weatherData.wind.speed;
    if (tF <= 50 && smH > 3) {
        const windC = windChill(tF,smH);
        wind.textContent = `Wind Chill: ${windC.toFixed(1)}`;
    }
    else {
        wind.textContent = `Wind Chill: N/A`;
    }

    // Add/append the section(card) with the h2 element
    card.appendChild(currentTemp);
    card.appendChild(weatherIcon);
    card.appendChild(windSpeed);
    card.appendChild(captionDesc);
    card.appendChild(wind);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.weatherInfo').appendChild(card);
  }


/* capitalize the description */
function capital_letter(words) {
    
    words = words.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
}

/* calculate the wind chill*/
function windChill(tF, smH) {
    const f = 35.74 + 0.6215 * tF - 35.75 * (smH**0.16) + 0.4275 * tF * (smH**0.16)
    return f
}




