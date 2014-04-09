var http = require('http');

this.server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('');
});

exports.listen = function() {
  this.server.listen(1337, '127.0.0.1');
};
