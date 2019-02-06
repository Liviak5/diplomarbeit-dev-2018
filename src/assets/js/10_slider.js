/**
 * für Slider - selbst kontsruiert
 */

const buttonPre = document.getElementById('button-pre');
const buttonNext = document.getElementById('button-next');
const slides = document.querySelectorAll('.slider__item');
const dotContainer = document.getElementById('dots');

let actualSlideID = 0;
let swipeStartPoint;

/**
 * initialisiert die Dots
 */
function dotsInit () {
  // Für jeden Slide
  let i = 0;
  slides.forEach(item => {
    // erstelle ein Dot-Element
    let dot = document.createElement('button');
    // mit der Klasse 'slide-item__dot'
    dot.classList = 'slide-item__dot';
    if (i === 0) {
      dot.classList.add('selected');
    };
    dot.id = i;
    // und füge es dem DotContainer als Child hinzu
    dotContainer.appendChild(dot);
    i++;
  });
  const dots = document.querySelectorAll('.slide-item__dot');
  dots.forEach(dot => {
    dot.addEventListener('click', showSlideByIndex);
  });
}

/**
 * Neutralisiert alle Slides und die dazugehörigen Dots
 */
function neutralizeSlides () {
  const dots = document.querySelectorAll('.slide-item__dot');
  // entfert alle Zusatzklassen von den Slides
  slides.forEach(item => {
    item.classList.remove('left');
    item.classList.remove('right');
    item.classList.remove('selected');
    item.classList.remove('next');
    item.classList.remove('pre');
    item.classList.remove('old');
  });
  // jedem Dot wird die Klasse 'selected' entfernt
  dots.forEach(dot => {
    dot.classList.remove('selected');
  });
}

/**
 * Zeigt Slide mittels auswählen des Buttons
 * @param e
 */
function showSlideByIndex (e) {
  const dots = document.querySelectorAll('.slide-item__dot');
  dots.forEach(dot => {
    dot.classList.remove('selected');
  });
  e.target.classList.add('selected');
  // jedem Item wird die Klasse 'left' hinzugefügt und die Klasse 'right' entfernt
  slides.forEach(item => {
    item.classList.remove('right');
    item.classList.remove('left');
    // wenn aktuelle SlideID kleiner als id des ausgewählten Buttons
    if (actualSlideID < e.target.id) {
      // dann setze Klass 'left'
      item.classList.add('left');
    } else {
      item.classList.add('right');
    }
    // setzt selected auf neutral
    item.classList.remove('selected');
  });
  // setzt dem entsprechenden Slide die Klasse 'selected' hinzu
  slides[e.target.id].classList.add('selected');
  // der aktuellen SlideID wird die ID des Buttons zugewiesen
  actualSlideID = e.target.id;
}

/**
 * Slidet zum nächsten Bild
 */
function slideNext () {
  neutralizeSlides();
  const dots = document.querySelectorAll('.slide-item__dot');
  // wenn ID gleich slides-array-länge -1 dann
  // Achtung muss String mit Nummer vergleichen, darum nicht ===
  if (actualSlideID == slides.length - 1) {
    // setze ID auf 0
    actualSlideID = 0;
    // sonst
  } else {
    // erhöhe die ID um 1
    actualSlideID++;
  }
  previewNext();
  // dem Slide mit der aktuellen ID füge die Klasse 'selected' hinzu
  slides[actualSlideID].classList.add('right');
  slides[actualSlideID].classList.add('selected');
  dots[actualSlideID].classList.add('selected');
}

/**
 * zeigt eine Vorschau des nächsten Bildes an
 */
function previewNext () {
  // wenn die aktuelle SlideID dem letzten Slide entspricht
  if (actualSlideID == slides.length - 1) {
    // Dann setzte die Klassen 'next' auf den Slide mit dem Index 0
    slides[0].classList.toggle('next');
    // sonst setze die Klasse auf den Slide mit dem um 1 grösseren Index
  } else {
    slides[actualSlideID + 1].classList.toggle('next');
  }
}

/**
 * Slidet zum letzten Bild
 */
function slidePre () {
  neutralizeSlides();
  const dots = document.querySelectorAll('.slide-item__dot');
  // wenn ID 0 dann
  // ACHTUNG muss String mit Nummer vergleichen darum nicht ===
  if (actualSlideID == 0) {
    // setze ID auf slides-array-länge -1
    actualSlideID = slides.length - 1;
    // sonst
  } else {
    // verringere die ID um 1
    --actualSlideID;
  }
  previewPre();
  // dem Slide mit der aktuellen ID füge die Klasse 'selected' hinzu
  slides[actualSlideID].classList.add('left');
  slides[actualSlideID].classList.add('selected');
  dots[actualSlideID].classList.add('selected');
}

/**
 * zeigt eine Vorschau des letzten Bildes an
 */
function previewPre () {
  // wenn die aktuelle SlideID dem ersten Slide entspricht
  if (actualSlideID == 0) {
    // Dann setzte die Klassen 'pre' auf den Slide mit dem Index des letzen Slides
    slides[slides.length - 1].classList.toggle('pre');
    // sonst setze die Klasse auf den Slide mit dem um 1 kleineren Index
  } else {
    slides[actualSlideID - 1].classList.toggle('pre');
  }
}

/**
 * Legt den Startpunkt des Swipes fest
 * @param e
 * @returns {number | Standpunkt von Swipe Start*}
 */
function swipeStart (e) {
  if (window.mobilecheck() === true) {
    swipeStartPoint = e.changedTouches[0].clientX;
  }
  return swipeStartPoint;
}
/**
 * Errechnet die Differenz zwischen Start- und Endpunkt des Swipes und führt je nach dem die eine oder andere Funktion aus
 * @param e
 */
function swipeHandle (e) {
  if (window.mobilecheck() === true) {
    // Legt den Endpunkt des Swipes fest
    const swipeEndPoint = e.changedTouches[0].clientX;
    // errechnet die Differenz zwischen den beiden Punkten
    const diff = swipeStartPoint - swipeEndPoint;
    // ist sie positiv
    if (diff > 0) {
      // wird die Funktion slideNext ausgeführt
      slideNext();
      // sonst die Funktion sliedPre
    } else {
      slidePre();
    }
    // setzt den Startpunkt auf Null zurück
    swipeStartPoint = null;
  }
}

ready(() => {
  // prüft ob Button da ist wenn ja dann
  if (buttonNext !== null) {
    dotsInit();
    // führe folgende Codes aus
    buttonNext.addEventListener('click', slideNext);
    buttonNext.addEventListener('mouseover', previewNext);
    buttonNext.addEventListener('mouseout', previewNext);
    buttonPre.addEventListener('click', slidePre);
    buttonPre.addEventListener('mouseover', previewPre);
    buttonPre.addEventListener('mouseout', previewPre);
    document.addEventListener('touchstart', swipeStart);
    document.addEventListener('touchend', swipeHandle);
  }
}
);
