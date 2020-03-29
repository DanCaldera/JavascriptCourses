const fs = require('fs');

const leer = (ruta, cb) => {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString());
  });
};

const escribir = (ruta, contenido, cb) => {
  fs.writeFile(ruta, contenido, err => {
    if (err) {
      console.error('no he podido escribirlo', err);
    } else {
      console.error('se ha escrito correctamente');
    }
  });
};

const borrar = (ruta, cb) => {
  fs.unlink(ruta, cb);
};

// leer(__dirname + '/archivo.txt', console.log);
// escribir(__dirname + '/archivo2.txt', 'Nuevo contenido!', console.log);
// leer(__dirname + '/archivo1.txt', console.log);
borrar(__dirname + '/archivo2.txt', console.log);
