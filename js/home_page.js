let date = new Date();
let currentDate = date.toLocaleString();
let year = date.getFullYear();

// const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
const full_date = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(date);
// let year = date.getFullYear();
// let month = date.getMonth();
// document.getElementById('date').textContent = full_date;
// document.getElementById('year').textContent = year;
document.getElementById('current_date').textContent = full_date;