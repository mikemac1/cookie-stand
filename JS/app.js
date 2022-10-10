'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// Need to generate a random number of customers per hour
function getRandomCustomers(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Seattle Sales Div
let seattleList = document.getElementById('seattleList');
console.log(seattleList);


// Seattle Object
const seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    dailyTotal: 0,
}
console.log(getRandomCustomers(seattle.max, seattle.min));

// Creating & adding an h2
let headSea = document.createElement('h2');
headSea.textContent = seattle.name + ' Sales';
seattleList.appendChild(headSea);

// Creating and adding a section
let sectSea = document.createElement('section');
headSea.appendChild(sectSea);

// Creating and adding unordered list
let listSea = document.createElement('ul');
sectSea.appendChild(listSea);

// Creating a list item and add content to li add adding section to the DOM
for (let i = 0; i < hours.length; i++) {
    let listItemSea = document.createElement('li');
    let hourlySeaTotal = getRandomCustomers(seattle.max, seattle.min);
    seattle.dailyTotal += hourlySeaTotal;
    listItemSea.textContent = `${hours[i]}: ${hourlySeaTotal} cookies`;
    listSea.appendChild(listItemSea);
    console.log(`${hours[i]}: ${hourlySeaTotal} cookies`);
}

// Creating and adding a li item
let totalLiSea = document.createElement('li');
totalLiSea.textContent = `Total: ${seattle.dailyTotal} cookies`;
console.log(`Totals: ${seattle.dailyTotal} cookies`);
listSea.appendChild(totalLiSea);




















const tokyo = {

}

const dubai = {

}

const paris = {

}

const lima = {

}