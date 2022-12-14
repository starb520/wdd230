let date = new Date();
let currentDate = date.toLocaleString();
let year = date.getFullYear();

const full_date = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(date);

document.getElementsByClassName('date').textContent = full_date;
document.getElementById('year').textContent = year;
document.getElementById('current_date').textContent = currentDate;

document.querySelector('.date').value = full_date;
// document.querySelector('#date').value = full_date;

// hamburger button functionality
function toggleMenu() {
    document.getElementById("nav_menu").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
  
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;