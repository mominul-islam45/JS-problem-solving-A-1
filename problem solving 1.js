// (01) Create a variable called carName, assign the value Volvo to it.

// let ... = "" ; 

let carName = "Volvo";


/* (02) On one single line, declare three variables with the following names and values:

firstName = "John"
lastName = "Doe"
age = 35

So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
3rd Variable Name And Values Both! 

let ... = "John";  // write variable name
let lastName = "..." //write variable values 
let ... = ... ; // write variable name and values both */ 

let firstName = "John"; let lastName = "Doe"; let age = 35;


/* (03) Use the correct assignment operator that will 
result in x being 50 (same as x = x * y). 

x = 10;
y = 5;
x = ... // what will be the value of x ? */

x = 10;
y = 5;
x *= y;
console.log(x)


/* (04) Use comments to describe the correct data type of the following variables:

let length = 16; // data type ? 
let lastName = "Johnson"; // data type ? 

const x = {
  firstName: "John",  
  lastName: "Doe"
};    // data type ? */

let length = 16; // Number
// let lastName = "Johnson"; // String

const x = {
    firstName: "John",
    lastName: "Doe"
};   // Object



/* (05) Execute the function named myFunction.
 
 function myFunction() {
  alert("Hello World!");
}

// call the function and see the output */ 

function myFunction() {
    alert("Hello World!");
}
myFunction()  //It will show the alert message (Hello World!) in the browser.



// (06) Create an object called person with name = John, age = 50, Then,
//    access the object to alert("John is 50").

const person = {
    name: "John",
    age: 50
}
alert(person.name + " " + "is" + " " + person.age)



// (07) The <button> element should do something when someone clicks on it. Try to fix it!

// <button>Click me.</button> 

{ <button onclick="alert('Hey world!')">Click me.</button> }
//When the button was clicked, the browser will show the alert message (Hey world!)



/* (08) 
1. Alert the number of items in an array, using the correct Array property: 

const cars = ["Volvo", "Jeep", "Mercedes"];*/

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

/*2. Change the first item of Brand to "Ford".

	const Brand = ["Volvo", "Jeep", "Mercedes"];*/

const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";
console.log(Brand);




//  (09)
//  1. Use the correct Math method to create a random number.

console.log(Math.random())

// 2. Use the correct Math method to return the largest number of 10 and 20.

console.log(Math.max(10, 20))

// 3. Use the correct Math method to get the square root of 9.

console.log(Math.sqrt(9))



// (10)
// 1. Choose the correct comparison operator to alert true, when x is greater than y. 
// x = 10;
// y = 5;

// alert() // ? 

x = 10;
y = 5;

alert(x > y)

// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough". 
{
  let age = 16;

  let comment = (age < 18) ? "Too young" : "Old enough";

  alert(comment)
}
