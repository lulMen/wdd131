function addReviewProducts(productList) {
    const productSelect = document.querySelector('#product')

    productList.forEach(product => {
        const option = document.createElement('option');
        option.value = product;
        option.textContent = product;
        productSelect.appendChild(option);
    });
}

function setFooterInformation() {
    const today = new Date();

    // Select the elements
    const currentYear = document.querySelector("#currentYear");
    const lastModified = document.querySelector("#lastModified");

    // Set the current year in the currentYear element
    currentYear.innerHTML = `${today.getFullYear()}`;

    // Set the last modified date
    lastModified.innerHTML = `Last Modified: ${document.lastModified}`;
}


const products = ["Product A", "Product B", "Product C", "Product D", "Product E"]

// const products = [
//     {
//       id: "fc-1888",
//       name: "flux capacitor",
//       averagerating: 4.5
//     },
//     {
//       id: "fc-2050",
//       name: "power laces",
//       averagerating: 4.7
//     },
//     {
//       id: "fs-1987",
//       name: "time circuits",
//       averagerating: 3.5
//     },
//     {
//       id: "ac-2000",
//       name: "low voltage reactor",
//       averagerating: 3.9
//     },
//     {
//       id: "jj-1969",
//       name: "warp equalizer",
//       averagerating: 5.0
//     }
//   ];

addReviewProducts(products);
setFooterInformation();