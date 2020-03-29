const promiseFunction = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('helloWorld!');
      } else {
        reject(new Error('HelloError'));
      }
    }, 2000);
  });

const asyncAwait = async () => {
  try {
    const msg = await promiseFunction();
    console.log(msg);
  } catch (err) {
    console.log(err);
  }
};

asyncAwait();
