const http = require('http');

http.createServer(router).listen(3000);

function router(request, response) {
  console.log('nueva petición');
  console.log(request.url);

  switch (request.url) {
    case '/hola':
      response.write('Hola ya se utilizar HTTP de Node.js');
      response.end();
      break;

    default:
      response.write('Error 404');
      response.end();
      break;
  }

  //   response.writeHead(201, { 'Content-Type': 'text/plain' });
}

console.log('escuchando en el puerto 3000');
