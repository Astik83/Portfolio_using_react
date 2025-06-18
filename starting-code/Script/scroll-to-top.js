

// Show/hide the button based on scroll position
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // Show button after 300px scroll
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Smooth scroll to the top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
