//JS Code
console.log('Hemlo Bois Wassup!');

//Variables
let name = 'Priyansh Singh';
console.log(name);

let firstName = 'Varun';
let lastName = 'Singh';
console.log(firstName + ' ' +lastName);

//Constants
const x = 3;
console.log(x);

//Primitive Data types
let nameNew = 'Hans Zimmer' //String Literal
let age = 19; //Number Literal
let isApproved = true; //Boolean literal
let new1 = undefined; //Undefined
let new2 = null; //null

//Objects
let person = {
    NAME : 'Priyansh',
    AGE : 18 
};

//Dot Notation
    person.NAME = 'Varun';
    person.AGE = 19;
console.log(person.NAME);

//Bracket Notation
    person['NAME'] = 'King';
console.log(person.NAME);

//Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 123;
console.log(selectedColors);
console.log(selectedColors.length);

//Functions
function greet(){
    console.log("Hello mate, the function GREET is called")
}
greet();

let a, b;
function sum(a, b){
    let z;
    z = a + b
    console.log('The sum of a and b = ' + z);
}
sum(15, 20);