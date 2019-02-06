/**
 * Für Buy-Article
 */
const buttonMinus = document.querySelectorAll('.button__minus');
const buttonPlus = document.querySelectorAll('.button__plus');
const basketNumber = document.getElementById('basket-number-total');
let counter;
let counterBasket;

/**
 * wenn der Counter 1 ist wird die Einheit angepasst
 */
function updateUnit (unit) {
  // wenn counter 1
  if (counter === 1) {
    // wird Text auf 'Ticket' angepasst
    unit.innerText = 'Ticket';
  } else {
    // Sonst auf 'Tickets'
    unit.innerText = 'Tickets';
  }
}

/**
 * Zählt die Anzahl Tickets hoch
 * @param e
 */
function addTicket(e) {
  // Setzt eine Variable für die Anzahlanzeige
  const display = e.target.parentNode.children[1];
  const newCount = parseInt(display.innerText);
  const unit = e.target.parentNode.children[2];
  const newBasketNumber = parseInt(basketNumber.innerText);
  // setzt counterBasket auf aktuellen Stand
  counterBasket = newBasketNumber;
  // setzt counter auf den Wert des aktuellen Standes
  counter = newCount;
  // erhöht den Counter um 1
  ++counter;
  // erhöht Warenkorb um 1
  ++counterBasket;
  // und zeigt es an
  basketNumber.innerText = counterBasket.toString();
  display.innerText = counter.toString();
  updateUnit(unit);
}

/**
 * Reduziert die Anzahl Tickets
 * @param e
 */
function removeTicket (e) {
  // Setzt eine Variable für die Anzahlanzeige
  const display = e.target.parentNode.children[1];
  const newCount = parseInt(display.innerText);
  const unit = e.target.parentNode.children[2];
  const newBasketNumber = parseInt(basketNumber.innerText);
  // setzt counterBasket auf aktuellen Stand
  counterBasket = newBasketNumber;
  // setzt counter auf den Wert des aktuellen Standes
  counter = newCount;
  if (counter !== 0) {
    --counter;
    --counterBasket;
    // und zeige es an
    basketNumber.innerText = counterBasket.toString();
    display.innerText = counter.toString();
  }
  updateUnit(unit);
}

ready(() => {
  buttonMinus.forEach(button => {
    button.addEventListener('click', removeTicket);
  });
  buttonPlus.forEach(button => {
    button.addEventListener('click', addTicket);
  });
});
