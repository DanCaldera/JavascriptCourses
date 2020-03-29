function hola(n, f) {
  setTimeout(() => {
    log('Hola ' + n);
    f(n);
  }, 1000);
}
function hablar(call) {
  setTimeout(() => {
    log('I am Daniel, and i live in Guadalajara');
    call();
  }, 1000);
}

function adios(n, f) {
  setTimeout(() => {
    log('Adios, ' + n);
    f(n);
  }, 1000);
}

function log(str) {
  console.log(str);
}

// --

// Callback Hell!
// hola('Daniel Caldera ', nombre => {
//   hablar(() => {
//     hablar(() => {
//       hablar(() => {
//         hablar(() => {
//           hablar(() => {
//             hablar(() => {
//               hablar(() => {
//                 hablar(() => {
//                   hablar(() => {
//                     hablar(() => {
//                       hablar(() => {
//                         hablar(() => {
//                           hablar(() => {
//                             hablar(() => {
//                               hablar(() => {
//                                 adios(nombre, () => log('Terminamos...'));
//                               });
//                             });
//                           });
//                         });
//                       });
//                     });
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

const conversacion = (nombre, veces, callback) => {
  if (veces > 0) {
    hablar(() => {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
};

log('Iniciando Proceso...');
hola('Daniel', nombre => {
  conversacion(nombre, 3, () => {
    console.log('Proceso terminado...');
  });
});
