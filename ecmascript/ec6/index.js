/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-redeclare */

function olfFunction(name, age, country) {
  var name = name || "Daniel";
  var age = age || 22;
  var country = country || "MX";

  console.log(name, age, country);
}

olfFunction();

//es6

function newFunction(name = "Daniel", age = 22, country = "MX") {
  console.log(name, age, country);
}

newFunction();

// before ec6 Template Literals

let hello = "Hello";
let world = "World!";
let epicPhrase = hello + " " + world;

console.log(epicPhrase);

//ec6 Template Literals

let epicPhrase2 = `${hello} ${world}`;

console.log(epicPhrase2);

//before ec6 multiline
let lorem =
  "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n" +
  "otra frase épica";

//ec6 multiline
let lorem2 = `lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
otra frase épica`;

console.log(lorem);
console.log(lorem2);

//Desestructuración

let person = {
  name: "oscar",
  age: 25,
  country: "MX"
};

console.log(person.name, person.age, person.country);

let { name, age, country } = person;

console.log(name, age, country);

// ec6 Spread Operator

let teamOne = ["Oscar", "Julián", "Ricardo"];
let teamTwo = ["Valeria", "Jessica", "Camila"];

let education = ["David", ...teamOne, ...teamTwo];

console.log(education);

// ec6 var let const

{
  var globalVar = "Global var";
}

{
  let globalLet = "Global let";
  console.log(globalLet);
}

console.log(globalVar);
// console.log(globalLet);

const a = "b";
// a = "a"; // not allowed
console.log(a);

let nameTwo = "name";
let ageTwo = 22;

//ec5
let obj = { nameTwo: nameTwo, ageTwo: ageTwo };

//ec6
let objTwo = { nameTwo, ageTwo };

console.log(obj, objTwo);

//ec6 Arrow Functions
const names = [
  {
    name: "oscar",
    age: 32
  },
  {
    name: "Jessica",
    age: 22
  }
];

let listOfNames = names.map(function(item) {
  console.log(item.name);
});

let listOfNamesArrow = names.map(item => console.log(item.name, item.age));

const listofNamesArrowTwo = (name, age, country) => {
  //...
};

const listofNamesArrowThree = name => {
  //...
};

const square = num => num * num;

console.log(listOfNamesArrow);

//ec6 Promises
const helloPromise = value => {
  return new Promise((resolve, reject) => {
    if (value) {
      resolve("Hey!");
    } else {
      reject("Upsss!");
    }
  });
};

helloPromise(true)
  .then(response => {
    console.log(response);
  })
  .then(() => console.log("Hola de nuez!"))
  .catch(error => console.log(error));

//ec5 Class
class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new Calculator();
console.log(calc.sum(2, 2));

//ec6 modulus
// eslint-disable-next-line import/first
import { helloModule } from "./module";

helloModule();

//ec6 generator
function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }

  if (true) {
    yield "World!";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next());
console.log(generatorHello.next());
console.log(generatorHello.next());
