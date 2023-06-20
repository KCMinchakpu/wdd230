
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

  /* Input Hidden */

  
    var d = new Date();

    // Set the value of the "date" field
    document.getElementById("date").value = d.toDateString();

    // Set the value of the "time" field
    var hours = d.getHours();
    var mins = d.getMinutes();
    var seconds = d.getSeconds();
    document.getElementById("time").value = hours + ":" + mins + ":" + seconds;


    /* visit */

    window.onload = function() {
      // SET TODAYS DATE
      let dayNames = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
      let today =new Date();
      let dayName = dayNames[today.getDay()];
      let monthName = months[today.getMonth()];
      let formattedDate = dayName + ", " + today.getDate() + " " + monthName + " "  + today.getFullYear();
      let todayTag = document.querySelector("#today");
      todayTag.innerHTML = formattedDate;
    
    
      var lastVisit = localStorage.getItem('lastVisitToAkwangaWeather');
      console.log("lastVisit: ", lastVisit);
      var todayStorage = today;
      console.log("today: ", today);
      localStorage.setItem('lastVisitToAkwangaWeather', today);
    
      if (lastVisit != null) {
        console.log("lastVisit: ", lastVisit);
        lastVisit = new Date(lastVisit);
        let daysSinceLastVisit = (todayStorage.getTime() - lastVisit.getTime()) / (1000 * 3600 * 24);
        daysSinceLastVisit = Math.round(daysSinceLastVisit * 10) / 10
        console.log("daysSinceLastVisit: ", daysSinceLastVisit);
        document.querySelector('#days-since-last-visit').innerHTML = String(daysSinceLastVisit) + " days since your last visit";
      } else {
        console.log("This is their first visit to the website");
        document.querySelector('#days-since-last-visit').innerHTML = String(daysSinceLastVisit) + "Welcome Newcomer!";
      }
    }