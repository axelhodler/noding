var server = require('../server.js');

var http = require('http');

var assert = require('assert');

describe('server functionality', function() {
  describe('server works', function() {
    server.listen();
    it('should respond with status code 200', function() {
      http.get('http://127.0.0.1:1337', function(res) {
        assert.equal(200, res.statusCode);
      });
    });

    it('should return the static index.html file', function() {
      http.get('http://127.0.0.1:1337', function(res) {
        var body = '';
        res.on('data', function(chunk) {
          body += chunk;
        });
        res.on('end', function() {
          assert.equal('hello', body);
        });
      });
    });
  });
});
