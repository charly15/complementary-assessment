const request = require('supertest');
const app = require('../app');

describe('GET /api/message', () => {
  it('returns status 200 and message', async () => {
    const res = await request(app).get('/api/message');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Hello from API!');
  });
});
