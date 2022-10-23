// select the elements to manipulate (output to)
document.getElementById("year").innerHTML = (new Date().toLocaleString());

function toggleMenu() {
	document.getElementById("primaryNav").classList.toggle("open");
	document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

function windChillFahrenheit() {
	document.getElementById("idd12a351127c14").innerHTML = 

}
const windChillFahrenheit = (temperature, windSpeed) =>
      35.74 + 0.6215 * temperature -35.75 * windSpeed ** 0.16 + 0.4275 * temperature * windSpeed** 0.16;