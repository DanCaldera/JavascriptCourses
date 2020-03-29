const EventEmitter = require('events');

class Logger extends EventEmitter {
  execute(cb) {
    console.log('Before');
    this.emit('start');
    cb();
    this.emit('finish');
    console.log('After');
  }
}

const logger = new Logger();

logger.on('start', () => console.log('starting'));
logger.on('finish', () => console.log('finishing'));

// logger.execute(() => console.log('helloWorld!'));
logger.execute(() => {
  setTimeout(() => console.log('asincrono'), 1000);
});
