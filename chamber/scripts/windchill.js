const milesToKm = (miles) => miles / 0.621371;
const celsiusToFahrenheit = (celsius) => celsius * 1.8 + 32;
const windChillCelsius = (t, v) =>
  13.12 +
  0.6215 * t -
  11.37 * v ** 0.16 +
  0.3965 * t * v ** 0.16;


const tC = 10   ;
const skmH = 5;

document.querySelector('.degrees').textContent = t;
document.querySelector('.speed').textContent = v;

const tF = t * (9/5) + 32;
const smH = v / 1.609;

console.log(tF);
console.log(smH);


if (tF <= 50 && smH > 3) {
const f = 35.74 + 0.6215 * tF - 35.75 * (smH**0.16) + 0.4275 * tF * (smH**0.16)
document.querySelector('.wind').textContent = f.toFixed(1);
}
else {
  document.querySelector('.wind').textContent = 'N/A';
}
