// -----Store the resource, the URL of the JSON file into a const variable--------

const requestURL = 'chamber/data/companiesdata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
 
    var firstItem = true;
    for (let i = 0; i < businesses.length; i++ ) {
      console.log("card #", i,": ", businesses[i].business);


    // Create elements to add to the document
    let card = document.createElement('section'); //card
    let image = document.createElement('img'); //logo
    let div = document.createElement('div'); //company info holder
    let h2 = document.createElement('h2'); //company name
    let p1 = document.createElement('p'); //email
    let p2 = document.createElement('p'); //phone number
    let p3 = document.createElement('p'); //site reference
    let p4 = document.createElement('p'); //Company membership level
    
    // Build the image attributes for the src, alt, and loading attribute values. 
    image.src = String(`${businesses[i].imageurl}`);
    image.alt = String(`${businesses[i].business} - photo`);
    image.width = "225";
    image.height = "225";
    image.loading = "lazy"

    h1.textContent = String(`${businesses[i].business}`);
    // Change the text Content property of the p element to contain the company's phonenumber, address, website and level
    console.log("businesses[i].contactInfo: ", businesses[i].contactInfo.phoneNumber);
    p1.innerHTML = String(`Phone: ${businesses[i].contactInfo.phoneNumber}`);
    p2.innerHTML = String(`Address: ${businesses[i].contactInfo.address}`);
    p3.innerHTML = String(`Website: ${businesses[i].website}`);
    p4.innerHTML = String(`Level: ${businesses[i].level}`);


    // Add/append the section(card) with the h2 element
    card.appendChild(image);
    div.appendChild(h1);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    card.appendChild(div);
    card.setAttribute("dataset", businesses[i].url);
   
   function openLink(e) {
      e.preventDefault();
      console.log("e.target: ", e.target.attributes[0]);
      window.location = e.target.attributes[0].value;
    }
    card.onclick = openLink;
    card.classList.add('article');
   
  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('#card-layout').appendChild(card);
  firstItem = false;
}
});

  // Toggle directory view
  function changeDisplayStyle(type) {
    console.log("type: ", type);
    document.querySelector('#card-layout').className="";
    type == "grid" ? document.querySelector('#card-layout').classList.add("card-grid") : document.querySelector('#card-layout').classList.add("card-list");
  }
  
 