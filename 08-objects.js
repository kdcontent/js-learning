/*
let soccerPlayer0 = {
name: 'Messi',
club: 'Inter Miami',
age: 36,
shirtNumber: 10,
stats: {
  goals: 5,
  assists: 8
},
fun: function myFunction() {
console.log('Lionel Messi');
}
};

let soccerPlayer1 = {
  name: 'Ronaldo',
  club: 'An Nasr',
  age: 38,
  shirtNumber: 7,
  stats: {
    goals: 20,
    assists: 3
  },
  fun: function myFunction1() {
    console.log('Cristiano Ronaldo');
  }
};

let soccerPlayer3 = {
  name: 'Neymar',
  club: 'Al Hilol',
  age: 34,
  shirtNumber: 10,
  stats: {
    goals: 4,
    assists: 2
  },
  fun: function myFunction2() {
    console.log('Neymar JR');
  }
}



soccerPlayer1.club = 'Manchester United'; // -> we can property outside of object
soccerPlayer0.ballondors = 8;
soccerPlayer1.ballondors = 5;
delete soccerPlayer0.ballondors; // we can delete property from outside of object ->


console.log(soccerPlayer0.name);
console.log(soccerPlayer1.name);
console.log(soccerPlayer1.club);
console.log(soccerPlayer0);
console.log(soccerPlayer1);
console.log(soccerPlayer3['name']);
console.log(soccerPlayer1.name, soccerPlayer1.stats);
soccerPlayer0.fun();
soccerPlayer1.fun();
soccerPlayer3.fun();

console.log(JSON.stringify(soccerPlayer0));
*/
console.log('Messi'.length);
console.log('Messi'.toLowerCase());


const player = {
  namePlayer: 'Lionel Messi'
};


const { namePlayer } = player;
console.log(namePlayer);
// Here, property name and variable name should be same


const basketballProduct = {
  name: 'Basketball',
  price: '2095',
  size: 'Large'
}
console.log(basketballProduct);

basketballProduct.price = 2950;
console.log(basketballProduct.price);

basketballProduct['delivery time'] ='3 days';

// Compare products
let player1 = {
  namePlayer: 'Lionel Messi',
  goals: '825',
  ballondors: '8'
}
let player2 = {
  namePlayer: 'Cristiano Ronaldo',
  goals: '877',
  ballondors: '5'
}
function comparePlayer() {
  if (player1.goals > player2.goals) {
    console.log(`${player1.namePlayer} has more goals than ${player2.namePlayer}`);
  } else if (player2.goals > player1.goals) {
    console.log(`${player2.namePlayer} has more goals than ${player1.namePlayer}`);
  }
}
comparePlayer();

// Artist

let artist1 = {
  artistName: 'Kendrick Lamar',
  artistYear: '1987',
  artistSongs: 'Fear, M.a.a.d city, Family Ties, Money Trees, Count me Out, N95, Rich spirit',
  artistAwards: 'Grammy Award for Best Rap Album, Pulitzer Prize in Music',

}
console.log(artist1);


// Planets
let planet0 = {
  planetName: 'Mercury',
  planetSize: '74,797,000 km2',
  planetNumber: '1',
  planetLife: 'false'
}
let planet1 = {
  planetName: 'Earth',
  planetSize: '510,100,000km²',
  planetNumber: '3',
  planetLife: true
}
let planet2 = {
  planetName: 'Mars',
  planetSize: '144,400,000km²',
  planetNumber: '4',
  planetLife: false
}
function isThereLife() {
  if (planet0.planetLife === 'true') {
    console.log( `There is life on ${planet0.planetName}!`);
  } else if (planet0.planetLife === 'false') {
    console.log(`There is no proof that there is life on ${planet0.planetName}`);
  }
}
isThereLife();


// isSameProduct

let productOne = {
  name: 'Banana',
  price: '7$'
}
let productTwo = {
  name: 'Apple',
  price: '7$'
}

function isSameProduct() {
  if (productOne.name === productTwo.name) {
    console.log(true);
  } else if (productOne.price === productTwo.price) {
    console.log(false);
  }
}
isSameProduct();

// lowercase

let text = 'Hello new world!';
text = text.toLowerCase();
console.log(text);

let textZero = 'all the boys and girls!';
textZero = textZero.toUpperCase();
console.log(textZero);


// repeat
let repeatedZero = 'You Back Outside '
repeatedZero = repeatedZero.repeat(2);
console.log(repeatedZero);


// flip Coin
function playGame(guess){
  const randomNumber = Math.random();
  const result = randomNumber < 0.5 ? 'Heads' : 'Tails';

  console.log(guess === result ? 'You win!' : 'You lose!');
  }


  // ternary operators
let age = 16;
let permission = age >= 18 ? "You are permitted to enter" : "You are not permitted to enter!";
console.log(permission);


let user = {
  name: 'John',
  student: true
}

let studentStatus = user.student ? true : false;
console.log(studentStatus);


let city = {
  nameCity: 'New York',
  subwayAvailable: true
}
let subwayStatus = city.subwayAvailable ? true : false;
console.log(subwayStatus);


// return

function add(x, y) {
  return x / y;
}
 let result = add(125, 5);
 console.log(result);
