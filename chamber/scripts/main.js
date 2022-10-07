// select the elements to manipulate (output to)
document.getElementById("year").innerHTML = (new Date().toLocaleString());

function toggleMenu() {
	document.getElementById("primaryNav").classList.toggle("open");
	document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;