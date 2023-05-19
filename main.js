"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    let searchTerm = searchInput.value.toLowerCase();
    coffees.forEach(function(coffee) {
        if ((coffee.roast === selectedRoast || selectedRoast === "all") && coffee.name.toLowerCase().includes(searchTerm)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee(e) {
    e.preventDefault();
    let newCoffee = {
        id: coffees.length + 1,
        name: newCoffeeName.value,
        roast: newRoastSelection.value
    }
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Jack Frost', roast: 'light'},
    {id: 2, name: 'Frosty the Snowman', roast: 'light'},
    {id: 3, name: 'Snowfall', roast: 'light'},
    {id: 4, name: 'Black Ice', roast: 'medium'},
    {id: 5, name: 'Oh Hail NO!', roast: 'medium'},
    {id: 6, name: 'Blizzard Beans', roast: 'medium'},
    {id: 7, name: 'Avalanche Affogato', roast: 'dark'},
    {id: 8, name: 'Chillin Mocha Mint', roast: 'dark'},
    {id: 9, name: 'Gusty Chai', roast: 'dark'},
    {id: 10, name: 'Frostbite Frappe', roast: 'dark'},
    {id: 11, name: 'Brewed Awakening', roast: 'dark'},
    {id: 12, name: 'Sip Happens', roast: 'dark'},
    {id: 13, name: 'Snowplace Like Roast', roast: 'dark'},
    {id: 14, name: 'Cool Story Brew', roast: 'dark'},
];

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let searchInput = document.querySelector('#search-input');
let newRoastSelection = document.querySelector('#new-roast-selection');
let newCoffeeForm= document.querySelector('#new-coffee-form');
let newCoffeeName= document.querySelector('#new-coffee-name');



tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
searchInput.addEventListener('input', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
newCoffeeForm.addEventListener('submit', addCoffee);

