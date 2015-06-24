var assert = require('assert'),
    request = require("request");

var server = require('../server');
var port = process.argv[3] || 8080;

describe('server', function() {
  before(function() {
    server.listen(port);
  });

  describe('/:from/:to', function() {
    it('should convert markdown to mediawiki', function(done) {
      var params = {
        uri: "http://localhost:" + port + "/markdown/mediawiki",
        method: "POST",
        headers: {"Content-Type": "text/plain"},
        body: "# Heading"
      };

      request(params, function(error, response, body) {
        assert.equal('= Heading =', body.trim());
        done();
      });
    });
  });
});

