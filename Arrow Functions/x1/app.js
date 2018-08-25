/* 
let func = (arg1, arg2, ...argN) => expression

 This creates a function func that has arguments arg1..argN,
  evaluates the expression on the right side with their use and returns its result.

  It's the same(but much shorter) as : 
  let func = function(arg1, arg2, ...argN) {
  return expression;
}*/

// 4 EXAMPLES BELOW


// (1) This function expression is equivalent to...
let sum = function(a,b) { return a + b; };

// this arrow function expression
let add = (a,b) =>  a + b;

console.log( sum( 5, 4) ); //9
console.log( add( 5, 4) ); //9



// (2): If we have only one argument, then parentheses can be omitted, making that even shorter:

//equivalent of
//let tripple = function(n) { return n * 3 };
let tripple = n => n*3;

console.log( tripple(5) ); //15

//(3) If there are no arguments, we can put empty parentheses:

// let gwapoKo = function() { console.log('Asa eh') };
let gwapoKo = () => console.log("Asa eh");

gwapoKo(); //ASA


// (4) Multiline arrow functions : 

//Sometimes we need something a little bit more complex, like multiple expressions or statements.
// It is also possible, but we should enclose them in figure brackets. Then use a normal return within them.

let mutliply = (a, b) => {  // the figure bracket opens a multiline function
  let result = a * b;
  return result; // if we use figure brackets, must use return
};

console.log( mutliply(12, 2) ); // 24