var express = require('express'),
    bodyParser = require('body-parser')
    pdc = require('pdc');

this.server = express();

this.server.use(bodyParser.json());  // To support JSON-encoded bodies.
this.server.use(bodyParser.urlencoded({extended: true}));  // To support URL-encoded bodies.

this.server.get('/', function(req, res) {
  res.send({message:'welcome'});
});

this.server.post('/', function(req, res) {

  pdc(req.body.text, req.body.from, req.body.to, function(err, result) {
    if (err) res.send(err.message); // 500
      else res.send(result); // 200
  });

});

exports.listen = function(port) {
  this.server.listen(port);
  console.log("Express server listening on port %d", port);
};
