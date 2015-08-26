/* globals it describe */
// Unit tests for the version endpoint.

var config = require('../src/config');

var settings = {
  CONTROL_REPO_PATH: './test/test-control',
  CONTENT_SERVICE_URL: 'http://content',
  PRESENTED_URL_DOMAIN: 'deconst.horse'
};

config.configure(settings);

var request = require('supertest');
var expect = require('chai').expect;
var server = require('../src/server');
var info = require('../package.json');

describe('/version', function () {
  it('reports the running application version', function (done) {
    request(server.create())
      .get('/version')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body.service).to.equal(info.name);
        expect(res.body.version).to.equal(info.version);
        expect(res.body.commit).to.have.length(7);
      })
      .end(done);
  });
});
