// primitive 

// 7 types : string, Number, Boolearn, null, undefined, Symbol, BigInt


// Reference (Non primitive)

// Array, Objests, Functions

//JavaScript is a dynamically typed language. 
//This means variable types are checked at runtime,
//  and a single variable can hold different data types (like a number, then a string) 
// throughout the execution of your program.

// static need to declear / define 
//no need to declear 


const score = 100;  // number
const scoreValue = 100.3 // number


const isLoggedIn = false;
const outsideTemp = null;

let useEmail;

const id = Symbol('123')
const anotherid = Symbol("123")

console.log(id === anotherid);


const bigNumber = 12n
console.log(typeof(bigNumber));


const heros = ["batman","jampa","tenzin"] // datatype object 

let oobj ={          // datatype object 
    name: "jampa",
    age: "21"
}

const myFunction = function(){  //function datatype.  this is called object function 
    console.log("helloWorld");
}

console.log(typeof myFunction);
