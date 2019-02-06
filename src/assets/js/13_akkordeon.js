/**
 * Für Akkordeon
 */
const akkordeonMoreButton = document.querySelectorAll('.akkordeon-item__more');

/**
 * Zeigt den Text des Akkordeons an resp. versteckt ihn
 * und ändert den Text des Buttons entsprechend
 * @param e
 */
function showHideAkkordeonText (e) {
  // weist eine Variable zu für Übersicht
  const textElement = e.target.parentElement.nextElementSibling;
  let buttonText = e.target.innerText;
  // fügt die Klasse 'hide' entweder hinzu oder entfernt sie
  textElement.classList.toggle('hide');
  // wenn der Button Text 'mehr' lautet
  if (buttonText === 'Mehr') {
    // ersetze ihn durch 'weniger'
    e.target.innerText = 'Weniger';
  } else {
    // sonst ersetze ihn durch 'mehr'
    e.target.innerText = 'Mehr';
  }
}

ready(() => {
  akkordeonMoreButton.forEach(button => {
    button.addEventListener('click', showHideAkkordeonText);
  });
});
