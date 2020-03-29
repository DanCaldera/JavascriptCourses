const { Writable } = require('stream');

const writableStream = new Writable({
  write(chunk, enconding, callback) {
    console.log(chunk.toString());
    callback();
  },
});

process.stdin.pipe(writableStream);
