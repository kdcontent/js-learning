// Booleans and If statements

// true -> first boolean value
// false -> second boolean value
// == -> converts values to the same value\
// ===
// && -> logical operator: 'and'
// || -> logical operator: 'or'
// ! -> logical operator: 'not'

// Practical example of boolean and if statements

let age = 10;
let drivingAge = 18;


if (age > drivingAge) {
  document.write("You are old enough to drive or posses a car!");
} else {
  document.write("You are not old enough to drive or posses a car!");
}
// Hour of the day

let hour = 10;

const userName = 'Abdulboriy';

if (hour >= 6 && hour < 13 ) {
  console.log('Good morning, ' + userName + '!');
  alert('Good morning, ' + userName + '!');
} else if ( hour >=13 && hour < 18) {
  console.log('Good afternoon, ' + userName + '!');
  alert('Good afternoon, ' + userName + '!');
} else {
  console.log('Good night,' + userName + '!');
  alert('Good night, ' + userName + '!');
}


// Discount age checker with '||' logical operator

let discountAge = 4;
const isHoliday = false;

if (discountAge > 65 || discountAge < 6 && !isHoliday) {
  console.log('You get 50% discount!');
  alert('You get 50% discount');
} else {
  console.log('You do not get any discount');
  alert('You do not get any discount!');
}


// Flipping card

let randomCoin = Math.random();
let result = '';
let guess = 'Heads';




if (randomCoin < 0.5) {
  result = 'Heads';
} else {
  result = 'Tails';
}
if (guess === result) {
  result = 'You win!';
} else {
  result = 'You lost!';

}
document.write(result);


//ternary operator version of flipping card

let randomCoin = Math.random();
let guess = 'Heads';

let result = randomCoin < 0.5 ? 'Heads' : 'Tails';

result = guess === result ? 'You win!' : 'You lost!';

document.write(result);
