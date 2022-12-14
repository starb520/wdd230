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



// using async and await
const requestURL = 'https://starb520.github.io/wdd230/final-project/temples.json';

async function getTemples(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();    //.json is a method that will make an object out of response
        console.log(jsObject);
        const temples = jsObject['temples'];
        console.log(temples[0].temple);
        temples.forEach(displayTemples);
        // businesses.forEach(displayBusinessesTable);
    }
}

getTemples(requestURL);

function displayTemples(temple) {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let img = document.createElement('img');
        
    address.textContent = temple.address;
    phone.textContent = temple.telephone;
    name.textContent = temple.temple;
    img.setAttribute('src', temple.imageurl);
    img.setAttribute('alt', temple.name);

    card.appendChild(name);
    document.querySelector('.cards').appendChild(card);

    card.appendChild(img);
    document.querySelector('.cards').appendChild(card);

    card.appendChild(address);
    document.querySelector('.cards').appendChild(card);

    card.appendChild(phone);
    document.querySelector('.cards').appendChild(card); 

    card.appendChild(phone);
    document.querySelector('.cards').appendChild(card);
}

function displayGrid() {
    document.querySelector('.cards').style.display="flex";
}


const btn = document.getElementById('like-btn');

btn.addEventListener('click', function onClick() {
    localStorage.setItem('Name', 'Liked');
    // let name = localStorage.getItem('Name');
    // btn.textContent = name;
    btn.style.backgroundColor = '#4F6D7A';
    btn.style.color = 'white';
});
