// -----Store the resource, the URL of the JSON file into a const variable--------

const requestURL = "chamber/json/data.json";
const companies = document.querySelector('.companies');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
});

//   Build the HTML of the Company card using the createElement() and appendChild() methods on the document
function displayCompanies(company) {
    // Create elements to add to the document
    let company = document.createElement('section');
    let h2 = document.createElement('h2');
    let address= document.createElement('p');
    let phoneNumber= document.createElement('p');
    let website= document.createElement('p');
    let level= document.createElement('p');
    let portrait = document.createElement('img');

    // Change the textContent property of the h2 element to contain the company's full name
    // Change the text Content property of the p element to contain the company's info
    h2.textContent = `${company.name}`;
    address.textContent = `Address: ${company.address}`;
    phoneNumber.textContent = `Phone Number: ${company.phoneNumber}`;
    website.textContent = `Website: ${company.website}`;
    level.textContent = `Level: ${company.level}`;
  
   // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
   portrait.setAttribute('src', company.imageurl);
   portrait.setAttribute('alt', `Portait of ${company.name}`);
   portrait.setAttribute('loading', 'lazy');
   portrait.setAttribute('width', '225');
   portrait.setAttribute('height', '225');
   
  
   // Add/append the section(card) with the h2 element
    company.appendChild(h2);
    company.appendChild(address);
    company.appendChild(phoneNumber);
    company.appendChild(website);
    company.appendChild(level);
    company.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('.dirgrid').appendChild(company);
  }

  // TOGGLE DIRECTORY VIEW
  // Add active class to the current button (highlight it)
  const display = document.querySelector(".dirgrid");

  function listView(){
    display.classList.add("dirlist");
    display.classList.remove("dirgrid");
    document.getElementById("listbtn").classList.add("active");
    document.getElementById("gridbtn").classList.remove("active");
  }

  function gridView(){
    display.classList.add("dirgrid");
    display.classList.remove("dirlist");
    document.getElementById("gridbtn").classList.add("active")
    document.getElementById("listbtn").classList.remove("active");
    
  }
