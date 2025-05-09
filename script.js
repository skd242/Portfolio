const toggleButton = document.querySelector('.menu-toggle');
const menuOverlay = document.getElementById('menu-overlay');
const menuIcon = document.getElementById('menu-icon');

let menuOpen = false;

toggleButton.addEventListener('click', () => {
  menuOpen = !menuOpen;
  menuOverlay.classList.toggle('open');

  // Rotate the icon briefly for animation effect
  menuIcon.style.transform = 'rotate(45deg)';
  setTimeout(() => {
    menuIcon.src = menuOpen ? 'Nav_Icon_Open.svg' : 'Nav_Icon_Closed.svg';
    menuIcon.style.transform = 'rotate(0deg)';
  }, 200);
});
