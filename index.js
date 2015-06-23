var http = require('http');

var port = process.argv[2] || 8080; 

function handleRequest(request, response) {
  response.end('It Works!! Path Hit: ' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(port, function() {
  console.log("Server listening on: http://localhost:%s", port);
});

