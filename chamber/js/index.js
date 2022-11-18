const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=dcce337c9c67d9fe15707481f83fd5e3";

let date = new Date();
let currentDate = date.toLocaleString();
let year = date.getFullYear();

const full_date = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(date);

document.getElementById('date').textContent = full_date;
document.getElementById('year').textContent = year;
document.getElementById('current_date').textContent = currentDate;


// hamburger button functionality
function toggleMenu() {
    document.getElementById("nav_menu").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
  
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

if (date.getDay() == 1 || date.getDay() == 3) {
    document.querySelector('.meeting_banner').style.display = 'block';
}



const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    // °F = (K - 273.15)* 1.8000 + 32.00 equation for reference
    document.querySelector('#temp').textContent = ((jsObject.main.temp - 273.15) * 1.8 + 32).toFixed(0);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    // document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('.weather-img').setAttribute('src', iconsrc);
    // document.querySelector('.weather-img').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
    const windspeed = jsObject.wind.speed;
    console.log(windspeed);
    document.querySelector('#windsp').textContent = windspeed; 

    
const temp = document.querySelector('#temp').textContent;
// const windspeed = document.querySelector('#windsp').textContent;
    
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





// // javascript for days since last visit calculation
// if (!localStorage.getItem('lastvisit')) {
//     localStorage.setItem('lastvisit', Date.now());
//     document.getElementById('diff').textContent = 'This is your 1st visit!';
// } else {
//     setStyles();
// }

// function setStyles() {
//     let prevDate = localStorage.getItem('lastvisit');
//     let currDate = new Date();

//     let difference = currDate - prevDate;
//         console.log(difference);
//         let daysDifference = Math.floor(difference/1000/60/60/24);

//     document.getElementById('diff').textContent = daysDifference;

//     localStorage.setItem('lastvisit', Date.now());
// }


// // javascript for the lazy load of the discovery page pictures
// const pimages = document.querySelectorAll('[data-src]');
// const options = {
//     threshold: 1,
//     rootMargin: "0px 0px 100px 0px"
// }

// function preloadImage(img){
//     const source = img.getAttribute('data-src');
//     if (!source) {
//         return;
//     }

//     img.src = source;
// }

// const io = new IntersectionObserver (
//     (entries, io) => {
//         entries.forEach(entry => {
//             if (!entry.isIntersecting) {
//                 return;
//             } else {
//                 preloadImage(entry.target);
//                 io.unobserve(entry.target);
//             }
//         })

//     },
    
//         options
    
// );

// pimages.forEach(image => {
//     io.observe(image);
// })