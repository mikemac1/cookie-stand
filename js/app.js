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
    hourlyTotArr: [],
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
    seattle.hourlyTotArr.push(hourlySeaTotal);
    listItemSea.textContent = `${hours[i]}: ${hourlySeaTotal} cookies`;
    listSea.appendChild(listItemSea);
    console.log(`${hours[i]}: ${hourlySeaTotal} cookies`);
}

// Creating and adding a li item
let totalLiSea = document.createElement('li');
totalLiSea.textContent = `Total: ${seattle.dailyTotal} cookies`;
console.log(`Totals: ${seattle.dailyTotal} cookies`);
console.log(seattle.hourlyTotArr);
listSea.appendChild(totalLiSea);


// Tokyo Sales Div
let tokyoList = document.getElementById('tokyoList');
console.log(tokyoList);

// Tokyo Object
const tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    dailyTotal: 0,
    hourlyTotArr: [],
}
console.log(getRandomCustomers(tokyo.max, tokyo.min));

// Creating & adding an h2
let headTok = document.createElement('h2');
headTok.textContent = tokyo.name + ' Sales';
tokyoList.appendChild(headTok);

// Creating and adding a section
let sectTok = document.createElement('section');
headTok.appendChild(sectTok);

// Creating and adding unordered list
let listTok = document.createElement('ul');
sectTok.appendChild(listTok);

// Creating a list item and add content to li add adding section to the DOM
for (let i = 0; i < hours.length; i++) {
    let listItemTok = document.createElement('li');
    let hourlyTokTotal = getRandomCustomers(tokyo.max, tokyo.min);
    tokyo.dailyTotal += hourlyTokTotal;
    tokyo.hourlyTotArr.push(hourlyTokTotal);
    listItemTok.textContent = `${hours[i]}: ${hourlyTokTotal} cookies`;
    listTok.appendChild(listItemTok);
    console.log(`${hours[i]}: ${hourlyTokTotal} cookies`);
}

// Creating and adding a li item
let totalLiTok = document.createElement('li');
totalLiTok.textContent = `Total: ${tokyo.dailyTotal} cookies`;
console.log(`Totals: ${tokyo.dailyTotal} cookies`);
console.log(tokyo.hourlyTotArr);
listTok.appendChild(totalLiTok);


// Dubai Sales Div
let dubaiList = document.getElementById('dubaiList');
console.log(dubaiList);

// Dubai Object
const dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    dailyTotal: 0,
    hourlyTotArr: [],
}
console.log(getRandomCustomers(dubai.max, dubai.min));

// Creating & adding an h2
let headDub = document.createElement('h2');
headDub.textContent = dubai.name + ' Sales';
dubaiList.appendChild(headDub);

// Creating and adding a section
let sectDub = document.createElement('section');
headDub.appendChild(sectDub);

// Creating and adding unordered list
let listDub = document.createElement('ul');
sectDub.appendChild(listDub);

// Creating a list item and add content to li add adding section to the DOM
for (let i = 0; i < hours.length; i++) {
    let listItemDub = document.createElement('li');
    let hourlyDubTotal = getRandomCustomers(dubai.max, dubai.min);
    dubai.dailyTotal += hourlyDubTotal;
    dubai.hourlyTotArr.push(hourlyDubTotal);
    listItemDub.textContent = `${hours[i]}: ${hourlyDubTotal} cookies`;
    listDub.appendChild(listItemDub);
    console.log(`${hours[i]}: ${hourlyDubTotal} cookies`);
}

// Creating and adding a li item
let totalLiDub = document.createElement('li');
totalLiDub.textContent = `Total: ${dubai.dailyTotal} cookies`;
console.log(`Totals: ${dubai.dailyTotal} cookies`);
console.log(dubai.hourlyTotArr);
listDub.appendChild(totalLiDub);





// Paris Sales Div
let parisList = document.getElementById('dubaiList');
console.log(parisList);

// Paris Object
const paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    dailyTotal: 0,
    hourlyTotArr: [],
}
console.log(getRandomCustomers(paris.max, paris.min));

// Creating & adding an h2
let headPar = document.createElement('h2');
headPar.textContent = paris.name + ' Sales';
parisList.appendChild(headPar);

// Creating and adding a section
let sectPar = document.createElement('section');
headPar.appendChild(sectPar);

// Creating and adding unordered list
let listPar = document.createElement('ul');
sectPar.appendChild(listPar);

// Creating a list item and add content to li add adding section to the DOM
for (let i = 0; i < hours.length; i++) {
    let listItemPar = document.createElement('li');
    let hourlyParTotal = getRandomCustomers(paris.max, paris.min);
    paris.dailyTotal += hourlyParTotal;
    paris.hourlyTotArr.push(hourlyParTotal);
    listItemPar.textContent = `${hours[i]}: ${hourlyParTotal} cookies`;
    listPar.appendChild(listItemPar);
    console.log(`${hours[i]}: ${hourlyParTotal} cookies`);
}

// Creating and adding a li item
let totalLiPar = document.createElement('li');
totalLiPar.textContent = `Total: ${paris.dailyTotal} cookies`;
console.log(`Totals: ${paris.dailyTotal} cookies`);
console.log(paris.hourlyTotArr);
listPar.appendChild(totalLiPar);



// Lima Sales Div
let limaList = document.getElementById('limaList');
console.log(limaList);

// Lima Object
const lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    dailyTotal: 0,
    hourlyTotArr: [],
}
console.log(getRandomCustomers(lima.max, lima.min));

// Creating & adding an h2
let headLim = document.createElement('h2');
headLim.textContent = lima.name + ' Sales';
limaList.appendChild(headLim);

// Creating and adding a section
let sectLim = document.createElement('section');
headLim.appendChild(sectLim);

// Creating and adding unordered list
let listLim = document.createElement('ul');
sectLim.appendChild(listLim);

// Creating a list item and add content to li add adding section to the DOM
for (let i = 0; i < hours.length; i++) {
    let listItemLim = document.createElement('li');
    let hourlyLimTotal = getRandomCustomers(lima.max, lima.min);
    lima.dailyTotal += hourlyLimTotal;
    lima.hourlyTotArr.push(hourlyLimTotal);
    listItemLim.textContent = `${hours[i]}: ${hourlyLimTotal} cookies`;
    listLim.appendChild(listItemLim);
    console.log(`${hours[i]}: ${hourlyLimTotal} cookies`);
}

// Creating and adding a li item
let totalLiLim = document.createElement('li');
totalLiLim.textContent = `Total: ${lima.dailyTotal} cookies`;
console.log(`Totals: ${lima.dailyTotal} cookies`);
console.log(lima.hourlyTotArr);
listLim.appendChild(totalLiLim);







