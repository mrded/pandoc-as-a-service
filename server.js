var express = require('express'),
    helpers = require('./helpers'),
    pdc = require('pdc');

this.server = express();
this.server.set('views', './views');
this.server.set('view engine', 'ejs');

this.server.get('/', function(req, res) {
  res.render('index');
});

this.server.post('/:format', function(req, res) {
  var to = req.params.format;
  var from = req.get('Content-Type').split("/")[1];

  helpers.getBody(req, function(body) {
    pdc(body, from, to, function(err, result) {
      if (err) res.sendStatus(400)
        else res.append('Content-Type', 'text/' + to).send(result);
    });
  });
});

exports.listen = function(port) {
  this.server.listen(port);
  console.log("Express server listening on port %d", port);
};
