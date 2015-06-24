var express = require('express'),
    bodyParser = require('body-parser')
    pdc = require('pdc');

this.server = express();

// To support text-encoded bodies. {limit: '100kb'}
this.server.use(bodyParser.text());

this.server.set('views', './views');
this.server.set('view engine', 'ejs');

this.server.get('/', function(req, res) {
  res.render('index');
});

this.server.post('/:from/:to', function(req, res) {
  if (!req.params.from || !req.params.to) return res.sendStatus(400);

  pdc(req.body, req.params.from, req.params.to, function(err, result) {
    if (err) {
      res.sendStatus(500);
      res.send(err.message);
    }
    else res.send(result); // 200
  });
});

exports.listen = function(port) {
  this.server.listen(port);
  console.log("Express server listening on port %d", port);
};
