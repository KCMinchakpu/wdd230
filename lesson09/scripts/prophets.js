
const requestURL = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(Prophets);
});



function Prophets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthdate= document.createElement('p');
    let birthplace= document.createElement('p');
    let numofchildren= document.createElement('p');
    let death= document.createElement('p');
    let length= document.createElement('p');
    let order= document.createElement('p');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
  
    //
    let suffix = '';

    switch (prophet.order) {
      case 1: 
        suffix = 'st';
        break;
      case 2:
        suffix = 'nd';
        break;
      case 3:
        suffix = 'rd';
        break;
      default:
        suffix = 'th';
    }
    
    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${suffix} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
  
    // Change the text Content property of the p element to contain the prophet's birth date and birth place
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    numofchildren.textContent = `Children: ${prophet.numofchildren}`;
    length.textContent = `Prophet Years: ${prophet.length}`;
    death.textContent = `Death: ${prophet.death}`;
    order.textContent = `Order: ${prophet.order}${suffix} Latter-day President`;
   
   


    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(numofchildren);
    card.appendChild(death);
    card.appendChild(length);
    card.appendChild(order);
    card.appendChild(portrait);
   
    // card.appendChild(birthplace)
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

  

