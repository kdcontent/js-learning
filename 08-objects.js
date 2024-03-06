// Why do we use object? We can reorganize well our code and instead of writing bunch of variables, we can write object.


// const product ={
//  userName: 'socks',
//  price: 1090
// };
// console.log(product);
// console.log(product.price);
// console.log(product.userName);

// product.userName = 'cotton socks';
// console.log(product);


// product.newProperty = 'what\'s pros and cons of this next check?'
// console.log(product);

// delete product.newProperty;
// console.log(product);


const product2 = {
  name: 'shirt',
  stats: {
    view:'4.5 mln',
    download: '1.2 mln',
    like: '2.8 mln'
  },
  birch: function myFunction() {
    console.log('Take all the designers bullshit, what do you have?');
  },

};

console.log(product2.stats.like);
// console.log(product2.birch.myFunction); -> error
product2.birch();

console.log(JSON.stringify(product2));



const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));
