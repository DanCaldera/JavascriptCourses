const { Transform } = require('stream');

function toCamelCase(str) {
  return str
    .split(' ')
    .map(function(word, index) {
      if (index == 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(toCamelCase(chunk.toString()));
    callback();
  },
});

process.stdin.pipe(transformStream).pipe(process.stdout);
