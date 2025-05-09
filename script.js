const toggleButton = document.querySelector('.menu-toggle');
const menuOverlay = document.getElementById('menu-overlay');
const menuIcon = document.getElementById('menu-icon');

let menuOpen = false;

toggleButton.addEventListener('click', () => {
  menuOpen = !menuOpen;
  menuOverlay.classList.toggle('open');

  // Animate icon rotation
  menuIcon.style.transform = 'rotate(90deg)';
  setTimeout(() => {
    menuIcon.src = menuOpen ? 'Nav_Icon_Open.svg' : 'Nav_Icon_Closed.svg.svg';
    menuIcon.style.transform = 'rotate(0deg)';
  }, 150);
});
