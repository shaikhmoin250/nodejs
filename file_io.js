var fs = require('fs');

fs.readFile('simple_server.js', function (err, buf) {
  console.log(buf.toString());
});

var contents = fs.readFileSync('hello_world.js').toString();
console.log(contents);
