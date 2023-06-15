// -----Store the resource, the URL of the JSON file into a const variable--------

const requestURL = "chamber/json/data.json";
const cards = document.querySelector('.cards');
// const companies = document.querySelector('.companies');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['companies'];
    prophets.forEach(Companies);
});

//   Build the HTML of the prophet card using the createElement() and appendChild() methods on the document
function Companies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address= document.createElement('p');
    let phoneNumber= document.createElement('p');
    let website= document.createElement('p');
    let level= document.createElement('p');
    let portrait = document.createElement('img');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${company.name}`;
  
   // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
   portrait.setAttribute('src', company.imageurl);
   portrait.setAttribute('alt', `Portait of ${company.name}`);
   portrait.setAttribute('loading', 'lazy');
   portrait.setAttribute('width', '225');
   portrait.setAttribute('height', '225');
   
   
   // Change the text Content property of the p element to contain the prophet's birth date and birth place
   address.textContent = `Address of Company: ${company.address}`;
   phoneNumber.textContent = `Conpany's Phone Number: ${company.phoneNumber}`;
   website.textContent = `Website: ${company.website}`;
   level.textContent = `Level: ${company.level}`;
   

 // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(website);
    card.appendChild(level);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }
  // TOGGLE DIRECTORY VIEW
  // Add active class to the current button (highlight it)
  const gridbutton = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");
  const display = document.querySelector(".cards");


    gridbutton.addEventListener("click", () => {
	
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


/* btn2*/

// Get the container element
var menuContainer = document.getElementById("myMENU");

// Get all buttons with class="btn2" inside the container
var menus = menuContainer.getElementsByClassName("menu");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btn2s.length; i++) {
  menus[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}