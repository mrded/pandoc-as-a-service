var express = require('express'),
    bodyParser = require('body-parser')
    pdc = require('pdc');

var app = express();
var port = process.argv[2] || 8080;

app.use(bodyParser.json());  // To support JSON-encoded bodies.
// app.use(bodyParser.urlencoded({extended: true}));  // To support URL-encoded bodies.

app.get('/', function(req, res) {
  res.send({message:'welcome'});
});

app.post('/', function(req, res) {

  pdc(req.body.text, req.body.from, req.body.to, function(err, result) {
    if (err) res.send(err.message); // 500
      else res.send(result); // 200
  });

});

app.listen(port);
console.log('Server is avaliable on http://localhost:' + port);
