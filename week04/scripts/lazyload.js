const today = new Date();

const currentYear = document.querySelector('#currentYear');
const lastModified = document.querySelector('#lastModified');

currentYear.innerHTML = `${today.getFullYear()} `;

lastModified.innerHTML = `Last Modified: ${document.lastModified}`;