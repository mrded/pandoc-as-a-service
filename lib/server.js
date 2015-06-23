var http = require('http'),
    pdc = require('pdc');

var port = process.argv[2] || 8080; 

this.server = http.createServer(function(req, res) {
  pdc('# Heading', 'markdown', 'mediawiki', function(err, result) {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(err.message);
    }
    else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result);
    }
  });
});

exports.listen = function() {
  this.server.listen.apply(this.server, arguments);
};

exports.close = function(callback) {
  this.server.close(callback);
};

