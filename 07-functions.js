function myFunction () {
  console.log('Hello new world!');
}
myFunction();

function taxCalculate(myParameter) {
  console.log(myParameter * 0.1);
}
taxCalculate(10220);

// Greet function
function greet(myName) {
  if (myName === undefined) {
    console.log('Hi there');
  } else {
  console.log(`Hello ${myName}`);
}
}
greet();


// convertToFarenheit
function convertToFarenheit(celcius) {
  console.log(`Farenheit = ${(celcius * 9/5) + 32}`);
}
convertToFarenheit(30);

// converToCelcius

function converToCelcius(Farenheit) {
  console.log(`Celcius = ${(Farenheit - 32) * 5/9}`);
}
converToCelcius(90);

// convertTemperature
function convertTemperature(degrees, unit) {
  if (unit === 'C') {
    console.log(`Farenheit = ${(degrees * 9/5) + 32} ${unit}`);
  } else if (unit === 'F') {
    console.log(`Celcius = ${(degrees - 32) * 5/9} ${unit}`);
  }
  return console.log(200);
}
convertTemperature(25, 'C');
convertTemperature(93, 'F');



// convertMoney

function convertToWon(Dollar) {
  console.log(`${Dollar} USD is equal to ${Dollar * 1315} won.`)
};
convertToWon(30);

function convertToDollar(Won) {
  console.log(`${Won} KRW is equal to ${Won * 0.00076} dollar. `)
}
convertToDollar(1000);

function convertMoney(currency) {
  if (currency === '$') {
    function convertToWon(Dollar) {
      console.log(`${Dollar} USD is equal to ${Dollar * 1315} won.`)
    };
  } else if (currency === '₩') {
    function convertToDollar(Won) {
      console.log(`${Won} KRW is equal to ${Won * 0.00076} dollar. `)
  };
}
  }
  convertToWon(20);
  convertToDollar(35000);
