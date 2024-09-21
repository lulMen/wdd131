// Create a new Date object
const today = new Date();

// Select the elements
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

// Set the current year in the currentYear element
currentYear.innerHTML = `${today.getFullYear()}`;

// Set the last modified date
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;