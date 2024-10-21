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

document.addEventListener("DOMContentLoaded", function () {
    let reviewCount = localStorage.getItem('reviewCount');

    if (!reviewCount) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount, 10);
    }

    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    document.getElementById('review-count').textContent = reviewCount;
});

setFooterInformation();