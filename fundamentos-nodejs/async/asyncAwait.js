const hola = async n => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      log('Hola ' + n);
      resolve(n);
    }, 1000);
  });
};
const hablar = async n => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      log(`I am ${n}, and i live in Guadalajara`);
      resolve(n);
      //   reject('Hay un error');
    }, 1000);
  });
};

const adios = async n => {
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

const main = async () => {
  let nombre = await hola('Daniel');
  await hablar(nombre);
  await hablar(nombre);
  await hablar(nombre);
  await hablar(nombre);
  await hablar(nombre);
  await adios(nombre);
  log('Terminamos');
};

log('Empezamos');
main();
