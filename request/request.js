var request = require("request");

request("http://www.google.com", function(error, response, body) {
  if (error) {
    console.error("Error fetching data: "+error);
    return;
  }
  console.log(body);
});
