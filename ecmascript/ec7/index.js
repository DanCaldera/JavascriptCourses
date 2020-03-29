//before ec7
const arr = [1, 2, 3, 4, 5];

if (arr.indexOf(1) !== -1) {
  console.log("Se encuentra el número 1");
} else {
  console.log("No se encuentra el número 1");
}

//With ec7

let numbers = [1, 2, 3, 6, 8, 9];

if (numbers.includes(7)) {
  console.log("Sí se encuentra el valor 7");
} else {
  console.log("No se encuentra el número 7");
}

//ec7 exponent
let base = 4;
let exponent = 3;
let result = base ** exponent;

console.log(result);
