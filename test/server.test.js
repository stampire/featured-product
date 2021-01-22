const request = require('supertest');
const app = require('../server/index');

describe('API requests', () => {
  it('Should receive a 200 response when requesting a product', () => {
    request(app)
      .get('/product/100001')
      .expect(200);
  });
});
