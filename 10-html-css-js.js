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
if (cost < 0) {
  document.querySelector('.js-total-cost').innerHTML = `Error: cost can't be less than $0.`;

} else if (cost < 40) {
  cost = cost + 10;
  document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
}


}

// Toggle button
const switchButton = document.querySelector('.js-switch-button');

function switchButtonZero() {
if (!switchButton.classList.contains('switched-button')) {
  switchButton.classList.add('switched-button');
} else {
  switchButton.classList.remove('switched-button');
}
}

// three buttons
function isThreeButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('three-switched-button')) {

    turnOffButton();
    button.classList.add('three-switched-button');
  } else {
    button.classList.remove('three-switched-button');
  }
}

function turnOffButton() {
const turnOff = document.querySelector('.three-switched-button');

if (turnOff) {
  turnOff.classList.remove('three-switched-button');
}

}

// Calculator
let calculator = localStorage.getItem('calculate');
function calculate(value) {
  calculator+=value;

  setCalculator();
  localStorage.setItem('calculate', calculator);
}
function setCalculator() {
  document.querySelector('.js-calculator').innerHTML = calculator;
}