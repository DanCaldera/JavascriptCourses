const jwt = require('jsonwebtoken');

const [, , option, secret, nameOrToken] = process.argv;

if (!option || !secret || !nameOrToken) {
  return console.log('Missing Arguments');
}

function signToken(payload, secret) {
  return jwt.sign(payload, secret);
}

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

if (option == 'sign') {
  console.log(signToken({ sub: nameOrToken }, secret));
} else if (option == 'verify') {
  console.log(verifyToken(nameOrToken, secret));
} else {
  console.log('Option needs to be "sign" or "verify"');
}

//node index.js sign secret daniel
//-> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYW5pZWwiLCJpYXQiOjE1ODU0NDMzNTh9.b55oXiEVB5y7aCT2KBwD8VLEx6C4c6z67wPvErKx9OQ
//Check in jwt.io for test

//node index.js verify secret eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYW5pZWwiLCJpYXQiOjE1ODU0NDMzNTh9.b55oXiEVB5y7aCT2KBwD8VLEx6C4c6z67wPvErKx9OQ
//-> { sub: 'daniel', iat: 1585443358 }
