const fs = require('fs');

const files = fs.readdir(__dirname, (err, files) => {
  if (err) {
    return console.log(err, 'Hubo un error, amigo.');
  }
  console.log(files);
});
