/**
 * Audio Trackplayer
 */
const trackButton = document.querySelectorAll('.discover__track-button');

/**
 * spielt den aktuellen Track ab
 * @param e ist Mausevent
 */
function playStopAudio (e) {
  // wählt den Track aus über e.target
  const track = e.target.parentElement.previousElementSibling;
  // wählt den Display-div aus
  const trackDisplay = e.target.parentElement;
  // wenn track pausiert ist
  if (track.paused) {
    // dann spiele track
    track.play();
    // und füge die Klasse 'play' zum Display-Div hinzu.
    trackDisplay.classList.add('play');
  } else {
    // sonst pausiere track
    track.pause();
    // und entferne die Klasse 'play' vom Display-Div
    trackDisplay.classList.remove('play');
  }
}

ready(() => {
  trackButton.forEach(button => {
    button.addEventListener('click', playStopAudio);
  });
});
