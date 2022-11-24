const displayDirectory = (dataDirectory) => {
  dataDirectory.companies.forEach (
      company => {
      let card = document.createElement('section');
      let name = document.createElement('h3');
      let logo = document.createElement('img');
      let address = document.createElement('p');
      let phoneNumber = document.createElement('p');
      let URL = document.createElement('a');
      
      name.textContent = `${company.name}`;

      logo.setAttribute('src', company.image);
      logo.setAttribute('alt', `Photo of ${company.name}`);
      logo.setAttribute('loading', 'lazy');
     
      address.textContent = `${company.address}`;
      phoneNumber.textContent = `${company.phoneNumber}`;
      // URL.textContent = `${company.URL}`;
      let linkWebsite = document.createTextNode(company.URL);
      URL.appendChild(linkWebsite);
      URL.href = company.URL;
      URL.target = '_blank';
      
      card.appendChild(name);
      card.appendChild(logo);
      card.appendChild(address);
      card.appendChild(phoneNumber);
      card.appendChild(URL);
      document.querySelector('article.directory').appendChild(card);
    }
  )
}

/*------ JSON application--------*/  
async function getDirectory() {
  const response = await fetch("./json/data.json");
  if (response.ok) {
    let data = await response.json();
    console.log(data);
    displayDirectory(data);
  }
}
const dir = document.querySelector('.directory');
if (dir) {
  getDirectory();
}

/*------------Button Listeners ----------------*/

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

if (gridbutton || listbutton) {

gridbutton.addEventListener("click", () => {
display.classList.add("grid");
display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
display.classList.add("list");
display.classList.remove("grid");
});
}
