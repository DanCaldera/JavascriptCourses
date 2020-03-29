const fs = require('fs');

fs.mkdir('./pzi/escuela-js/node', { recursive: true }, err => {
  if (err) {
    console.log(err, 'No se hicieron las carpetas compa.');
  }
});
