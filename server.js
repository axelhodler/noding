var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

exports.listen = function() {
  app.listen(1337);
};
