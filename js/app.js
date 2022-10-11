'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

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
    this.renderCity = function () {
        // City Sales Div
        let cityList = document.getElementById('cityList');
        console.log(cityList);
        // Creating & adding an h2
        let headCity = document.createElement('h2');
        headCity.textContent = this.name + ' Sales';
        cityList.appendChild(headCity);

        // Creating and adding a section
        let sectCity = document.createElement('section');
        headCity.appendChild(sectCity);

        // Creating and adding unordered list
        let listCity = document.createElement('ul');
        sectCity.appendChild(listCity);

        // Creating a list item and add content to li and adding section to the DOM
        for (let i = 0; i < hours.length; i++) {
            let listItemCity = document.createElement('li');
            let hourlyCityTotal = Math.ceil(getRandomCustomers(this.max, this.min) * this.avg);
            this.dailyTotal += hourlyCityTotal;
            this.hourlyTotArr.push(hourlyCityTotal);
            listItemCity.textContent = `${hours[i]}: ${hourlyCityTotal} cookies`;
            listCity.appendChild(listItemCity);
            console.log(`${hours[i]}: ${hourlyCityTotal} cookies`);
        }

        // Creating and adding a Totals li item
        let totalLiCity = document.createElement('li');
        totalLiCity.textContent = `Total: ${this.dailyTotal} cookies`;
        console.log(`Totals: ${this.dailyTotal} cookies`);
        console.log(this.hourlyTotArr);
        listCity.appendChild(totalLiCity);
    }
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
