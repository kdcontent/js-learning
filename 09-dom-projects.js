const buttonElement = document.querySelector('.js-subscribe-button');

function isSubscribe() {
  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerText = 'Subscribed';
  } else {
    buttonElement.innerText = 'Subscribe';
  }
}

// Amazon Calculator


function handleCost() {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
const inputElement = document.querySelector('#js-input');
let cost = Number(inputElement.value);
if (cost < 40) {
  cost = cost + 10;
}

document.querySelector('.js-total-cost').innerHTML = `$${cost}`

}


console.log(document.querySelector('.js-button-nine'));


document.querySelector('.js-button-nineb').innerHTML = '9b done!';

function nameOutPut() {
  const name = document.querySelector('.name-input').value;
  document.querySelector('.js-input-text').innerHTML = `Your name is ${name}`;

}

// calculator
function caclulate() {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateZero() {
const inputElement = document.querySelector('#js-calculate');
// converting numbers to cents
let cost = Number(inputElement.value) * 100;
if (cost < 4000) {
  cost = cost + 1000;
}

document.querySelector('.js-total').innerHTML = `$${cost / 100}` // back to dollar

}