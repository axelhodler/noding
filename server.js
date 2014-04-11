var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('');
});

exports.listen = function() {
  app.listen(1337);
};
