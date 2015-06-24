var express = require('express'),
    bodyParser = require('body-parser')
    pdc = require('pdc');

this.server = express();

// To support text-encoded bodies. {limit: '100kb'}
this.server.use(bodyParser.text());

this.server.get('/', function(req, res) {
  res.send({
    message:'Send HTTP POST with following arguments:',

    from: ["commonmark", "docbook", "docx", "epub", "haddock", "html", "json*", "latex",
      "markdown", "markdown_github", "markdown_mmd", "markdown_phpextra", "markdown_strict",
      "mediawiki", "native", "opml", "org", "rst", "t2t", "textile", "twiki"],

    to: ["asciidoc", "beamer", "commonmark", "context", "docbook", "docx", "dokuwiki",
      "dzslides", "epub", "epub3", "fb2", "haddock", "html", "html5", "icml", "json*",
      "latex", "man", "markdown", "markdown_github", "markdown_mmd", "markdown_phpextra",
      "markdown_strict", "mediawiki", "native", "odt", "opendocument", "opml", "org",
      "pdf**", "plain", "revealjs", "rst", "rtf", "s5", "slideous", "slidy", "texinfo", "textile"],

    text: "Text you want to convert."
  });
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
