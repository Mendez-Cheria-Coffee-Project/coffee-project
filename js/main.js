(function(){
"use strict"

// Function to render single coffee object into HTML
function renderCoffee(coffee) {
    return `
        <div class="col-xs-12 col-sm-12 col-xl-4 col-lg-6 col-md-6 mb-4">
            <div class="card h-100">
                <img class="card-img-top" src="../img/coffee.png" alt="${coffee.name}">
                <div class="card-body">
                    <h5 class="card-title">${coffee.name}</h5>
                    <p class="card-text">${coffee.roast}</p>
                </div>
            </div>
        </div>
    `;
}

// Function to render a list of coffee objects into HTML
function renderCoffees(coffees) {
    let html = '<div class="row">';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    html += '</div>';
    return html;
}

// Function to update coffee list based on the selected roast and search term
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value.toLowerCase();
    let filteredCoffees = [];
    let searchTerm = searchInput.value.toLowerCase();
    coffees.forEach(function(coffee) {
        if ((coffee.roast === selectedRoast || selectedRoast === "all") && coffee.name.toLowerCase().includes(searchTerm)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// Function to add a new coffee to the list
function addCoffee(e) {
    e.preventDefault();
    let newCoffee = {
        id: coffees.length + 1,
        name: newCoffeeName.value,
        roast: newRoastSelection.value.toLowerCase()
    }
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
}

// Array of coffee objects
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

// Query DOM elements
let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let searchInput = document.querySelector('#search-input');
let newRoastSelection = document.querySelector('#new-roast-selection');
let newCoffeeForm= document.querySelector('#new-coffee-form');
let newCoffeeName= document.querySelector('#new-coffee-name');

// Initial rendering of coffee list
tbody.innerHTML = renderCoffees(coffees);

// Add event listeners to form controls
submitButton.addEventListener('click', updateCoffees);
searchInput.addEventListener('input', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
newCoffeeForm.addEventListener('submit', addCoffee);
})();
