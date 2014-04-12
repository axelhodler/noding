var server = require('../server.js');
var http = require('http');
var assert = require('assert');
var fs = require('fs');

describe('server functionality', function() {
  url = 'http://localhost:1337';

  describe('query on index route', function() {
    server.listen();
    it('should respond with status code 200', function() {
      http.get(url, function(res) {
        assert.equal(200, res.statusCode);
      });
    });

    it('should return the static index.html file', function() {
      readContent = fs.readFileSync('index.html');

      http.get(url, function(res) {
        body = '';
        res.on('data', function(chunk) {
          body += chunk;
        });
        res.on('end', function() {
          assert.equal(readContent, body);
        });
      });
    });
  });
});
