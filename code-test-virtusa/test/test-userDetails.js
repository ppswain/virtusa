var expect  = require('chai').expect;
var request = require('request');
var assert = require('assert');

it('Main page status', function(done) {
    request('http://localhost:3009' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});