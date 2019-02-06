/**
 * Für Navigation
 */
const nav = document.getElementById('nav');
const header = document.getElementById('header');
const navButton = document.getElementById('nav-button');
const navLinks = document.querySelectorAll('.nav__title');

/**
 * versteckt Navigation und wechselt Headerfarbe in dem Klassen entfernt werden
 */
function hideNav() {
  nav.classList.remove('visible');
  header.classList.remove('dark');
}

/**
 * Zeigt Navigation an und wechselt Headerfarbe mit Klassenwechsel
 */
function toggleNav() {
  nav.classList.toggle('visible');
  header.classList.toggle('dark');
}

/**
 * Versteckt Navigation und Jump zum Anker
 */
function hideNavAndJump (e) {
  hideNav();
  // wenn der angeklickte Tag kein Link ist dann
  if (e.target.localName !== 'a') {
    // gehe zum href vom childNode mit dem Index 0
    window.location.href = e.target.childNodes[0].href;
  }
}

ready(() => {
  /**
   * Navigation anzeigen & Headerfarbe wechseln: EventListener
   */
  navButton.addEventListener('click', toggleNav);
  navLinks.forEach(link => {
    link.addEventListener('click', hideNavAndJump);
  });
});
