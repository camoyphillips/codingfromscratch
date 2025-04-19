
// Get all slides and buttons
const slides = document.querySelectorAll('.slide');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');

let current = 0;
const total = slides.length;

// Initialize slideshow
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

// Show the first slide initially
showSlide(current);

// Next button click handler
nextButton.addEventListener('click', () => {
  current++;
  if (current >= total) {
    current = 0;
  }
  showSlide(current);
});

// Previous button click handler
prevButton.addEventListener('click', () => {
  current--;
  if (current < 0) {
    current = total - 1;
  }
  showSlide(current);
});

// Auto-slide every 5 seconds
setInterval(() => {
  current++;
  if (current >= total) {
    current = 0;
  }
  showSlide(current);
}, 5000);