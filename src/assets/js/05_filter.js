/**
 * Filter
 */
const allGenreButton = document.querySelectorAll('.filter__genre-button');
const filterMore = document.getElementById('filter-more');
const showFilters = document.getElementById('filter-show');

/**
 * Zeige die Filter an per Mausklick auf den Anzeigebutton
 * @param e
 */
function showFilterButtonsMobile(e) {
  // wähle den Container mit den Filtern aus und setze die Klasse 'visible' hinzu
  e.target.nextElementSibling.classList.add('visible');
  // wähle den 'mehr Filter'-Button aus und setze die Klasse 'visible' hinzu
  filterMore.classList.add('visible');
  // wähle den Anzeige-Button aus und setze die Klasse 'hide' hinzu
  showFilters.classList.add('hide');
}

/**
 * Toggle Hide-Klasse bei Filter
 */
function showHideFilterButtons () {
  // wenn der 6. Filter die Klasse 'hide' hat
  if (allGenreButton[5].classList.contains('hide')) {
    // rufe die Funktion 'showAllFilterButtons' auf
    showAllItems(allGenreButton, filterMore);
    // sonst rufe die Funktion 'hideFilterButtons' auf
  } else {
    hideItems(allGenreButton, 4, filterMore);
  }
}

ready(() => {
  // Prüfe od FilterMore da ist, wenn ja dann
  if (filterMore !== null) {
    /**
     * Filter anzeigen beschränken
     */
    hideItems(allGenreButton, 4, filterMore);
    /**
     * Filter alle anzeigen bei Mausklick auf "Mehr anzeigen": EventListener
     */
    filterMore.addEventListener('click', showHideFilterButtons);
    /**
     * Event auf den Anzeige-Button in der Mobile-Ansicht
     */
    showFilters.addEventListener('click', showFilterButtonsMobile);
  }
});
