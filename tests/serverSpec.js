var assert = require('assert'),
    request = require("request");

describe('server', function() {
  var server = require('../server');
  var port = process.argv[3] || 8080;

  before(function() {
    server.listen(port);
  });

  var convert = function(from, to, text, callback) {
    var params = {
      uri: "http://localhost:" + [port, from, to].join('/'),
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: text
    };

    request(params, function(error, response, body) {
      callback(body.trim());
    });
  };

  describe('/:from/:to', function() {
    it('should convert markdown to mediawiki', function(done) {
      convert('markdown', 'mediawiki', '# Heading', function(body) {
        assert.equal('= Heading =', body);
        done();
      });
    });
  });
});

