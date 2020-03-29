const fs = require('fs');

const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./error.log');

const consoleFile = new console.Console(out, err);

setInterval(() => {
  consoleFile.log(new Date());
  consoleFile.error(new Error('Ha ocurrido un error compa.'));
}, 2000);
