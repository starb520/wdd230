const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4348599&appid=dcce337c9c67d9fe15707481f83fd5e3";

// hamburger button functionality
function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
  
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// get current date for footer
let date = new Date();
const full_date = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(date);
document.getElementById('date').textContent = full_date;


// display the current weather
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    // °F = (K - 273.15)* 1.8000 + 32.00 equation for reference
    document.querySelector('#temp').textContent = ((jsObject.main.temp - 273.15) * 1.8 + 32).toFixed(0);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('.weather-img').setAttribute('src', iconsrc);
    document.querySelector('figcaption').textContent = desc;
    const windspeed = jsObject.wind.speed;
    console.log(windspeed);
    document.querySelector('#windsp').textContent = windspeed; 

    
const temp = document.querySelector('#temp').textContent;    
    if (temp < 50 && windspeed > 3) {
        let chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed,0.16)));
    
        const windchill = document.querySelector('#windch');
    
        windchill.innerHTML = chill + '&#8457;';
    }
    else {
        const windchill = document.querySelector('#windch');
        windchill.innerHTML = 'N/A';
    }
  };
getWeather();5605242

