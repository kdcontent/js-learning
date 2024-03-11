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



// Instead of creating bunch of variables, we can add all of them to one object and use it where we want;
// we [] notation instead of '.' notation when we can't access some properties with dot notation. For examples soccerPlayer.transfer-price;