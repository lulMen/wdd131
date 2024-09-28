const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');
const content = document.querySelector('body');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    content.classList.toggle('open');
});

// Create a new Date object
const today = new Date();

// Select the elements
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

// Set the current year in the currentYear element
currentYear.innerHTML = `${today.getFullYear()}`;

// Set the last modified date
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;