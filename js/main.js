/* toggle menu */
// Selecting DOM elements for the header burger menu toggle
const headerBurger = document.querySelector(".header__navigation");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

// Adding click event listener to toggle classes for menu display and body scroll
headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

// Array of partner images for the slider
const imageArray = [
  "/images/partners/usaid.jpg",
  "/images/partners/space.jpg",
  "/images/partners/tianeti.jpg",
  "/images/partners/tegeta.jpg",
  "/images/partners/spectre.jpg",
  "/images/partners/tbc_leaseng.jpg",
  "/images/partners/ufc.jpg",
];

// Slider functionality
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageIndicator = document.getElementById("pageIndicator");
let currentIndex = 0;

// Display slides based on the current index
function showSlides() {
  slider.innerHTML = "";
  for (
    let i = currentIndex;
    i < currentIndex + 3 && i < imageArray.length;
    i++
  ) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = imageArray[i];
    div.appendChild(img);
    slider.appendChild(div);
  }
  updatePageIndicator();
}

// Move to the previous set of slides
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex -= 3;
    showSlides();
  }
}

// Move to the next set of slides or reset to the beginning if at the end
function nextSlide() {
  if (currentIndex + 3 < imageArray.length) {
    currentIndex += 3;
    showSlides();
  } else {
    currentIndex = 0;
    showSlides();
  }
}

// Update the page indicator based on the current index
function updatePageIndicator() {
  pageIndicator.innerHTML = "";
  const pageCount = Math.ceil(imageArray.length / 3);
  for (let i = 0; i < pageCount; i++) {
    const circle = document.createElement("div");
    circle.classList.add("page-circle");
    if (i * 3 <= currentIndex && currentIndex < (i + 1) * 3) {
      circle.classList.add("active");
    }
    pageIndicator.appendChild(circle);
  }
}

// Initial slide display and automatic slide change every 5000 milliseconds
showSlides();
setInterval(nextSlide, 5000);

// Function to toggle the accordion item based on the header click
function toggleAccordion(header) {
  var item = header.parentNode;
  item.classList.toggle("active");
}
