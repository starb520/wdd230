const temp = document.querySelector('#temp').textContent;
const windspeed = document.querySelector('#windsp').textContent;

if (temp < 50 && windspeed > 3) {
    let chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed,0.16)));

    const windchill = document.querySelector('#windch')

    windchill.innerHTML = chill + '&#8457;';
}