
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

