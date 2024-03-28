let myArray = [7, 12, 15];
console.log(myArray);

myArray[1];
console.log(myArray[1]);

myArray[2] = 88;
console.log(myArray);

let myArrayZero =[1, {soccerName: 'Leo'}];
console.log(Array.isArray(myArrayZero));


myArrayZero.push(false);
console.log(myArrayZero);

myArrayZero.splice(0, 2);
console.log(myArrayZero);


// Loops

let m = 2;
// While
while (m < 8) {

console.log(m);
m = m + 1;

}

// for
for (let zero = 0; zero < 10; zero++) {
  let soccerPlaye0 = {
    soccerName: 'Leo',
    soccerNumber: 10,
    soccerClub: 'Inter Miami'
  }
  console.log(soccerPlaye0);
}


let randomNum = 0;

while (randomNum < 0.5) {
  randomNum = Math.random();
  console.log(randomNum);
}

// looping through array
const todoList = [
  'make dinner',
  'wash dishes',
  'watch YouTube'
];

for (let index = 0; index <= todoList.length -1; index++) {
let value = todoList[index];
console.log(value);
}

// Calculate array
const array = [2, 8, 9, 0, 10, 33];
let total = 0;
for (i = 0; i < array.length -1; i++) {
  total += array[i];
  console.log(total);
}

// calculate array

const arrayZero = [20, 221, 2113, 22, 90, 102, 2043];

let sum = 0;
for (x = 0; x < arrayZero.length; x++) {
  sum += arrayZero[x];
  document.body.innerHTML = sum;
  // document.body.innerHTML = sum;
}
