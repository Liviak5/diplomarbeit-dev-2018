/**
 * Für News
 */
const allNewsPosts = document.getElementsByClassName('news__post-wrapper');
const gridNews = document.getElementsByClassName('news__posts')[0];
const singleNewsPostClass = '.news-post';
const newsMore = document.getElementById('news-more');

/**
 *Für Masonry by andybarefoot
 */
function resizeInstance(instance) {
  const item = instance.elements[0];
  resizeAllGridItems(item, gridNews, singleNewsPostClass);
}
for (let x = 0; x < allNewsPosts.length; x++) {
  imagesLoaded(allNewsPosts[x], resizeInstance);
}
window.onload = resizeAllGridItems(allNewsPosts, gridNews, singleNewsPostClass);
window.addEventListener('resize', resizeAllGridItems(allNewsPosts, gridNews, singleNewsPostClass));

/**
 * News beiträge toggle
 */
function showHideNewsPosts() {
  // wenn der 7. Beitrag die Klasse 'hide' hat
  if (allNewsPosts[9].classList.contains('hide')) {
    // dann führe die Funktion 'showAllMagazinPosts' aus
    showAllItems(allNewsPosts, newsMore);
  } else {
    // sonst führe die Funktion 'hideMagazinPosts' aus
    hideItems(allNewsPosts, 8, newsMore);
  }
}

ready(() => {
    // prüft ob Button da ist wenn ja dann
    if (newsMore !== null) {
      // führe folgende Codes aus
      /**
       * Newsbeiträge anzeigen beschränken
       */
      hideItems(allNewsPosts, 8, newsMore);
      /**
       * Newsbeiträge alle anzeigen bei Mausklick auf "Mehr anzeigen": EventListener
       */
      newsMore.addEventListener('click', showHideNewsPosts);
    };
  }
);
