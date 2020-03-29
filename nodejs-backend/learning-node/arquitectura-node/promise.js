const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve('helloWorld!');
    } else {
      reject(new Error('HelloError'));
    }
  }, 2000);
});

promise
  .then(msg => msg.toUpperCase())
  .then(msg => console.log(msg))
  .catch(err => console.error(err));
