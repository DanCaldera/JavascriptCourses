//ec10 flat

let arr = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(arr.flat(2));

//ec10 flatMap

let array = [1, 2, 3, 4, 5];

console.log(array.flatMap(value => [value, value * 2]));

//ec10 trimStart-End

let hello = "          hello world";
console.log(hello);
console.log(hello.trimLeft());
//trimStart == trimLeft

let helloEnd = "hello world          ";
console.log(helloEnd);
console.log(helloEnd.trimRight());
//trimEnd == trimRight

//ec10 Easy implement of error
// try {
// } catch {
//   error
// }

let entries = [
  ["name", "Daniel"],
  ["age", "22"]
];

console.log(Object.fromEntries(entries));

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
