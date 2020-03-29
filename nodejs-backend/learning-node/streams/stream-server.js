const fs = require('fs');

const server = require('http').createServer();

server.on('request', (req, res) => {
  const source = fs.createReadStream('./big');
  source.pipe(res);
});

server.listen(3000);

//to listen in another terminal put:
//curl -i localhost:3000
