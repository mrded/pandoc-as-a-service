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
      uri: "http://localhost:" + [port, to].join('/'),
      method: "POST",
      headers: {"Content-Type": "text/" + from},
      body: text
    };

    request(params, function(err, response, body) {
      callback(err, response, body.trim());
    });
  };

  describe('/:format', function() {
    it('should convert markdown to mediawiki', function(done) {
      convert('markdown', 'mediawiki', '# Heading', function(err, response, body) {
        assert.ifError(err);
        assert.equal('text/mediawiki; charset=utf-8', response.headers['content-type'], 'content-type is right.');
        assert.equal(200, response.statusCode, 'Status code is right.');
        assert.equal('= Heading =', body, 'Body is right.');
        done();
      });
    });

    it('should not convert to application files', function(done) {
      convert('markdown', 'epub', '# Heading', function(err, response, body) {
        assert.ifError(err);
        assert.equal(400, response.statusCode);
        done();
      });
    });
  });
});

