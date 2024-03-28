// Change last value
let arrayZero = [10, 20, 30];
arrayZero[2] = 99;
console.log(arrayZero[2]);


// get last value
function getLastValue(closing) {
  const lastValue = closing.length -1;
  return closing[lastValue];
}
console.log(getLastValue([1, 21, 233]))
// swapped

function arraySwitch(x) {
  const lastI = x.length -1;

  const lastV = x[lastI];
  const firstV = x[0];


  x[0] = lastV;
  x[lastI] = firstV;
  return x;

}
console.log(arraySwitch([1, 221, 212, 382, 9902, 2343]));

// switched
function switchArray(words) {
  const lastWord = words.length -1;

  const lastValue = words[lastWord];
  const firstValue = words[0];

  words[0] = lastValue;
  words[lastWord] = firstValue;
  return words;

}

console.log(switchArray(['Slim Shady!', 'name', 'is', 'Hi']))

// switched


function hiphopRank(rapper) {
  const worstRapper = rapper.length -1;

  const lastRapper = rapper[worstRapper];
  const bestRapper = rapper[0];

  rapper[0] = lastRapper;
  rapper[worstRapper] = bestRapper;

  return rapper;

}
console.log(hiphopRank(['Konsta', 'Kendrick Lamar', 'NF', '50 cent', 'EM']));



// switch

function sayMyName(nameMy) {
  const myName = nameMy.length -1;

  const lastName = nameMy[myName];
  const firstName = nameMy[0];

  nameMy[0] = lastName;
  nameMy[myName] = firstName;
  return nameMy;
}

console.log(sayMyName(['Thomas Shelby', 'Leo Messi', 'Robert Oppenheimer', 'Steve Jobs', 'Elon Musk', 'Amir Temur', 'Mirzo Ulugbek', 'Khorezmi']));

// loop

for (let x = 0; x <= 10; x+=2) {
console.log(x);
}

// loop down to 0

for (let y = 5; y !== 0; y--) {
console.log(y);
}
// using while

let q = 5;
while (q !== 0) {

  console.log(q);
  q--;

}

let arrayX = [1, 2, 3, 4];
let result = [];
for (let w = 0; w < arrayX.length; w++) {
    result.push(arrayX[w] +1);
}
console.log(result);



// min and max

function minMax(nums) {

  const result = {
    min: nums[0],
    max: nums[0]
  };

  for (let x = 0; x < nums.length; x++) {
    const value = nums[x];

    if (value < result.min) {
      result.min = value;
    }
    if (value > result.max) {
      result.max = value;
    }
  }


  return result;
}
console.log(minMax([1, 3, 4, 5]))




//  minmax
function minMaxZero(number) {

  const result = {
    min: number[0],
    max: number[0]
  };

  for (t = 0; t < number.length; t++) {
    let value = number[t];

    if (value < result.min) {
      result.min = value;
    }
    if (value > result.max) {
      result.max = value;
    }
  }
  return result;
}
console.log(minMaxZero([1, 7, 10, 15, 22, 30]));


// word count

function countWords(words) {
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // result[word] adds/accesses a property using whatever is
    // saved inside the 'word' variable.
    // If word = 'apple', result[word] will do result['apple']
    // If word = 'grape', result[word] will do result['grape']
    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }

  return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));



// count string


function countName(userName) {
let finalResult = {};

for (a = 0; a < userName.length; a++) {
  const name = userName[a];

if (!finalResult[name]) {
  finalResult[name] = 1;
} else {
  finalResult[name]++;
}

}
 return finalResult;

}
console.log(countName(['Leo', 'Xavi', 'Gavi', 'Pau', 'Leo' , 'Leo', 'Gavi']))


// count string

function countFruits(fruitName) {
  const finalFruits = {};

  for (f = 0; f < fruitName.length; f++) {
    let nameFruit = fruitName[f];

    if (!finalFruits[nameFruit]) {
      finalFruits[nameFruit] = 1;
    } else {
      finalFruits[nameFruit]++;
    }

  }
  return finalFruits;
}
console.log(countFruits(['apple', 'banana', 'apple', 'apricot', 'lemon', 'mandarin', 'grape']));











// return
function getResult(goals, assists) {
  return(goals / assists);
}
let gaStats = getResult(30, 13);
console.log(gaStats);


// return
function soccerName() {
  soccerPlayer = {
    nameSoccer: 'Yamal',
    playerNumber: 27,
    playerCountry: 'Spain'
  }
  return (soccerPlayer);
}
let x = soccerName();
console.log(x);

// return

function ageRestriction(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}
let z = ageRestriction(16);
console.log(z);