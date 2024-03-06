console.log(3 < 6);
// console.log('five' = 5);
console.log('five' == 5);
console.log('five' === 'five');



if (3 >= 4) {
  console.log('200');
} else {
  console.log('404');
}
// Driving age checker
let ageDrive = 20;

if (ageDrive >= 18) {
  console.log('You can drive.');
} else if (ageDrive >= 14) {
  console.log('Almost there!');
}
 else {
  console.log('You can not drive');
}


// Marriage proposal
let marriageProposal = 'yes';
if (marriageProposal === 'yes') {
  console.log(`She said ${marriageProposal}. I will marry her`);
} else if (marriageProposal === 'no') {
  console.log(`She said ${marriageProposal}. I will break up with her`);
} else {
  console.log(`Let's continue current relationship.`);
}
// logical operators &&, ||
let randomNumber = 1;


if (randomNumber > 0 && randomNumber < 2) {
  console.log('200');
} else {
  console.log('404');
}


// Election
let randomVariable = 'Let\'s make America great again!';
if (randomVariable === 'Trump' ||  randomVariable === 'Let\'s make America great again!') {
  console.log('Go!');
} else if (randomVariable === 'Biden' || randomVariable === 'Chocolate Ice cream') {
  console.log('You are Bidenist!')
}
else {
  console.log('You do not have interest in politics!');
}

// Hour of the day

let hourOftheDay = 19;
if (hourOftheDay > 6 && hourOftheDay < 13) {
  console.log('Good morning!');
} else if (hourOftheDay > 13 && hourOftheDay < 16) {
  console.log('Good afternoon!');
} else if (hourOftheDay > 16 && hourOftheDay < 22) {
  console.log('Good evening!');
} else if (hourOftheDay > 22 || hourOftheDay < 6) {
  console.log('Good night!');
}


// Park
age = 4;
isHoliday = true;

if (age > 65 || age < 6 && !isHoliday) {
  console.log('You get discount!');
} else {
  console.log('You do not get discount!');
}



// heads and tails
random = Math.random();
result = random;
guess = 'Tails';
if (result < 0.5) {
  console.log(result = 'Heads');
} else {
  console.log(result = 'Tails');
}
if (guess === result) {
  console.log('You win.');
} else {
  console.log('You lost');
}

// All comments related to code are here:
// in the 2nd line I tried to compare to different values which are basically true but one is string, other is number;
// it gave back false since i used '='
// it needs to be double '=='
//  logical operators: &&
// logical operators: ||