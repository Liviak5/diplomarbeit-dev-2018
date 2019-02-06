/**
 * Für Sort-Bar
 */
const kantonSelectButton = document.getElementById('kanton-button');
const kantonChoiceItem = document.querySelectorAll('.kanton-choice__item');
const kantonChoiceList = document.getElementById('kanton-choice-list');
const sortByDate = document.getElementById('sort-by-date');
const sortByDateButton = document.getElementById('sort-date-button');
const buttonViewList = document.getElementById('mode-list');
const buttonViewkachel = document.getElementById('mode-kachel');
const overviewWrapper = document.getElementById('festivaloverview');

/**
 * Ändert das icon des SortByDate-Buttons
 */
function toggleSortByDate () {
  // wenn der Button die Klasse 'up' enthält
  if (sortByDateButton.classList.contains('up')) {
    // dann entferne die Klasse 'up'
    sortByDateButton.classList.remove('up');
    // und füge die Klasse 'down' hinzu
    sortByDateButton.classList.add('down');
    // wenn der Button die Klasse 'down' enthält
  } else if (sortByDateButton.classList.contains('down')) {
    // entferne die Klasse 'down'
    sortByDateButton.classList.remove('down');
  } else {
    // trifft alles bisherige nicht zu füge die Klasse 'up' hinzu
    sortByDateButton.classList.add('up');
  }
}

/**
 * zeigt Kantonsliste an
 */
function showKantonChoiceList () {
  kantonChoiceList.classList.add('visible');
}

/**
 * versteckt Kantonsliste
 */
function hideKantonChoiceList() {
  kantonChoiceList.classList.remove('visible');
}

/**
 * toggle Kantonsliste
 */
function toggleKantonChoiceList() {
  if (kantonChoiceList.classList.contains('visible')) {
    hideKantonChoiceList();
  } else {
    showKantonChoiceList();
  }
}

/**
 * setzt den Text der Kantonsauswahl auf den ausgewählten Kanton und versteckt die Übersichtsliste wieder
 * @param e
 */
function addSelection(e) {
  kantonSelectButton.innerText = e.target.value;
  hideKantonChoiceList();
}

/**
 * setzt Klasse auf Wrapper und Button für Listenansicht und entfernt Klassen für Kachelansicht
 */
function viewList() {
  overviewWrapper.classList.add('list');
  buttonViewList.classList.add('selected');
  overviewWrapper.classList.remove('kacheln');
  buttonViewkachel.classList.remove('selected');
}

/**
 * setzt Klasse auf Wrapper und Button für Kachel und entfernt Klassen für Listenansicht
 */
function viewKachel() {
  overviewWrapper.classList.add('kacheln');
  buttonViewList.classList.remove('selected');
  overviewWrapper.classList.remove('list');
  buttonViewkachel.classList.add('selected');
}

ready(() => {
  // Prüfe ob der kantonSelectButton da ist, wenn ja
  if (kantonSelectButton !== null) {
    // dann führe folgende EventListener aus
    kantonSelectButton.addEventListener('click', toggleKantonChoiceList);
    kantonChoiceItem.forEach(item => {
      item.addEventListener('click', addSelection);
    });
    sortByDate.addEventListener('click', toggleSortByDate);
    buttonViewList.addEventListener('click', viewList);
    buttonViewkachel.addEventListener('click', viewKachel);
  }
});
