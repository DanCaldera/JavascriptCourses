const anotherFunction = () => {
  return badFunction();
};

const badFunction = () => {
  return 3 + z;
};

const asyncBadFunction = cb => {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      cb(error);
    }
  });
};

try {
  //   anotherFunction();
  asyncBadFunction(console.log);
} catch (error) {
  console.error(error.message);
}

console.log('Esto está al final');
