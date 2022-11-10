let date = new Date();
let currentDate = date.toLocaleString();
let year = date.getFullYear();

const full_date = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(date);

document.getElementById('date').textContent = full_date;
document.getElementById('year').textContent = year;
document.getElementById('current_date').textContent = currentDate;

function toggleMenu() {
    document.getElementById("nav_menu").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
  
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// using async and await
const requestURL = 'https://starb520.github.io/wdd230/lesson09/data.json';

async function getBusinesses(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();    //.json is a method that will make an object out of response
        console.log(jsObject);
        const businesses = jsObject['businesses'];
        console.log(businesses[0].name);
        // businesses.forEach(displayProphets);
    }
}

getBusinesses(requestURL);