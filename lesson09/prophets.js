

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


// can only use async with await, the two must go together
async function getProphets(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();    //.json is a method that will make an object out of response
        console.log(jsObject);
        const prophets = jsObject['prophets'];
        console.log(prophets[0].lastname);
        prophets.forEach(displayProphets);
    }
};

getProphets(requestURL);

function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let dob = document.createElement('p');
    let pob = document.createElement('p');
    let img = document.createElement('img');
        

    h2.textContent = prophet.name + ' ' + prophet.lastname;
    dob.textContent = prophet.birthdate;
    pob.textContent = prophet.birthplace;
    img.setAttribute('src', prophet.imageurl);
    img.setAttribute('alt', prophet.name + ' ' + prophet.lastname);

    card.appendChild(h2);
    document.querySelector('.cards').appendChild(card);

    card.appendChild(dob);
    document.querySelector('.cards').appendChild(card);

    card.appendChild(pob);
    document.querySelector('.cards').appendChild(card);

    card.appendChild(img);
    document.querySelector('.cards').appendChild(card);
      
}