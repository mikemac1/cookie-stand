'use strict'

let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']

let stores = [];

// Need to generate a random number of customers per hour
function getRandomCustomers(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generic City Constructor Object
function City(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.dailyTotal = 0;
    this.hourlyTotArr = [];
}


// Function to compute the hourly cookie count and push it to the array as well as compute the daily total.
City.prototype.renderCity = function () {
    for (let i = 0; i < hours.length; i++) {
        let hourlyCityTotal = Math.ceil(getRandomCustomers(this.max, this.min) * this.avg);
        this.dailyTotal += hourlyCityTotal;
        this.hourlyTotArr.push(hourlyCityTotal);
        console.log(`${hours[i]}: ${hourlyCityTotal} cookies`);
    }
    stores.push(this);
}

// Creating Seattle Sales Object
let seattle = new City(
    'Seattle',
    23,
    65,
    6.3,
);
seattle.renderCity();


// Creating Tokyo Sales Object
let tokyo = new City(
    'Tokyo',
    3,
    24,
    1.2,
);
tokyo.renderCity();


// Creating Dubai Sales Object
let dubai = new City(
    'Dubai',
    11,
    38,
    3.7,
);
dubai.renderCity();


// Creating Paris Sales Object
let paris = new City(
    'Paris',
    20,
    38,
    2.3,
);
paris.renderCity();


// Creating Lima Sales Object
let lima = new City(
    'Lima',
    2,
    16,
    4.6,
);
lima.renderCity();

// TABLE RENDERING COMPONENTS
// Thead
let cityTable = document.querySelector('table');
console.log(cityTable);

// Creating & adding a thead
let headTable = document.createElement('thead');
cityTable.appendChild(headTable);

// Creating & adding a tr
let topRow = document.createElement('tr');
headTable.appendChild(topRow);

// Creating & adding a blank th
let topCell = document.createElement('th');
topRow.appendChild(topCell);

// Creating & adding a th for hours
for (let i = 0; i < hours.length; i++) {
    topCell = document.createElement('th');
    topCell.textContent = hours[i];
    topRow.appendChild(topCell);
}

// Creating & adding a daily location total th
topCell = document.createElement('th');
topCell.textContent = 'Daily Location Total';
topRow.appendChild(topCell);


// Tbody
// Creating & adding a tbody
let bodyTable = document.querySelector('tbody');
cityTable.appendChild(bodyTable);


City.prototype.renderTable = function () {
    // Creating & adding a tr
    let row = document.createElement('tr');
    bodyTable.appendChild(row);

    // Creating & adding a city name td
    let cityCell = document.createElement('td');
    cityCell.textContent = this.name;
    row.appendChild(cityCell);

    // Creating & adding City's Hourly Totals
    for (let a = 0; a < hours.length; a++) {
        cityCell = document.createElement('td');
        cityCell.textContent = this.hourlyTotArr[a];
        row.appendChild(cityCell);
    }

    // Creating & adding City's Daily Totals
    cityCell = document.createElement('td');
    cityCell.textContent = this.dailyTotal;
    row.appendChild(cityCell);
}

seattle.renderTable();
tokyo.renderTable();
dubai.renderTable();
paris.renderTable();
lima.renderTable();


// Tfoot
// Creating & adding a tfoot
let oldfootTable = document.querySelector('tfoot');;
cityTable.appendChild(oldfootTable);

// Creating & adding a tr
let botRow = document.createElement('tr');
oldfootTable.appendChild(botRow);

// Creating & adding a Totals th
let botCell = document.createElement('th');
botCell.textContent = 'Totals';
botRow.appendChild(botCell);

// Creating & adding a th for the hourly Totals
for (let i = 0; i < hours.length; i++) {
    let tableHourTotal = 0;
    for (let j = 0; j < stores.length; j++) {
        // For hour 0 - Add all stores at hour 0
        tableHourTotal += stores[j].hourlyTotArr[i];
    }
    botCell = document.createElement('td');
    botCell.textContent = tableHourTotal;
    botRow.appendChild(botCell);
}

// Creating & adding a th for the daily Total
let tableDailyTotal = 0;
for (let k = 0; k < stores.length; k++) {
    tableDailyTotal += stores[k].dailyTotal;
}
botCell = document.createElement('td');
botCell.textContent = tableDailyTotal;
botRow.appendChild(botCell);

// Building Form Event Handler
// Step 1: Window into the DOM
let formCity = document.querySelector('form');
console.log()


// Step 2: Add Event Listener
// What is the type of Event
formCity.addEventListener('submit', handleSubmit);


// Step 3: DECLARE A FUNCTION TO BE THE EVENT HANDLER
function handleSubmit(event) {
    event.preventDefault();
    console.log(`the form submitted`);
    console.log(event.target.nameCity.value);

    let nameCit = event.target.nameCity.value;
    // let address = event.target.addressCity.value;
    let minCust = parseInt(event.target.minCustomers.value);
    let maxCust = parseInt(event.target.maxCustomers.value);
    let avgCook = parseInt(event.target.avgCookies.value);

    // function City to add city to table
    let addCity = new City(nameCit, minCust, maxCust, avgCook);
    console.log(addCity);
    addCity.renderCity();
    addCity.renderTable();
    newDailyTotals();
}

// Create new totals for added city
function newDailyTotals() {
    document.getElementById("cityTable").deleteRow(-1);
    // Tfoot
    // Creating & adding a tfoot
    let footTable = document.querySelector('tfoot');;
    cityTable.appendChild(footTable);

    // Creating & adding a tr
    let botRow = document.createElement('tr');
    footTable.appendChild(botRow);

    // Creating & adding a Totals th
    let botCell = document.createElement('th');
    botCell.textContent = 'New Totals';
    botRow.appendChild(botCell);

    // Creating & adding a th for the hourly Totals
    for (let i = 0; i < hours.length; i++) {
        let tableHourTotal = 0;
        for (let j = 0; j < stores.length; j++) {
            // For hour 0 - Add all stores at hour 0
            tableHourTotal += stores[j].hourlyTotArr[i];
        }
        botCell = document.createElement('td');
        botCell.textContent = tableHourTotal;
        botRow.appendChild(botCell);
    }

    // Creating & adding a th for the daily Total
    let tableDailyTotal = 0;
    for (let k = 0; k < stores.length; k++) {
        tableDailyTotal += stores[k].dailyTotal;
    }
    botCell = document.createElement('td');
    botCell.textContent = tableDailyTotal;
    botRow.appendChild(botCell);
}

