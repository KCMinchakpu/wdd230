let rURL = 'https://kcminchakpu.github.io/directory2/json/businesses.json';

fetch(rURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    var firstItem = true;
    for (let i = 0; i < businesses.length; i++ ) {
      console.log("card #", i,": ", businesses[i].business);
      let card = document.createElement('section');//card
      let image = document.createElement('img');//logo
      let div = document.createElement('div');//company info holder
      let h1 = document.createElement('h2');//company name
      let p1 = document.createElement('p');//email
      let p2 = document.createElement('p');//phone number
      let p3 = document.createElement('p');//site reference

      image.src = String(`${businesses[i].logolocation}`);
      image.alt = String(`${businesses[i].business} - photo`);
      image.width = "250";
      h1.textContent = String(`${businesses[i].business}`);
      console.log("businesses[i].contactInfo: ", businesses[i].contactInfo.telephone);
      p1.innerHTML = String(`Phone: ${businesses[i].contactInfo.telephone}`);
      p2.innerHTML = String(`Address: ${businesses[i].contactInfo.address}`);
      p3.innerHTML = String(`Website: ${businesses[i].url}`);  

      card.appendChild(image);
      div.appendChild(h1);
      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);
      card.appendChild(div);
      card.setAttribute("dataset", businesses[i].url);
      function openLink(e) {
        e.preventDefault();
        console.log("e.target: ", e.target.attributes[0]);
        window.location = e.target.attributes[0].value;
      }
      card.onclick = openLink;
      card.classList.add('article');

      document.querySelector('#card-layout').appendChild(card);
      firstItem = false;
    }
  });

function changeDisplayStyle(type) {
  console.log("type: ", type);
  document.querySelector('#card-layout').className="";
  type == "grid" ? document.querySelector('#card-layout').classList.add("card-grid") : document.querySelector('#card-layout').classList.add("card-list");
}

