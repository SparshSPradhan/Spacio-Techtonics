// Example: Form submission (basic)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
});

// JavaScript for scrolling and background changes
const section = document.getElementById("vision-mission");

// Array of background images
const backgrounds = [
    "assets/bg1.jpg",
    "assets/bg2.jpg",
    "assets/bg3.jpg",
    "assets/bg4.jpg",
];

// Current background index
let currentIndex = 0;

// Function to update the background image
function updateBackground() {
    section.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
}

// Scroll to the left
function scrollLeft() {
    currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
    updateBackground();
}

// Scroll to the right
function scrollRight() {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    updateBackground();
}

// Initialize the first background
updateBackground();





// Get the gallery and items
const portfolioGallery = document.getElementById('portfolioGallery');
const portfolioItems = portfolioGallery.querySelectorAll('.portfolio-item');

// Add an event listener to track the scroll position
portfolioGallery.addEventListener('scroll', function () {
    // Get the current scroll position
    const scrollLeft = portfolioGallery.scrollLeft;

    portfolioItems.forEach((item, index) => {
        // Calculate how far each item is from the scroll position
        const distance = Math.abs(item.offsetLeft - scrollLeft);
        
        // Scale the item based on its distance from the scroll position
        const scale = 1 + Math.min(distance / 500, 0.2);  // Max scale of 1.2
        item.style.transform = `scale(${scale})`;
    });
});



//profile section

const sliderContainer = document.querySelector(".team-slider-container");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

let scrollPosition = 0;
const itemWidth = 320; // Width of each team-item including margin

// Scroll Left
leftArrow.addEventListener("click", () => {
    scrollPosition -= itemWidth;
    if (scrollPosition < 0) scrollPosition = 0; // Prevent scrolling beyond the start
    sliderContainer.style.transform = `translateX(-${scrollPosition}px)`;
});

// Scroll Right
rightArrow.addEventListener("click", () => {
    scrollPosition += itemWidth;
    const maxScroll =
        sliderContainer.scrollWidth - sliderContainer.clientWidth;
    if (scrollPosition > maxScroll) scrollPosition = maxScroll; // Prevent scrolling beyond the end
    sliderContainer.style.transform = `translateX(-${scrollPosition}px)`;
});
