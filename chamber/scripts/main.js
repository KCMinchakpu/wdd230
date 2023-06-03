
/* Navigation */

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  /*JS for date */

document.getElementById("year").innerHTML = (new Date().toLocaleString());

/* meetings message */

const currentDay = new Date().getDay();

// from sunday to saturday
switch(currentDay) {
  case 0:
    meetings = '';
    break;
 case 1:
    meetings = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m';
    break;
 case 2:
    meetings = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m';
    break;
 case 3:
    meetings = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m';
    break;
 case 4:
   meetings = '';
    break;
 case 5:
    meetings = '';
    break;
 case 6:
    meetings = '';
    break;
}

document.getElementById("meetings").innerHTML = meetings;

/* discover */

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
    imagesToLoad.forEach((img1) => {
      loadImages(img);
    });
  }

  