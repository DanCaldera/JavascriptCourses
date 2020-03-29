const hola = n => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      log('Hola ' + n);
      resolve(n);
    }, 1000);
  });
};
const hablar = n => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      log(`I am ${n}, and i live in Guadalajara`);
      resolve(n);
      //   reject('Hay un error');
    }, 1000);
  });
};

const adios = n => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      log('Adios, ' + n);
      resolve(n);
    }, 1000);
  });
};

function log(str) {
  console.log(str);
}

console.log('Iniciando el proceso');
hola('Daniel')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(nombre => {
    console.log('Terminado el proceso');
  })
  .catch(err => {
    console.error(err);
  });
