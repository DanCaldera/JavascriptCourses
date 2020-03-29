const obj = {
  name: "Daniel",
  age: 22,
  country: "Mx"
};

let { name, ...all } = obj;

console.log(name, all);

const objOne = {
  name: "Daniel",
  age: 22
};

const objTow = {
  ...objOne,
  country: "MX"
};

console.log(objTow);

//ec9 Added finally

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Hello World!");
        }, 3000)
      : reject(new Error("Test error"));
  });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log("Se acabó!"));

//ec9 Regex!
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-02");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
