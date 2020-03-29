const asyncCallback = cb => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return cb(null, 'helloWorld');
    } else {
      cb(new Error('HelloError'));
    }
  }, 2000);
};

asyncCallback((err, msg) => {
  if (err) {
    console.error('error', err);
  } else {
    console.log('message', msg);
  }
});
