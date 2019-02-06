/**
 * Für Magazin
 */
const allMagazinPosts = document.getElementsByClassName('magazin__post-wrapper');
const gridMagazin = document.getElementsByClassName('magazin__posts')[0];
const singleMagazinPostClass = '.magazin-post';
const magazinMore = document.getElementById('magazin-more');
const read = document.querySelectorAll('.magazin__post-lesen');

/**
 *Für Masonry by andybarefoot
 */
function resizeInstance(instance) {
  const item = instance.elements[0];
  resizeGridItem(item, gridMagazin, singleMagazinPostClass);
}

for (let x = 0; x < allMagazinPosts.length; x++) {
  imagesLoaded(allMagazinPosts[x], resizeInstance);
}
window.onload = resizeAllGridItems(allMagazinPosts, gridMagazin, singleMagazinPostClass);
window.addEventListener('resize', resizeAllGridItems(allMagazinPosts, gridMagazin, singleMagazinPostClass));
/**
 * Magazin beiträge toggle
 */
function showHideMagazinPosts() {
  // wenn der 7. Beitrag die Klasse 'hide' hat
  if (allMagazinPosts[6].classList.contains('hide')) {
    // dann führe die Funktion 'showAllMagazinPosts' aus
    showAllItems(allMagazinPosts, magazinMore);
  } else {
    // sonst führe die Funktion 'hideMagazinPosts' aus
    hideItems(allMagazinPosts, 5, magazinMore);
  }
}

/**
 * Beim Click auf Lesen wird der Text angezeigt und der Lesen-Button verschwindet
 * Zum zeigen, dass es auch so ginge, allerdings finde ich die Variante mit den Klassen schöner
 * @param e
 */
function showPost(e) {
  // setzt text auf Display inline-block
  e.target.previousElementSibling.style.display = 'inline-block';
  // setzt Button auf Display none
  e.target.style.display = 'none';
}

ready(() => {
  if (magazinMore !== null) {
    /**
     * Magazinbeiträge anzeigen beschränken
     */
    hideItems(allMagazinPosts, 5, magazinMore);

    /**
     * Magazinbeiträge alle anzeigen bei Mausklick auf "Mehr anzeigen": EventListener
     */
    magazinMore.addEventListener('click', showHideMagazinPosts);
  }
  /**
   * Event für Post anzeigen wird ausgelöst
   */
  read.forEach(buttonLesen => {
    buttonLesen.addEventListener('click', showPost);
  });
});
