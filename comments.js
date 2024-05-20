// Create web server
// Create a web server that listens on port 3000. When it receives a request, it should respond with the following JSON object:
// {
//   "comments": [
//     {
//       "username": "dickeyxxx",
//       "comment": "This is a comment"
//     },
//     {
//       "username": "donavon",
//       "comment": "This is another comment"
//     }
//   ]
// }

var http = require('http');

var server = http.createServer(function(req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'application/json'});
  // Send the response body "Hello World"
  res.end(JSON.stringify({
    "comments": [
      {
        "username": "dickeyxxx",
        "comment": "This is a comment"
      },
      {
        "username": "donavon",
        "comment": "This is another comment"
      }
    ]
  }));
});

server.listen(3000, '' , function() {
  console.log('Server is running');
});