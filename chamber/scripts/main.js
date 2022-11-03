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

let imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } 
else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
  