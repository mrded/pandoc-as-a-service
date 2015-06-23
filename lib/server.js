var http = require('http'),
    pdc = require('pdc');

var port = process.argv[2] || 8080;

this.server = http.createServer(function(req, res) {
  if (req.method === 'POST' && req.url === '/convert') {
    var stream = '';

    req.on('data', function(data) {
      stream += data;
    });

    req.on('end', function() {
      var params = JSON.parse(stream);

      pdc(params.text, params.from, params.to, function(err, result) {
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
  }
});

exports.listen = function() {
  this.server.listen.apply(this.server, arguments);
};

exports.close = function(callback) {
  this.server.close(callback);
};
