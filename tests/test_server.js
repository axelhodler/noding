var server = require('../server.js');

var http = require('http');

var assert = require('assert');

describe('server functionality', function() {
  describe('server works', function() {
    it('should respond with status code 200', function() {
      server.listen();
      http.get('http://127.0.0.1:1337', function(res) {
        assert.equal(200, res.statusCode);
      });
    });
  });
});
