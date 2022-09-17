// SEQUENCE

// get the current date from the system
let date = new Date();

// display date in console
console.log(date);

// get the full year
let year = date.getFullYear();

console.log(year);

// add content to the h1 element
document.querySelector('h1').textContent = year;

let currentDate = document.lastModified;

console.log(currentDate);

document.querySelector('div').textContent = currentDate;
