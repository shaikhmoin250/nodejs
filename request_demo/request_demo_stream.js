var request = require("request");
var fs = require("fs");


var file = fs.createWriteStream('sunset.jpg');
request('http://weknowyourdreams.com/images/sunset/sunset-06.jpg')
  .pipe(file)

file.on('finish', function () {
  console.log('Downloaded cool picture of Sunset');
})
