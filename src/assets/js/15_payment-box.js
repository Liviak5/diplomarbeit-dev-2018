/**
 * Für Payment-Box
 */
// Dropdown-Menu
const paymentTypeDropDown = document.getElementById('payment-type-dropdown');
const dropDownChoiceList = document.getElementById('dropdown-choice');
const dropDownIcon = document.getElementById('payments-dropdown-icon');
const dropDownItems = document.querySelectorAll('.dropdown__item');
// select-Boxes
const selectAfter = document.getElementById('payment-select-after');
const iconBoxes = document.querySelectorAll('.payments__icon-box');
const visaBox = document.getElementById('icon-box-visa');
const masterCardBox = document.getElementById('icon-box-master');
const payPalBox = document.getElementById('icon-box-paypal');
// input-fields
const cardIcon = document.getElementById('card-icon');
const cardNumber = document.getElementById('card-number');
const cardValidity = document.getElementById('card-validity');
const cardCvC = document.getElementById('card-cvc');
const cardHolder = document.getElementById('card-holder');
// submit
const submitButton = document.getElementById('payment-submit');

let paymentType = 'visa';

/**
 * Zeigt DropDown-Liste an und ändert das Icon
 */
function showPaymentDropdownChoice () {
  // toggelt bei der ChoiceList die Klasse 'visible'
  dropDownChoiceList.classList.toggle('visible');
  // wenn die ChoiceList die Klasse 'visible' beinhaltet
  if (dropDownChoiceList.classList.contains('visible')) {
    // setze die source auf das dropup-icon
    dropDownIcon.src = '../assets/media/icons/steuerung_dropup.svg';
  } else {
    // sonst setze es auf das dropdown-icon
    dropDownIcon.src = '../assets/media/icons/steuerung_dropdown.svg';
  }
}

/**
 * prüft die Eingabe des Zahlungstyps
 * @param e
 */
function checkPaymentType (e) {
  // wenn den alt-text des gedrückten DOM-Elements
  switch (e.target.alt) {
    // Visa ist
    case 'Visa':
      // dann setze die Werte wiefolgt
      paymentType = 'visa';
      // beende den Code
      break;
    // MasterCard ist
    case 'MasterCard':
      // dann setze die Werte wiefolgt
      paymentType = 'mastercard';
      // beende den Code
      break;
    // Paypal ist
    case 'PayPal':
      // dann setze die Werte wiefolgt
      paymentType = 'paypal';
      // beende den Code
      break;
  }
}

/**
 * Prüft die Gültigkeit der Eingabe
 * @param e
 * @returns {boolean} | ob Input dem Pattern entspricht oder nicht
 */
function checkInput (e) {
  // setzt den Wert von invalid auf false oder true je nach dem ob der RegEx test ok ist oder nicht
  // verglichen werden Value von e.target und der eingegebene pattern von e.target
  const valid = new RegExp(e.pattern).test(e.value);
  return valid;
}

/**
 * Prüft ob alle Input-Felder gültig sind
 * @returns {boolean} | wenn alle Felder gültig dann true | sonst false
 */
function checkAllInputFields () {
  const numberValidity = checkInput(cardNumber);
  const cvcValidity = checkInput(cardCvC);
  const dateValidity = checkInput(cardValidity);
  // wenn alle Eingaben gültig sind gib true zurück
  if (numberValidity && cvcValidity && dateValidity && cardHolder.value !== '') {
    return true;
  }
  // ansonste gib false zurück
  return false;
}

/**
 * passt UI bei Änderung an
 */
function onChangePaymentType () {
  // wenn PaymentType
  switch (paymentType) {
    // Visa ist dann
    case 'visa':
      // setze bei Visa die Klasse Selected
      // entferne bei den anderen die Klasse Selected
      visaBox.classList.add('selected');
      masterCardBox.classList.remove('selected');
      payPalBox.classList.remove('selected');
      // ändere das Zahlungsmittel-Logo bei der Karten-Nummer
      cardIcon.src = '../assets/media/icons/payment_visa.svg';
      cardIcon.alt = 'Visa Logo';
      break;
    case 'mastercard':
      // setze bei MasterCard die Klasse Selected
      // entferne bei den anderen die Klasse Selected
      visaBox.classList.remove('selected');
      masterCardBox.classList.add('selected');
      payPalBox.classList.remove('selected');
      // ändere das Zahlungsmittel-Logo bei der Karten-Nummer
      cardIcon.src = '../assets/media/icons/payment_mastercard.svg';
      cardIcon.alt = 'Mastercard Logo';
      break;
    case 'paypal':
      // setze bei PayPal die Klasse Selected
      // entferne bei den anderen die Klasse Selected
      visaBox.classList.remove('selected');
      masterCardBox.classList.remove('selected');
      payPalBox.classList.add('selected');
      // ändere das Zahlungsmittel-Logo bei der Karten-Nummer
      cardIcon.src = '../assets/media/icons/payment_paypal.svg';
      cardIcon.alt = 'PayPal Logo';
      break;
  }
}

/**
 * Setzt Zahlungstypen auf click auf DropDownItem fest
 * @param e
 */
function selectPaymentType (e) {
  // führt Funktion checkPaymentType aus
  checkPaymentType(e);
  // setzt die selectAfter-Div auf sichtbar
  selectAfter.classList.add('visible');
  // setzt die Dropdown-Div auf unsichtbar
  paymentTypeDropDown.parentElement.classList.remove('visible');
  // führe die Funktion onChange aus
  onChangePaymentType();
}

/**
 * Ändert den Zahlungstyp auf Click auf Select-After-Item
 * @param e
 */
function changePaymentType (e) {
  // führt Funktion checkPaymentType aus
  checkPaymentType(e);
  // führe die Funktion onChange aus
  onChangePaymentType();
}

/**
 * Ändert Button Farbe
 */
function changeSubmitButton (check) {
  // wenn die Prüfung ok wahr dann
  if (check === true) {
    // setze die Klasse ok hinzu
    submitButton.classList.add('ok');
  } else {
    // sonst entferne die Klasse
    submitButton.classList.remove('ok');
  }
}

function onChangeInputField (e) {
  if (e.target.value !== '') {
    e.target.labels[0].classList.add('visible');
  } else {
    e.target.labels[0].classList.remove('visible');
  }
  if (checkAllInputFields()) {
    changeSubmitButton(true);
  } else {
    changeSubmitButton(false);
  }
}

// TODO: ACHTUNG: FOLGENDE 3 ZEILEN MÜSSEN GELÖSCHT WERDEN IN DER LIFE-UMGEBUNG IST NUR FÜR PROTOTYP
function jumpToNextPage () {
  window.location.href = '../content/confirm.html';
}

ready(() => {
  // wenn PaymentTypDropDown da ist
  if (paymentTypeDropDown !== null) {
    // Dann führe die folgenden Eventlistner aus
    paymentTypeDropDown.addEventListener('click', showPaymentDropdownChoice);
    dropDownItems.forEach(type => {
      type.addEventListener('click', selectPaymentType);
    });
    iconBoxes.forEach(type => {
      type.addEventListener('click', changePaymentType);
    });
    cardNumber.addEventListener('keyup', onChangeInputField);
    cardCvC.addEventListener('keyup', onChangeInputField);
    cardValidity.addEventListener('keyup', onChangeInputField);
    cardHolder.addEventListener('keyup', onChangeInputField);
    // TODO: ACHTUNG: FOLGENDER CODE MUSS GELÖSCHT WERDEN IN DER LIFE-UMGEBUNG IST NUR FÜR PROTOTYP
    submitButton.addEventListener('click', jumpToNextPage);
  }
});
