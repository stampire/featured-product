const request = require('supertest');
const app = require('../server/index');

describe('API requests', () => {
  it('Should receive a 200 response when requesting a product', (done) => {
    request(app)
      .get('/product/')
      .expect(200, done);
  });
});
