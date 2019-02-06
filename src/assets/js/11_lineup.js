/**
 * Für LineUp
 */
const dayButton = document.getElementById('day-button');
const dayList = document.getElementById('day-list');
const day = document.querySelectorAll('.line-up__day-item');
const icon = document.getElementById('line-up-dropdown-icon');

/**
 * In der Mobil-Version wird dayList angezeigt resp. versteckt
 */
function showLineUpDays() {
  if (window.mobilecheck() === true) {
    dayList.classList.toggle('visible');
    // wenn die Klasse Visible gesetzt ist
    if (dayList.classList.contains('visible')) {
      // zeige das dropup icon
      icon.src = '../assets/media/icons/steuerung_dropup_fff.svg';
    } else {
      // sonst das dropdown icon
      icon.src = '../assets/media/icons/steuerung_dropdown_fff.svg';
    }
  }
}

/**
 * Ersetzt Text im Button mit ausgewähltem Tag nur in der Mobile-Version
 * @param e
 */
function chooseDay(e) {
  if (window.mobilecheck() === true) {
    dayButton.childNodes[1].childNodes[1].innerText = e.target.innerText;
  }
}

ready(() => {
    if (dayButton !== null) {
      dayButton.addEventListener('click', showLineUpDays);
      day.forEach(day => {
        day.addEventListener('click', chooseDay);
      });
    }
  }
);
