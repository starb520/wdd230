let date = new Date();
let currentDate = date.toLocaleString();

let year = date.getFullYear();
document.getElementById('year').textContent = year;
document.getElementById('currentDate').textContent=currentDate;