/* Primary Nav Button */
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamButton").classList.toggle("open");
}
const x = document.getElementById('hamButton')
x.onclick = toggleMenu;


/*JS for date */

document.getElementById("year").innerHTML = (new Date().toLocaleString());



/*Last Modified */
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastupdated').textContent = `Last Modification: ${document.lastModified}`;


/*Join Us and Meeting Banner */
const day = new Date();
const today = day.getDay();

if (today < 1 || today > 2) {
    const banner = document.querySelector('.meeting');
    banner.remove();
}  

/*** DIRECTORY *******/

const displayDirectory = (dataDirectory) => {
    dataDirectory.companies.forEach (
        company => {
        let card = document.createElement('section');
        let name = document.createElement('h3')
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let URL = document.createElement('p');
        let email = document.createElement('p');
        
        name.textContent = `${company.name}`;

        logo.setAttribute('src', company.image);
        logo.setAttribute('alt', `Photo of ${company.name}`);
        logo.setAttribute('loading', 'lazy');
       
        address.textContent = `${company.address}`;
        phoneNumber.textContent = `${company.phoneNumber}`;
        URL.textContent = `${company.URL}`;
        email.textContent = `${company.email}`;
        
        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(URL);
        card.appendChild(email);
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

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
	display.classList.add("list");
	display.classList.remove("grid");
});
