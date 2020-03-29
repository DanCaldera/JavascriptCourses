const data = {
  frontend: "Oscar",
  backend: "Isabel",
  desing: "Ana"
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const values = Object.values(data);
console.log(values);

const keys = Object.keys(data);
console.log(keys);

const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, "--"));

//ec8 Async Await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Hello World!");
        }, 3000)
      : reject(new Error("Test Error!"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  const helloTwo = await setTimeout(() => {
    console.log("HelloTwo");
  }, 3000);
  console.log(hello);
  console.log(helloTwo);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
