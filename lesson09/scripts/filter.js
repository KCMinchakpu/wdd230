
function openFilter(evt, filterName) {
  // Declare all variables
  var i, tabcontent, filterlinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="filterlinks" and remove the class "active"
  filterlinks = document.getElementsByClassName("filterlinks");
  for (i = 0; i < filterlinks.length; i++) {
    filterlinks[i].className = filterlinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(filterName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();