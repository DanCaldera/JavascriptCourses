const { exec, spawn } = require('child_process');

// exec('ls -la', (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

// exec('node console.js', (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

let proceso = spawn('ls', ['-la']);

console.log(process.pid);
console.log(process.connected);

proceso.stdout.on('data', dato => {
  console.log(proceso.killed);
  console.log(dato.toString());
});

proceso.on('exit', mss => {
  console.log(mss);
});
