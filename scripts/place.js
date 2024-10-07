// Create a new Date object
const today = new Date();

// Select the elements
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

// Set the current year in the currentYear element
currentYear.innerHTML = `${today.getFullYear()}`;

// Set the last modified date
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16));
}

const temp = 25;
const condition = 'Sunny';
const windSpeed = 15;
let windChill;

if (temp <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temp, windSpeed);
} else {
    windChill = 'N/A';
}

document.querySelector(".weather dl").innerHTML += `
    <dt>Temperature:</dt>
    <dd>${temp}°C</dd>
    <dt>Wind Speed:</dt>
    <dd>${windSpeed} km/h</dd>
    <dt>Condition:</dt>
    <dd>${condition}</dd>
    <dt>Wind Chill:</dt>
    <dd>${windChill === 'N/A' ? windChill : windChill.toFixed(2) + '°C'}</dd>
`;