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

  describe('Converting from promised formats', function() {
    it('should convert commonmark to html', function(done) {
      convert('commonmark', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert docbook to html', function(done) {
      convert('docbook', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert docx to html', function(done) {
      convert('docx', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert epub to html', function(done) {
      convert('epub', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert haddock to html', function(done) {
      convert('haddock', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to html', function(done) {
      convert('html', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert latex to html', function(done) {
      convert('latex', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert markdown to html', function(done) {
      convert('markdown', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert markdown_github to html', function(done) {
      convert('markdown_github', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert markdown_mmd to html', function(done) {
      convert('markdown_mmd', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert markdown_phpextra to html', function(done) {
      convert('markdown_phpextra', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert markdown_strict to html', function(done) {
      convert('markdown_strict', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert mediawiki to html', function(done) {
      convert('mediawiki', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert native to html', function(done) {
      convert('native', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert opml to html', function(done) {
      convert('opml', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert org to html', function(done) {
      convert('org', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert rst to html', function(done) {
      convert('rst', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert t2t to html', function(done) {
      convert('t2t', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert textile to html', function(done) {
      convert('textile', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert twiki to html', function(done) {
      convert('twiki', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });
  });

  // ---

  describe('Converting to promised formats', function() {
    it('should convert html to asciidoc', function(done) {
      convert('html', 'asciidoc', 'hello', function(err, response, body) {
        assert.equal('text/asciidoc; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to beamer', function(done) {
      convert('html', 'beamer', 'hello', function(err, response, body) {
        assert.equal('text/beamer; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to commonmark', function(done) {
      convert('html', 'commonmark', 'hello', function(err, response, body) {
        assert.equal('text/commonmark; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to context', function(done) {
      convert('html', 'context', 'hello', function(err, response, body) {
        assert.equal('text/context; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to docbook', function(done) {
      convert('html', 'docbook', 'hello', function(err, response, body) {
        assert.equal('text/docbook; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to docx', function(done) {
      convert('html', 'docx', 'hello', function(err, response, body) {
        assert.equal('text/docx; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to dokuwiki', function(done) {
      convert('html', 'dokuwiki', 'hello', function(err, response, body) {
        assert.equal('text/dokuwiki; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to dzslides', function(done) {
      convert('html', 'dzslides', 'hello', function(err, response, body) {
        assert.equal('text/dzslides; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to epub', function(done) {
      convert('html', 'epub', 'hello', function(err, response, body) {
        assert.equal('text/epub; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to epub3', function(done) {
      convert('html', 'epub3', 'hello', function(err, response, body) {
        assert.equal('text/epub3; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to fb2', function(done) {
      convert('html', 'fb2', 'hello', function(err, response, body) {
        assert.equal('text/fb2; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to haddock', function(done) {
      convert('html', 'haddock', 'hello', function(err, response, body) {
        assert.equal('text/haddock; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to html', function(done) {
      convert('html', 'html', 'hello', function(err, response, body) {
        assert.equal('text/html; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to html5', function(done) {
      convert('html', 'html5', 'hello', function(err, response, body) {
        assert.equal('text/html5; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to icml', function(done) {
      convert('html', 'icml', 'hello', function(err, response, body) {
        assert.equal('text/icml; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to latex', function(done) {
      convert('html', 'latex', 'hello', function(err, response, body) {
        assert.equal('text/latex; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to man', function(done) {
      convert('html', 'man', 'hello', function(err, response, body) {
        assert.equal('text/man; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to markdown', function(done) {
      convert('html', 'markdown', 'hello', function(err, response, body) {
        assert.equal('text/markdown; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to markdown_github', function(done) {
      convert('html', 'markdown_github', 'hello', function(err, response, body) {
        assert.equal('text/markdown_github; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to markdown_mmd', function(done) {
      convert('html', 'markdown_mmd', 'hello', function(err, response, body) {
        assert.equal('text/markdown_mmd; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to markdown_phpextra', function(done) {
      convert('html', 'markdown_phpextra', 'hello', function(err, response, body) {
        assert.equal('text/markdown_phpextra; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to markdown_strict', function(done) {
      convert('html', 'markdown_strict', 'hello', function(err, response, body) {
        assert.equal('text/markdown_strict; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to mediawiki', function(done) {
      convert('html', 'mediawiki', 'hello', function(err, response, body) {
        assert.equal('text/mediawiki; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to native', function(done) {
      convert('html', 'native', 'hello', function(err, response, body) {
        assert.equal('text/native; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to odt', function(done) {
      convert('html', 'odt', 'hello', function(err, response, body) {
        assert.equal('text/odt; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to opendocument', function(done) {
      convert('html', 'opendocument', 'hello', function(err, response, body) {
        assert.equal('text/opendocument; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to opml', function(done) {
      convert('html', 'opml', 'hello', function(err, response, body) {
        assert.equal('text/opml; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to org', function(done) {
      convert('html', 'org', 'hello', function(err, response, body) {
        assert.equal('text/org; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to plain', function(done) {
      convert('html', 'plain', 'hello', function(err, response, body) {
        assert.equal('text/plain; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to revealjs', function(done) {
      convert('html', 'revealjs', 'hello', function(err, response, body) {
        assert.equal('text/revealjs; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to rst', function(done) {
      convert('html', 'rst', 'hello', function(err, response, body) {
        assert.equal('text/rst; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to rtf', function(done) {
      convert('html', 'rtf', 'hello', function(err, response, body) {
        assert.equal('text/rtf; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to s5', function(done) {
      convert('html', 's5', 'hello', function(err, response, body) {
        assert.equal('text/s5; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to slideous', function(done) {
      convert('html', 'slideous', 'hello', function(err, response, body) {
        assert.equal('text/slideous; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to slidy', function(done) {
      convert('html', 'slidy', 'hello', function(err, response, body) {
        assert.equal('text/slidy; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to texinfo', function(done) {
      convert('html', 'texinfo', 'hello', function(err, response, body) {
        assert.equal('text/texinfo; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it('should convert html to textile', function(done) {
      convert('html', 'textile', 'hello', function(err, response, body) {
        assert.equal('text/textile; charset=utf-8', response.headers['content-type']);
        assert.equal(200, response.statusCode);
        done();
      });
    });
  });

  // ---

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

