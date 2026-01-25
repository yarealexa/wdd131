// Get the menu button and nav element
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

// Add click event listener
menuBtn.addEventListener('click', () => {
  // Toggle the 'active' class on nav
  nav.classList.toggle('active');
  
  // Optional: Animate hamburger to X
  menuBtn.classList.toggle('active');
});
