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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 21",
        area: 152460,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/madrid-spain-temple/madrid-spain-temple-43830.jpg"
    },
    {
        templeName: "Adelaide Australia",
        location: "Marden, South Australia",
        dedicated: "2000, June, 15",
        area: 302306,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359.jpg"
    },
    {
        templeName: "Fukuoka Japan",
        location: "Fukuoka-shi, Fukuoka",
        dedicated: "2000, June, 11",
        area: 54450,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/fukuoka-japan-temple/fukuoka-japan-temple-14618.jpg"
    },
];

const gallery = document.querySelector('.gallery');

function displayTemples(templesToDisplay) {
    gallery.innerHTML = '';

    templesToDisplay.forEach(temple => {
        // const templeCard = document.createElement('div');
        const templeCard = document.createElement('figure');
        templeCard.classList.add('temple-card');

        const templeImage = document.createElement('img');
        templeImage.src = temple.imageUrl;
        templeImage.alt = `${temple.templeName} Temple`
        templeImage.loading = 'lazy';

        const templeName = document.createElement('h3');
        templeName.textContent = temple.templeName;

        const templeLocation = document.createElement('p');
        const locationLabel = document.createElement('span');
        locationLabel.textContent = 'Location: ';
        locationLabel.classList.add('label');
        templeLocation.appendChild(locationLabel);
        templeLocation.append(`${temple.location}`);

        const templeDedicated = document.createElement('p');
        const dedicatedLabel = document.createElement('span');
        dedicatedLabel.textContent = 'Dedicated: ';
        dedicatedLabel.classList.add('label');
        templeDedicated.appendChild(dedicatedLabel);
        templeDedicated.append(`${temple.dedicated}`);

        const templeArea = document.createElement('p');
        const areaLabel = document.createElement('span');
        areaLabel.textContent = 'Area: ';
        areaLabel.classList.add('label');
        templeArea.appendChild(areaLabel);
        templeArea.append(`${temple.area} sq ft`);

        templeCard.append(templeName);
        templeCard.append(templeLocation);
        templeCard.append(templeDedicated);
        templeCard.append(templeArea);
        templeCard.append(templeImage);

        gallery.appendChild(templeCard);
    });
}

// Event listener for the menu items
document.querySelector('nav').addEventListener('click', (event) => {
    event.preventDefault();

    const menuItem = event.target.textContent.trim();
    let filteredTemples = [];

    if (menuItem === 'Home') {
        filteredTemples = temples;
    } else if (menuItem === 'Old') {
        filteredTemples = temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(',')[0]);
            return year > 2000;
        });
    } else if (menuItem === 'New') {
        filteredTemples = temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(',')[0]);
            return year < 1900;
        });
    } else if (menuItem === 'Large') {
        filteredTemples = temples.filter(temple => temple.area > 90000);
    } else if (menuItem === 'Small') {
        filteredTemples = temples.filter(temple => temple.area < 10000);
    }

    displayTemples(filteredTemples);
});

displayTemples(temples);