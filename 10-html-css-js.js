const buttonElement = document.querySelector('.js-subscribe-button');

function isSubscribe() {
  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerText = 'Subscribed';
    buttonElement.classList.add('isSubscribed');
  } else {
    buttonElement.innerText = 'Subscribe';
    buttonElement.classList.remove('isSubscribed');
  }
}

// Amazon Calculator


function handleCost() {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
const inputElement = document.querySelector('.js-input');
let cost = Number(inputElement.value);
if (cost < 40) {
  cost = cost + 10;
}
document.querySelector('.js-total-cost').innerHTML = `$${cost}`
}
