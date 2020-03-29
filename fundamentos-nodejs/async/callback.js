const hola = (nombre, callback) => {
  console.log('Soy una función asincrona');
  setTimeout(() => {
    console.log('Estoy siendo asincrona!');
    console.log(`Todo terminado jefe ${nombre}!`);
    callback();
  }, 1000);
  adios(nombre, () => console.log('Ahora sí terminando proceso!'));
};

const adios = (nombre, callback) => {
  setTimeout(() => {
    console.log('Adios, ' + nombre), callback();
  }, 2000);
};

console.log('iniciando proceso!');
hola('Daniel', () => console.log('terminando proceso!'));
