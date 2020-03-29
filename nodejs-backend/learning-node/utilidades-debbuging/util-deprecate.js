const util = require('util');

const helloPluto = util.deprecate(() => {
  console.log(helloPluto);
}, 'pluto is deprecated, in not a planet anymore');

helloPluto();
