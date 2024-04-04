let iArray = [10, 12, 14];
console.log(iArray);
console.log(iArray[2]);


let mixedArray = [1, 'hello new world', true, myObject = {
  objectName: 'kendrick',
  objectYear: '1987'
}]

let arrayZero = [12, 2, 22, 'Hip-Hop', 'Rapping', {coffeeName: 'americano', coffeePrice: '3$'} ]
console.log(mixedArray[3]);

let arrayOne = ['Tesla', 'Rolls Royce', 'MB', 'BMW']

console.log(Array.isArray([1, 20, 40]));

console.log(iArray.length);
console.log(mixedArray.length);

mixedArray.push({objectJob: 'rapper'});
console.log(mixedArray);

arrayZero.push('One hundred zero');
console.log(arrayZero);

arrayOne.push('KIA');
console.log(arrayOne);

arrayOne.splice(1, 3);
console.log(arrayOne);


// loops
let x = 2;

while (x < 10) {
  document.body.innerHTML = x;
  x ++;
}

let y = 3;
while(y < 15) {
  console.log('This code is looping!');
  y += 3;
}

let q = 5;
while(q < 10) {
  console.log('Looping!');
  q += 2;
}

let z = 2;
while(z < 20) {
  console.log('Looping');
  z += 2;
}

for (xy = 12; xy < 64; xy += 5) {
  console.log('For looping!')
}

const todoList = ['play soccer', 'make cash', 'watch YouTube', 'listen to music'];

for (i = 0; i < todoList.length; i++) {
  const value = todoList[i];
  console.log(value);
}

// calculate values of array
const nums = [2001, 2121, 2354];
let total = 0;
for (let xz = 0; xz < nums.length; xz++) {
  const number = nums[xz];
  total += number;

}
console.log(total);

// doubled
const doubledNumber = [];

for (b = 0; b < nums.length; b++) {
  const number = nums[b];
  doubledNumber.push(number * 2);
}
console.log(doubledNumber);

const string = ['Hi ', 'my name is ', 'Slim shady'];
let totalResult = '';

for (t = 0; t < string.length; t++) {
  const text = string[t];
  totalResult += text;
}
console.log(totalResult);


const age = ['I ', 'am ', 10, ' years old!'];
let ageResult = '';

for (a = 0; a < age.length; a++) {
  const ageText = age[a];
  ageResult += ageText;
}
console.log(ageResult);

// slice

arrayZero = [1, 2, 3];
arrayOne = arrayZero.slice();

arrayOne.push('hello new world');
console.log(arrayZero);
console.log(arrayOne);

// destructuring

const [firstValue, secondValue] = ['hello', 'new', 'world', '!'];
console.log(firstValue);

// Loops: break and continue
for (zx = 0; zx <= 10; zx++) {
   if (zx % 3 === 0) {
    continue;
   }
   console.log(zx);
  //  if (zx === 9) {
  //   break;
  //  }
}
function doubleNum(num) {
const doubledNum = [];

for (b = 0; b < num.length; b++) {
  const number = num[b];
  if (number === 0) {
    return doubledNum;
  }

  doubledNum.push(number * 2);
}
return doubledNum;
}
console.log(doubleNum([12, 15, 0, 17]));