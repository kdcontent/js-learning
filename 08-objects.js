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


// compare product


// Instead of creating bunch of variables, we can add all of them to one object and use it where we want;
// we [] notation instead of '.' notation when we can't access some properties with dot notation. For examples soccerPlayer.transfer-price;