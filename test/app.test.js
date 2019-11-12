const request = require('supertest');
const app = require('app');

describe('test express routes', () => {
  it('/api/v1/colors returns an array', () => {
    return request(app)
      .get('/api/v1/colors')
      .then(res => {
        expect(res).toEqual(expect.any(Array));
      });
  });  
});
