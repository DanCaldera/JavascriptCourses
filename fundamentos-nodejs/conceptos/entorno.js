let nombre = process.env.NOMBRE || 'sin nombre';
let webName = process.env.WEB_NAME || 'sin web';

nombre = 'Daniel';

console.log('Hola ' + nombre);
console.log('Mi sitio web es ' + webName);
