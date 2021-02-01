const request = require('supertest')
const app = require('../index')
/*describe('Get Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/posts')
      .send({
        userId: 1,
        title: 'test is cool',
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
  })
})*/

describe('GET /learn/list', function () {
    it('respond with json containing a list of examples', function (done) {
        request(app)
            .get('/learn/list')
            .set('http-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmF5cmFtIiwiZW1haWwiOiJhYmNAdGVzdDIuY29tIiwiaWF0IjoxNjEyMTY5MDg2fQ.DNDDmxjbfZVeLZk8vlr9IR6nbixvEnCCFSNbvcQU71E')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('GET /learn/list/CQsiX3w9vv2fMdywAn28', function () {
    it('respond with json containing a list of examples', function (done) {
        request(app)
            .get('/learn/list')
            .set('http-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmF5cmFtIiwiZW1haWwiOiJhYmNAdGVzdDIuY29tIiwiaWF0IjoxNjEyMTY5MDg2fQ.DNDDmxjbfZVeLZk8vlr9IR6nbixvEnCCFSNbvcQU71E')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
describe('GET /user/complete', function () {
    it('respond with json containing a list of examples', function (done) {
        request(app)
            .get('/learn/list')
            .set('http-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmF5cmFtIiwiZW1haWwiOiJhYmNAdGVzdDIuY29tIiwiaWF0IjoxNjEyMTY5MDg2fQ.DNDDmxjbfZVeLZk8vlr9IR6nbixvEnCCFSNbvcQU71E')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('GET /ex/mindbulletlist', function () {
    it('respond with json containing a list of examples', function (done) {
        request(app)
            .get('/learn/list')
            .set('http-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmF5cmFtIiwiZW1haWwiOiJhYmNAdGVzdDIuY29tIiwiaWF0IjoxNjEyMTY5MDg2fQ.DNDDmxjbfZVeLZk8vlr9IR6nbixvEnCCFSNbvcQU71E')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('GET /ex/getWords', function () {
    it('respond with json containing a list of examples', function (done) {
        request(app)
            .get('/learn/list')
            .set('http-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmF5cmFtIiwiZW1haWwiOiJhYmNAdGVzdDIuY29tIiwiaWF0IjoxNjEyMTY5MDg2fQ.DNDDmxjbfZVeLZk8vlr9IR6nbixvEnCCFSNbvcQU71E')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});